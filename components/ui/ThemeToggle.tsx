// components/ThemeToggle.tsx
"use client"; // クライアントコンポーネントとして定義

import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 border rounded"
    >
      {theme === 'dark' ? 'ライトモード' : 'ダークモード'}
    </button>
  );
};

export default ThemeToggle;