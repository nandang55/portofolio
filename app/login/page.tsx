"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Deteksi mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email dan password wajib diisi.");
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
            bagdja.com
          </h1>
          <p style={{ fontSize: isMobile ? '0.95rem' : '1.2rem', fontWeight: 400 }}>
            Make and share your portofolio with bagdja.com
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
          }}
        >
          <h2
            style={{
              color: '#fff',
              fontWeight: 700,
              fontSize: isMobile ? '1.1rem' : '1.5rem',
              marginBottom: isMobile ? 12 : 18,
              textAlign: 'center',
            }}
          >
            Login
          </h2>
          <label style={{ color: '#b7c9b7', fontWeight: 500, marginBottom: 4 }}>Email</label>
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
          <label style={{ color: '#b7c9b7', fontWeight: 500, marginBottom: 4 }}>Password</label>
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
            placeholder="Password"
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
} 