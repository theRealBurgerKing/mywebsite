import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton, Slider } from '@mui/material';
import { PlayArrow, Pause, VolumeUp } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';
import musicFile from '../assets/music.mp3';

interface DraggableFloatingBlockProps {
  children?: React.ReactNode;
  initialPosition?: { x: number; y: number };
  size?: { width: number; height: number };
}

export const DraggableFloatingBlock: React.FC<DraggableFloatingBlockProps> = ({
  children,
  initialPosition = { x: window.innerWidth - 250, y: window.innerHeight - 180 },
  size = { width: 220, height: 200 }
}) => {
  const { theme } = useTheme();
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isDraggingDisabled, setIsDraggingDisabled] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    // 如果拖拽被禁用，则不处理拖拽
    if (isDraggingDisabled) return;
    
    if (blockRef.current) {
      const rect = blockRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // 限制在屏幕范围内
      const maxX = window.innerWidth - size.width;
      const maxY = window.innerHeight - size.height;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 音乐播放控制
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (_event: Event, newValue: number | number[]) => {
    if (audioRef.current) {
      const newTime = newValue as number;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
    const newVolume = newValue as number;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // 处理滑块区域的鼠标事件
  const handleSliderMouseEnter = () => {
    setIsDraggingDisabled(true);
  };

  const handleSliderMouseLeave = () => {
    setIsDraggingDisabled(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  // 音频事件监听
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', () => setIsPlaying(false));
      audio.loop = true; // 设置循环播放
      audio.volume = volume;

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [volume]);

  return (
    <>
      <audio ref={audioRef} src={musicFile} preload="metadata" />
      <Box
        ref={blockRef}
        onMouseDown={handleMouseDown}
        sx={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
          backgroundColor: theme.colors.surface,
          border: `2px solid ${theme.colors.primary}`,
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          cursor: isDragging ? 'grabbing' : 'grab',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          transition: isDragging ? 'none' : 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
          },
          userSelect: 'none',
        }}
      >
        {children || (
          <>
            {/* 标题栏 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '100%',
                mb: 1,
              }}
            >
              <VolumeUp sx={{ color: theme.colors.primary, fontSize: '1.2rem' }} />
              <Typography
                variant="h6"
                sx={{
                  color: theme.colors.text,
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}
              >
                哪里都是你
              </Typography>
            </Box>

            {/* 播放控制 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '100%',
                mb: 1,
              }}
            >
              <IconButton
                onClick={togglePlayPause}
                sx={{
                  color: theme.colors.primary,
                  backgroundColor: theme.colors.background,
                  '&:hover': {
                    backgroundColor: theme.colors.hover,
                  },
                }}
              >
                {isPlaying ? <Pause /> : <PlayArrow />}
              </IconButton>
              
              <Typography
                variant="body2"
                sx={{
                  color: theme.colors.textSecondary,
                  fontSize: '0.7rem',
                  minWidth: '35px',
                }}
              >
                {formatTime(currentTime)}
              </Typography>
            </Box>

            {/* 进度条 */}
            <Box 
              sx={{ width: '100%', mb: 1 }}
              onMouseEnter={handleSliderMouseEnter}
              onMouseLeave={handleSliderMouseLeave}
            >
              <Slider
                value={currentTime}
                max={duration || 0}
                onChange={handleSeek}
                sx={{
                  color: theme.colors.primary,
                  height: 4,
                  '& .MuiSlider-thumb': {
                    width: 12,
                    height: 12,
                  },
                  '& .MuiSlider-track': {
                    height: 4,
                  },
                  '& .MuiSlider-rail': {
                    height: 4,
                    backgroundColor: theme.colors.border,
                  },
                }}
              />
            </Box>

            {/* 音量控制 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '100%',
              }}
              onMouseEnter={handleSliderMouseEnter}
              onMouseLeave={handleSliderMouseLeave}
            >
              <VolumeUp sx={{ color: theme.colors.textSecondary, fontSize: '0.8rem' }} />
              <Slider
                value={volume}
                min={0}
                max={1}
                step={0.1}
                onChange={handleVolumeChange}
                sx={{
                  color: theme.colors.primary,
                  height: 3,
                  '& .MuiSlider-thumb': {
                    width: 10,
                    height: 10,
                  },
                  '& .MuiSlider-track': {
                    height: 3,
                  },
                  '& .MuiSlider-rail': {
                    height: 3,
                    backgroundColor: theme.colors.border,
                  },
                }}
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
