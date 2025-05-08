'use client';

// This page is intentionally left blank. Update this file to add content to the Whim homepage.

import { useEffect, useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if the user prefers dark mode
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    // Add listener for changes to color scheme preference
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    // Clean up event listener
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  // For now, just display the detected mode
  return (
    <div style={{ 
      height: '100vh',
      width: '100%',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#121212' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <p>
        {isDarkMode ? 'Dark mode detected' : 'Light mode detected'}
      </p>
    </div>
  );
}
