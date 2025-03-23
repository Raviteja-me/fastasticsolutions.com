import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, FileText, Mic, Brain, Camera, Video, MessageSquare } from 'lucide-react';
import WaterEffect from '../components/water/WaterEffect';

const appsData = {
  "AI Creation Suite": [
    {
      title: "VoiceClone AI",
      icon: Mic,
      description: "Advanced voice cloning technology that creates natural-sounding synthetic voices from just a few seconds of audio.",
      features: [
        "Real-time voice conversion",
        "Multiple language support",
        "Emotion preservation",
        "Custom voice model training"
      ],
      demoLink: "https://voiceclone.demo.fastastic.ai"
    },
    {
      title: "AI Resume Maker",
      icon: FileText,
      description: "AI-powered resume builder that creates professional, ATS-friendly resumes tailored to specific job descriptions.",
      features: [
        "ATS optimization",
        "Industry-specific templates",
        "Skill gap analysis",
        "Interview preparation tips"
      ],
      demoLink: "https://lazyjobseeker.com"
    }
  ],
  "AI Assistants": [
    {
      title: "ImageMaster AI",
      icon: Camera,
      description: "Professional image editing and generation tool powered by advanced AI algorithms.",
      features: [
        "Style transfer",
        "Background removal",
        "Image upscaling",
        "Object manipulation"
      ],
      demoLink: "https://imagemaster.demo.fastastic.ai"
    },
    {
      title: "VideoWizard AI",
      icon: Video,
      description: "AI-powered video editing and creation platform for professional content.",
      features: [
        "Automatic editing",
        "Scene detection",
        "Content summarization",
        "Style transfer"
      ],
      demoLink: "https://videowizard.demo.fastastic.ai"
    }
  ],
  "Business Solutions": [
    {
      title: "ChatBot Builder",
      icon: MessageSquare,
      description: "Create custom AI chatbots trained on your business data and brand voice.",
      features: [
        "Custom training",
        "Multi-platform integration",
        "Analytics dashboard",
        "24/7 customer support"
      ],
      demoLink: "https://chatbot.demo.fastastic.ai"
    },
    {
      title: "BizAnalytics AI",
      icon: Brain,
      description: "Advanced business analytics and prediction platform using AI.",
      features: [
        "Trend analysis",
        "Revenue prediction",
        "Customer behavior insights",
        "Market analysis"
      ],
      demoLink: "https://bizanalytics.demo.fastastic.ai"
    }
  ]
};

const AppCard = ({ app }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-purple-600 rounded-lg">
        <app.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white">{app.title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{app.description}</p>
    <ul className="space-y-2 mb-6">
      {app.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-400">
          <Sparkles className="w-4 h-4 text-purple-400" />
          {feature}
        </li>
      ))}
    </ul>
    <motion.a
      href={app.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Try Demo
    </motion.a>
  </motion.div>
);

const ProApps = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0014]">
      <WaterEffect />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0014]/30 to-[#0a0014] pointer-events-none" />
      
      <div className="relative pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of cutting-edge AI applications designed to transform your digital experience.
            </p>
          </motion.div>

          {Object.entries(appsData).map(([category, apps], index) => (
            <div key={category} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-white mb-8"
              >
                {category}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {apps.map((app, appIndex) => (
                  <AppCard key={appIndex} app={app} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProApps;