// components/ThemeToggle.tsx
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip title={`切换到${theme.mode === 'light' ? '深色' : '浅色'}主题`}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: theme.colors.text,
          '&:hover': {
            backgroundColor: theme.colors.hover,
          },
        }}
        aria-label="切换主题"
      >
        {theme.mode === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
}
