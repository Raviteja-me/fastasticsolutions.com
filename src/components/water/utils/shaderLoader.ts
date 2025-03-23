export const loadShader = async (path: string): Promise<string> => {
  const response = await fetch(path);
  return response.text();
};

export const createShaderMaterial = (vertexShader: string, fragmentShader: string) => {
  return {
    vertexShader,
    fragmentShader,
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: [0, 0] },
      uResolution: { value: [window.innerWidth, window.innerHeight] }
    }
  };
};