"use client";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useUser } from "./UserContext";
import { useRouter } from "next/navigation";

const messages = {
  id: {
    title: "Portofolio",
    desc: "Buat dan bagikan portofoliomu dengan bagdja.com",
    create: "Buat Sekarang"
  },
  en: {
    title: "Portfolio",
    desc: "Make and share your portofolio with bagdja.com",
    create: "Create Now"
  },
  sp: {
    title: "Portafolio",
    desc: "Crea y comparte tu portafolio con bagdja.com",
    create: "Crear Ahora"
  },
  cn: {
    title: "作品集",
    desc: "使用 bagdja.com 创建并分享你的作品集",
    create: "立即创建"
  },
  de: {
    title: "Portfolio",
    desc: "Erstelle und teile dein Portfolio mit bagdja.com",
    create: "Jetzt erstellen"
  },
  nl: {
    title: "Portfolio",
    desc: "Maak en deel je portfolio met bagdja.com",
    create: "Nu maken"
  }
};

export default function Home() {
  const [locale, setLocale] = useState('id');
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Ambil preferensi bahasa dari localStorage jika ada
    const savedLocale = localStorage.getItem('preferred-language');
    if (savedLocale) setLocale(savedLocale);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem('preferred-language', newLocale);
  };

  const t = (key: 'title' | 'desc' | 'create') => {
    return messages[locale as keyof typeof messages]?.[key] || messages['en'][key];
  };

  const handleCreate = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!user) {
      router.push("/login");
    } else {
      router.push("/create");
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'url(/office.webp) center center/cover no-repeat',
      position: 'relative',
    }}>
      {/* Language Switcher Floating */}
      <div style={{
        position: 'fixed',
        top: 24,
        right: 32,
        zIndex: 10,
      }}>
        <LanguageSwitcher currentLocale={locale as any} onLanguageChange={handleLanguageChange} />
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(34, 44, 38, 0.7)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'relative',
        zIndex: 2,
        color: '#fff',
        textAlign: 'center',
        padding: '2rem',
        borderRadius: '16px',
        background: 'rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{t('title')}</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 400 }}>{t('desc')}</p>
        <a
          href="#"
          onClick={handleCreate}
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.85rem 2.2rem',
            background: 'linear-gradient(90deg, #578169 60%, #31493C 100%)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.1rem',
            borderRadius: '32px',
            textDecoration: 'none',
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
            transition: 'background 0.2s, box-shadow 0.2s',
            letterSpacing: '0.02em',
          }}
          onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #31493C 60%, #578169 100%)')}
          onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #578169 60%, #31493C 100%)')}
        >
          {t('create')}
        </a>
      </div>
    </div>
  );
} 