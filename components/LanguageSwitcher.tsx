'use client';

import { useState, useEffect } from 'react';

type Locale = 'id' | 'en' | 'sp' | 'cn' | 'de' | 'nl';

const languages = [
  { code: 'id', name: 'ID', flag: '🇮🇩' },
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'sp', name: 'ES', flag: '🇪🇸' },
  { code: 'cn', name: 'CN', flag: '🇨🇳' },
  { code: 'de', name: 'DE', flag: '🇩🇪' },
  { code: 'nl', name: 'NL', flag: '🇳🇱' }
];

interface LanguageSwitcherProps {
  onLanguageChange: (locale: Locale) => void;
  currentLocale: Locale;
}

export const LanguageSwitcher = ({ onLanguageChange, currentLocale }: LanguageSwitcherProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    // Simpan ke localStorage
    localStorage.setItem('preferred-language', newLocale);
    // Panggil callback untuk mengubah bahasa
    onLanguageChange(newLocale as Locale);
  };

  if (!mounted) {
    return (
      <div className="language-switcher">
        <select className="language-select" disabled>
          <option>...</option>
        </select>
      </div>
    );
  }

  return (
    <div className="language-switcher">
      <select
        value={currentLocale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="language-select"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}; 