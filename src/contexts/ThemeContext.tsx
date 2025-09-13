// contexts/ThemeContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  invertedColorText: string;
  textSecondary: string;
  border: string;
  hover: string;
  active: string;
}

interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#f5f5dc', // 米色背景
    surface: '#ecd4ad',    // 浅棕色表面
    primary: '#8b4513',    // 深棕色主色
    secondary: '#a0522d',  // 中棕色次色
    text: '#2c2c2c',       // 深灰色文字
    invertedColorText: '#ffffff',
    textSecondary: '#666666', // 中灰色次要文字
    border: '#8b4513',     // 深棕色边框
    hover: 'rgba(139, 69, 19, 0.1)', // 主色半透明悬停
    active: '#8b4513',     // 激活状态
  }
};

const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: '#1a1a1a', // 深色背景
    surface: '#2d2d2d',    // 深灰色表面
    primary: '#ffd700',    // 金色主色
    secondary: '#ffed4e',  // 浅金色次色
    text: '#ffffff',       // 白色文字
    invertedColorText: '#000000',
    textSecondary: '#cccccc', // 浅灰色次要文字
    border: '#ffd700',     // 金色边框
    hover: 'rgba(255, 215, 0, 0.1)', // 金色半透明悬停
    active: '#ffd700',     // 激活状态
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // 从localStorage读取保存的主题，默认为light
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    return savedTheme === 'dark' ? darkTheme : lightTheme;
  });

  const toggleTheme = () => {
    setThemeState(prevTheme => 
      prevTheme.mode === 'light' ? darkTheme : lightTheme
    );
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode === 'dark' ? darkTheme : lightTheme);
  };

  // 保存主题到localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme.mode);
  }, [theme.mode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
