'use client';

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata needs to be in a separate file since this is a client component now
export const metadata = {
  title: 'Whim',
  description: 'Whatever you want it to be. Whatever you need it to be.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  return (
    <html lang="en" className={isDarkMode ? 'dark' : 'light'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          isDarkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'
        }`}
      >
        {children}
      </body>
    </html>
  );
}
