import React, { useEffect, useRef } from 'react'
import assets from '../assets/assets'

export default function ThemeToggleBtn({theme, setTheme}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const preferredDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (preferredDarkMode) {
      setTheme('dark');
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleClick = () => {
      console.log('Button clicked via ref, current theme:', theme);
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      console.log('Setting new theme to:', newTheme);
      setTheme(newTheme);
    };

    button.addEventListener('click', handleClick);
    return () => button.removeEventListener('click', handleClick);
  }, [theme, setTheme]);

  return (
    <>
    <button ref={buttonRef}>
      {theme === 'dark' ? (
        <img src={assets.sun_icon} alt='sun icon' className='size-8.5 p-1.5
         border border-gray-500 rounded-full' />  
      ):(
     <img src={assets.moon_icon} alt='sun icon' className='size-8.5 p-1.5
         border border-gray-500 rounded-full' />
      )}
    </button>
    </>
  )
}

