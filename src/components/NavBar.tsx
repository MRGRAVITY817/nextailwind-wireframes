import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };
  return (
    <nav className="border-dark dark:border-bright flex items-center justify-between px-12 py-4 border-b">
      <h1>Navigation bar</h1>
      <button onClick={switchTheme}>
        {theme === 'light' ? 'Set Dark' : 'Set Bright'}
      </button>
    </nav>
  );
};
