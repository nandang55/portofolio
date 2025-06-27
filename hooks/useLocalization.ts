'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';

type Locale = 'id' | 'en' | 'sp' | 'cn' | 'de' | 'nl';

interface LocalizationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: any;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

export const LocalizationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('id');
  const [messages, setMessages] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ambil bahasa dari localStorage saat komponen mount
    const savedLocale = localStorage.getItem('preferred-language') as Locale;
    if (savedLocale && ['id', 'en', 'sp', 'cn', 'de', 'nl'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Load messages berdasarkan locale
      const loadMessages = async () => {
        try {
          const messagesModule = await import(`../messages/${locale}.json`);
          setMessages(messagesModule.default);
        } catch (error) {
          console.error('Failed to load messages:', error);
          // Fallback ke bahasa Indonesia
          const fallbackMessages = await import(`../messages/id.json`);
          setMessages(fallbackMessages.default);
        }
      };
      
      loadMessages();
    }
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('preferred-language', newLocale);
  };

  if (!mounted || !messages) {
    return React.createElement('div', null, 'Loading...');
  }

  return React.createElement(
    LocalizationContext.Provider,
    { value: { locale, setLocale, messages } },
    children
  );
}; 