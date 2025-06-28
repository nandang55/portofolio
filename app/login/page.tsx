"use client";
import { useState } from "react";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";

const messages = {
  id: {
    title: "Masuk",
    email: "Email",
    password: "Kata Sandi",
    login: "Masuk",
    noAccount: "Belum punya akun?",
    createNow: "Daftar sekarang",
    error: "Email dan password wajib diisi.",
    powered: "Didukung oleh ",
    tagline: "Buat dan bagikan portofoliomu dengan bagdja.com"
  },
  en: {
    title: "Login",
    email: "Email",
    password: "Password",
    login: "Login",
    noAccount: "Don't have an account?",
    createNow: "Create now",
    error: "Email and password are required.",
    powered: "Powered by ",
    tagline: "Make and share your portofolio with bagdja.com"
  },
  sp: {
    title: "Iniciar sesión",
    email: "Correo electrónico",
    password: "Contraseña",
    login: "Entrar",
    noAccount: "¿No tienes cuenta?",
    createNow: "Regístrate ahora",
    error: "Correo y contraseña obligatorios.",
    powered: "Desarrollado por ",
    tagline: "Crea y comparte tu portafolio con bagdja.com"
  },
  cn: {
    title: "登录",
    email: "邮箱",
    password: "密码",
    login: "登录",
    noAccount: "还没有账号？",
    createNow: "立即注册",
    error: "邮箱和密码为必填项。",
    powered: "由...提供支持 ",
    tagline: "使用 bagdja.com 创建并分享你的作品集"
  },
  de: {
    title: "Anmelden",
    email: "E-Mail",
    password: "Passwort",
    login: "Anmelden",
    noAccount: "Noch kein Konto?",
    createNow: "Jetzt registrieren",
    error: "E-Mail und Passwort sind erforderlich.",
    powered: "Bereitgestellt von ",
    tagline: "Erstelle und teile dein Portfolio mit bagdja.com"
  },
  nl: {
    title: "Inloggen",
    email: "E-mail",
    password: "Wachtwoord",
    login: "Inloggen",
    noAccount: "Nog geen account?",
    createNow: "Nu registreren",
    error: "E-mail en wachtwoord zijn verplicht.",
    powered: "Aangeboden door ",
    tagline: "Maak en deel je portfolio met bagdja.com"
  }
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [locale, setLocale] = useState('id');

  // Deteksi mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const t = (key: keyof typeof messages['id']) => {
    return messages[locale as keyof typeof messages]?.[key] || messages['en'][key];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError(t('error'));
      return;
    }
    setError("");
    alert("Login berhasil (dummy)");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        position: 'relative',
        background: 'url(/office.webp) center center/cover no-repeat',
      }}
    >
      {/* Overlay gelap seluruh halaman */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(34, 44, 38, 0.7)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Kiri: Branding */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          position: 'relative',
          minHeight: isMobile ? 180 : undefined,
          height: isMobile ? 220 : 'auto',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: isMobile ? '1.2rem 0.5rem' : 0,
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? '1.5rem' : '2.5rem',
              fontWeight: 800,
              marginBottom: isMobile ? '0.5rem' : '1rem',
              letterSpacing: '0.04em',
            }}
          >
            Portofolio
          </h1>
          <p style={{ fontSize: isMobile ? '0.95rem' : '1.2rem', fontWeight: 400 }}>
            {t('tagline')}
          </p>
        </div>
      </div>
      {/* Kanan: Form Login */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: isMobile ? 320 : 'auto',
          padding: isMobile ? '1.5rem 0.5rem' : 0,
          zIndex: 1,
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: isMobile ? 320 : 340,
            background: '#181c1a',
            borderRadius: 16,
            padding: isMobile ? '1.5rem 1rem' : '2.5rem 2rem',
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            position: 'relative',
          }}
        >
          {/* Language Switcher di pojok kanan atas card */}
          <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}>
            <LanguageSwitcher currentLocale={locale as any} onLanguageChange={setLocale} />
          </div>
          <h2
            style={{
              color: '#fff',
              fontWeight: 700,
              fontSize: isMobile ? '1.1rem' : '1.5rem',
              marginBottom: isMobile ? 12 : 18,
              textAlign: 'center',
            }}
          >
            {t('title')}
          </h2>
          <label style={{ color: '#b7c9b7', fontWeight: 500, marginBottom: 4 }}>{t('email')}</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              padding: isMobile ? '0.6rem 0.8rem' : '0.75rem 1rem',
              borderRadius: 8,
              border: '1px solid #40604e',
              fontSize: isMobile ? '0.95rem' : '1rem',
              marginBottom: 12,
              outline: 'none',
            }}
            placeholder="you@email.com"
            required
          />
          <label style={{ color: '#b7c9b7', fontWeight: 500, marginBottom: 4 }}>{t('password')}</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              padding: isMobile ? '0.6rem 0.8rem' : '0.75rem 1rem',
              borderRadius: 8,
              border: '1px solid #40604e',
              fontSize: isMobile ? '0.95rem' : '1rem',
              marginBottom: 12,
              outline: 'none',
            }}
            placeholder={t('password')}
            required
          />
          {error && <div style={{ color: '#ff6b6b', marginBottom: 8, fontSize: '0.95rem' }}>{error}</div>}
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #578169 60%, #31493C 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: isMobile ? '1rem' : '1.1rem',
              borderRadius: 32,
              padding: isMobile ? '0.7rem 1.5rem' : '0.85rem 2.2rem',
              border: 'none',
              cursor: 'pointer',
              marginTop: 8,
              transition: 'background 0.2s',
            }}
          >
            {t('login')}
          </button>
          <div style={{ textAlign: 'center', marginTop: 18, fontSize: isMobile ? '0.95rem' : '1.05rem', color: '#b7c9b7' }}>
            {t('noAccount')} <a href="/register" style={{ color: '#578169', fontWeight: 700, textDecoration: 'underline' }}>{t('createNow')}</a>
          </div>
          <div style={{ textAlign: 'center', marginTop: 18, fontSize: isMobile ? '0.85rem' : '1rem', color: '#b7c9b7', fontStyle: 'italic', letterSpacing: '0.01em' }}>
            {t('powered')}<span style={{ color: '#fff', fontWeight: 600 }}>bagdja.com</span>
          </div>
        </form>
      </div>
    </div>
  );
} 