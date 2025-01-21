"use client";
import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('/videos/index.m3u8');
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = '/videos/index.m3u8';
    }
  }, []);

  return (
    <video ref={videoRef} controls style={{ width: '100%' }} />
  );
};

export default VideoPlayer;