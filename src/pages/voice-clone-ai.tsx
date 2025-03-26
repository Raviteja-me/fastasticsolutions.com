import React, { useState, useRef, useEffect } from 'react';
    import { Container, Box, Typography, Button, TextField, Paper, IconButton, LinearProgress } from '@mui/material';
    import { Mic, MicOff, Upload, Download, Play, Pause, Square, Trash2 } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';

    const VoiceCloneAI = () => {
      const [audioFile, setAudioFile] = useState(null);
      const [isRecording, setIsRecording] = useState(false);
      const [isPlaying, setIsPlaying] = useState(false);
      const [inputText, setInputText] = useState('');
      const [clonedAudio, setClonedAudio] = useState(null);
      const [loading, setLoading] = useState(false);
      const [apiError, setApiError] = useState(null);
      const audioRef = useRef(null);
      const mediaRecorderRef = useRef(null);
      const recordingTimeoutRef = useRef(null);
      const [micPermission, setMicPermission] = useState(null); // 'granted', 'denied', or null (prompt)

      // Recording animation
      const [recordingProgress, setRecordingProgress] = useState(0);

      useEffect(() => {
        let interval;
        if (isRecording) {
          interval = setInterval(() => {
            setRecordingProgress((prev) => (prev + 1) % 100);
          }, 100);
        } else {
          setRecordingProgress(0);
        }
        return () => clearInterval(interval);
      }, [isRecording]);

      const handleFileUpload = (event) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
          setAudioFile(file);
          setIsPlaying(false);
          setApiError(null);
        }
      };

      const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('audio/')) {
          setAudioFile(file);
          setIsPlaying(false);
          setApiError(null);
        }
      };

      const handleDragOver = (event) => {
        event.preventDefault();
      };

      const handleRecording = async () => {
        if (!isRecording) {
          // Check for microphone permission first
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setMicPermission('granted');

            const mediaRecorder = new MediaRecorder(stream);
            const chunks = [];

            mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

            mediaRecorder.onstop = () => {
              const blob = new Blob(chunks, { type: 'audio/wav' });
              setAudioFile(blob);
              setIsPlaying(false);
              setIsRecording(false);
              clearTimeout(recordingTimeoutRef.current);
              setApiError(null);
              // Crucial change: Set the audio source *immediately* after recording
              if (audioRef.current) {
                audioRef.current.src = URL.createObjectURL(blob);
              }
            };

            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;
            setIsRecording(true);

            recordingTimeoutRef.current = setTimeout(() => {
              if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
                mediaRecorderRef.current.stop();
              }
            }, 10000);
          } catch (error) {
            console.error('Error accessing microphone:', error);
            setMicPermission('denied');
            setApiError("Microphone access denied. Please allow microphone access in your browser settings.");
            return;
          }
        } else {
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
          }
        }
      };

      const handlePlayPause = () => {
        if (audioFile) {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
      };

      const handleRemoveAudio = () => {
        setAudioFile(null);
        setIsPlaying(false);
        if (audioRef.current) {
          audioRef.current.src = '';
        }
        setApiError(null);
      };

      useEffect(() => {
        if (audioFile && audioRef.current) {
          audioRef.current.src = URL.createObjectURL(audioFile);
          audioRef.current.onended = () => setIsPlaying(false);
        }
      }, [audioFile]);

      const handleCloneVoice = async () => {
        if (!audioFile || !inputText) return;

        setLoading(true);
        setApiError(null);
        const formData = new FormData();
        formData.append('reference_audio', audioFile);
        formData.append('text', inputText);
        formData.append('language', 'en');
        formData.append('speed', '1.0');
        formData.append('format', 'wav');

        try {
          const response = await fetch('https://tts-api-361474077422.us-central1.run.app/tts', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Voice cloning failed');
          }

          const audioBlob = await response.blob();
          const audioUrl = URL.createObjectURL(audioBlob);
          setClonedAudio(audioUrl);
        } catch (error) {
          console.error('Error cloning voice:', error);
          setApiError(error.message);
        } finally {
          setLoading(false);
        }
      };

      const handleDownload = () => {
        if (!clonedAudio) return;

        const a = document.createElement('a');
        a.href = clonedAudio;
        a.download = 'cloned-voice.wav';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };

      return (
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h2" align="center" gutterBottom color="textPrimary">
            AI Voice Cloning
          </Typography>

          <Paper
            elevation={3}
            sx={{ p: 4, mt: 4, backgroundColor: 'background.paper', borderRadius: 4 }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <AnimatePresence>
                {isRecording && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  >
                    <LinearProgress variant="determinate" value={recordingProgress} color="secondary" />
                    <Typography variant="caption" align="center" color="textSecondary">Recording...</Typography>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isRecording && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '100%',
                    height: 150,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px dashed #90caf9',
                    borderRadius: 4,
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="file"
                    hidden
                    accept="audio/*"
                    onChange={handleFileUpload}
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outlined" component="span" startIcon={<Upload />} color="primary">
                      Upload or Drag Audio File
                    </Button>
                  </label>
                </motion.div>
              )}

              <IconButton
                color={isRecording ? "error" : "primary"}
                onClick={handleRecording}
                size="large"
                disabled={micPermission === 'denied'}
              >
                {isRecording ? <MicOff fontSize="large" /> : <Mic fontSize="large" />}
              </IconButton>

              {micPermission === 'denied' && (
                <Typography variant="caption" color="error">
                  Microphone access denied.
                </Typography>
              )}

              {audioFile && (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton onClick={handlePlayPause} size="large">
                      {isPlaying ? <Pause fontSize="large" /> : <Play fontSize="large" />}
                    </IconButton>
                    {/* Placeholder for Waveform */}
                    <Box sx={{ width: '100%', height: 50, backgroundColor: '#90caf9', borderRadius: 2 }}>
                      <Typography variant='caption' sx={{ color: 'white', textAlign: 'center', lineHeight: '50px' }}>Waveform Placeholder</Typography>
                    </Box>
                    <IconButton onClick={handleRemoveAudio} size="large" color="error">
                      <Trash2 fontSize="large" />
                    </IconButton>
                  </Box>
                  <audio ref={audioRef} />
                </>
              )}

              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                label="Text to Clone"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                sx={{ backgroundColor: 'background.default' }}
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={!audioFile || !inputText || loading}
                onClick={handleCloneVoice}
                startIcon={loading ? <Square /> : null}
              >
                {loading ? 'Cloning...' : 'Generate Cloned Voice'}
              </Button>

              {apiError && (
                <Typography color="error" align="center">
                  {apiError}
                </Typography>
              )}

              {clonedAudio && (
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <audio controls src={clonedAudio} />
                  <Button
                    variant="outlined"
                    startIcon={<Download />}
                    onClick={handleDownload}
                    color="primary"
                  >
                    Download
                  </Button>
                </Box>
              )}
            </Box>
          </Paper>
        </Container>
      );
    };

    export default VoiceCloneAI;
