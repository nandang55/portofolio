"use client";
import { useState } from "react";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";

const messages = {
  id: {
    title: "Daftar",
    name: "Username",
    email: "Email",
    password: "Kata Sandi",
    confirmPassword: "Konfirmasi Kata Sandi",
    register: "Daftar",
    haveAccount: "Sudah punya akun?",
    loginNow: "Masuk sekarang",
    error: "Semua field wajib diisi.",
    errorConfirm: "Konfirmasi kata sandi tidak cocok.",
    powered: "Didukung oleh ",
    tagline: "Buat dan bagikan portofoliomu dengan bagdja.com",
    profile: "Informasi Profil",
    photo: "Foto Profil",
    firstname: "Nama Depan",
    lastname: "Nama Belakang",
    description: "Deskripsi",
    username: "Username",
    accountInfo: "Informasi Akun",
  },
  en: {
    title: "Register",
    name: "Username",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    register: "Register",
    haveAccount: "Already have an account?",
    loginNow: "Login now",
    error: "All fields are required.",
    errorConfirm: "Password confirmation does not match.",
    powered: "Powered by ",
    tagline: "Make and share your portofolio with bagdja.com",
    profile: "Profile Information",
    photo: "Profile Photo",
    firstname: "First Name",
    lastname: "Last Name",
    description: "Description",
    username: "Username",
    accountInfo: "Account Information",
  },
  sp: {
    title: "Registrarse",
    name: "Nombre de usuario",
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    register: "Registrarse",
    haveAccount: "¿Ya tienes cuenta?",
    loginNow: "Inicia sesión",
    error: "Todos los campos son obligatorios.",
    errorConfirm: "La confirmación de la contraseña no coincide.",
    powered: "Desarrollado por ",
    tagline: "Crea y comparte tu portafolio con bagdja.com",
    profile: "Información del Perfil",
    photo: "Foto de Perfil",
    firstname: "Nombre",
    lastname: "Apellido",
    description: "Descripción",
    username: "Nombre de usuario",
    accountInfo: "Información de la cuenta",
  },
  cn: {
    title: "注册",
    name: "用户名",
    email: "邮箱",
    password: "密码",
    confirmPassword: "确认密码",
    register: "注册",
    haveAccount: "已有账号？",
    loginNow: "立即登录",
    error: "所有字段都是必填项。",
    errorConfirm: "密码确认不匹配。",
    powered: "由...提供支持 ",
    tagline: "使用 bagdja.com 创建并分享你的作品集",
    profile: "个人信息",
    photo: "头像",
    firstname: "名字",
    lastname: "姓氏",
    description: "描述",
    username: "用户名",
    accountInfo: "账户信息",
  },
  de: {
    title: "Registrieren",
    name: "Benutzername",
    email: "E-Mail",
    password: "Passwort",
    confirmPassword: "Passwort bestätigen",
    register: "Registrieren",
    haveAccount: "Schon ein Konto?",
    loginNow: "Jetzt anmelden",
    error: "Alle Felder sind erforderlich.",
    errorConfirm: "Passwortbestätigung stimmt nicht überein.",
    powered: "Bereitgestellt von ",
    tagline: "Erstelle und teile dein Portfolio mit bagdja.com",
    profile: "Profilinformationen",
    photo: "Profilbild",
    firstname: "Vorname",
    lastname: "Nachname",
    description: "Beschreibung",
    username: "Benutzername",
    accountInfo: "Kontoinformationen",
  },
  nl: {
    title: "Registreren",
    name: "Gebruikersnaam",
    email: "E-mail",
    password: "Wachtwoord",
    confirmPassword: "Bevestig wachtwoord",
    register: "Registreren",
    haveAccount: "Al een account?",
    loginNow: "Nu inloggen",
    error: "Alle velden zijn verplicht.",
    errorConfirm: "Wachtwoordbevestiging komt niet overeen.",
    powered: "Aangeboden door ",
    tagline: "Maak en deel je portfolio met bagdja.com",
    profile: "Profielinformatie",
    photo: "Profielfoto",
    firstname: "Voornaam",
    lastname: "Achternaam",
    description: "Beschrijving",
    username: "Gebruikersnaam",
    accountInfo: "Accountinformatie",
  },
};

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [locale, setLocale] = useState("id");
  const [photo, setPhoto] = useState<File | null>(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [desc, setDesc] = useState("");
  const [username, setUsername] = useState("");

  // Deteksi mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const t = (key: keyof (typeof messages)["id"]) => {
    return (
      messages[locale as keyof typeof messages]?.[key] || messages["en"][key]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError(t("error"));
      return;
    }
    if (password !== confirmPassword) {
      setError(t("errorConfirm"));
      return;
    }
    setError("");
    alert("Registrasi berhasil (dummy)");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "url(/office.webp) center center/cover no-repeat",
      }}
    >
      {/* Overlay gelap seluruh halaman */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(34, 44, 38, 0.7)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Form Register di tengah */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: 900,
          background: "#181c1a",
          borderRadius: 16,
          padding: "2rem",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          position: "relative",
          zIndex: 1,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Language Switcher di pojok kanan atas card */}
        <div style={{ position: "absolute", top: 16, right: 16, zIndex: 2 }}>
          <LanguageSwitcher
            currentLocale={locale as any}
            onLanguageChange={setLocale}
          />
        </div>
        <h2
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: isMobile ? "1.1rem" : "1.5rem",
            marginBottom: isMobile ? 12 : 18,
            textAlign: "center",
          }}
        >
          {t("title")}
        </h2>
        {/* Section Profile Information */}
        <div
          style={{
            marginBottom: 32,
            padding: isMobile ? "1rem" : "2rem",
            background: "rgba(44, 54, 48, 0.95)",
            borderRadius: 16,
            boxShadow: "0 1px 8px 0 rgba(0,0,0,0.08)",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize: "1.15rem",
              marginBottom: 20,
            }}
          >
            {t("profile")}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
            }}
          >
            {/* Foto Profil */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                width: "100%",
              }}
            >
              <label
                style={{ color: "#b7c9b7", fontWeight: 500, marginBottom: 4 }}
              >
                {t("photo")}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files?.[0] || null)}
                style={{ marginBottom: 8 }}
              />
              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="preview"
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginTop: 4,
                    border: "2px solid #40604e",
                  }}
                />
              )}
            </div>
            {/* Username, Nama Depan, Nama Belakang */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                gap: 16,
                width: "100%",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  style={{ color: "#b7c9b7", fontWeight: 500, marginBottom: 4 }}
                >
                  {t("username")}
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    padding: isMobile ? "0.6rem 0.8rem" : "0.75rem 1rem",
                    borderRadius: 8,
                    border: "1.5px solid #40604e",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    marginBottom: 8,
                    outline: "none",
                    background: "#232826",
                    color: "#fff",
                  }}
                  placeholder={t("username")}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  style={{ color: "#b7c9b7", fontWeight: 500, marginBottom: 4 }}
                >
                  {t("firstname")}
                </label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  style={{
                    padding: isMobile ? "0.6rem 0.8rem" : "0.75rem 1rem",
                    borderRadius: 8,
                    border: "1.5px solid #40604e",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    marginBottom: 8,
                    outline: "none",
                    background: "#232826",
                    color: "#fff",
                  }}
                  placeholder={t("firstname")}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  style={{ color: "#b7c9b7", fontWeight: 500, marginBottom: 4 }}
                >
                  {t("lastname")}
                </label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  style={{
                    padding: isMobile ? "0.6rem 0.8rem" : "0.75rem 1rem",
                    borderRadius: 8,
                    border: "1.5px solid #40604e",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    marginBottom: 8,
                    outline: "none",
                    background: "#232826",
                    color: "#fff",
                  }}
                  placeholder={t("lastname")}
                />
              </div>
            </div>
            {/* Description full width */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                style={{ color: "#b7c9b7", fontWeight: 500, marginBottom: 4 }}
              >
                {t("description")}
              </label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                style={{
                  padding: isMobile ? "0.6rem 0.8rem" : "0.75rem 1rem",
                  borderRadius: 8,
                  border: "1.5px solid #40604e",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  minHeight: 60,
                  resize: "vertical",
                  outline: "none",
                  background: "#232826",
                  color: "#fff",
                }}
                placeholder={t("description")}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            marginBottom: 32,
            padding: isMobile ? "1rem" : "2rem",
            background: "rgba(44, 54, 48, 0.95)",
            borderRadius: 16,
            boxShadow: "0 1px 8px 0 rgba(0,0,0,0.08)",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize: "1.15rem",
              marginBottom: 20,
            }}
          >
            {t("accountInfo")}
          </div>
          {/* Email tetap satu baris */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 8,
            }}
          >
            <label
              style={{ color: "#b7c9b7", fontWeight: 500, marginBottom: 4 }}
            >
              {t("email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: isMobile ? "0.6rem 0.8rem" : "0.75rem 1rem",
                borderRadius: 8,
                border: "1px solid #40604e",
                fontSize: isMobile ? "0.95rem" : "1rem",
                marginBottom: 12,
                outline: "none",
              }}
              placeholder={t("email")}
              required
            />
          </div>
          {/* Password & Confirm Password dalam satu baris */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                style={{ color: "#b7c9b7", fontWeight: 500, marginBottom: 4 }}
              >
                {t("password")}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  padding: isMobile ? "0.6rem 0.8rem" : "0.75rem 1rem",
                  borderRadius: 8,
                  border: "1px solid #40604e",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  marginBottom: 12,
                  outline: "none",
                }}
                placeholder={t("password")}
                required
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label
                style={{ color: "#b7c9b7", fontWeight: 500, marginBottom: 4 }}
              >
                {t("confirmPassword")}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  padding: isMobile ? "0.6rem 0.8rem" : "0.75rem 1rem",
                  borderRadius: 8,
                  border: "1px solid #40604e",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  marginBottom: 12,
                  outline: "none",
                }}
                placeholder={t("confirmPassword")}
                required
              />
            </div>
          </div>
          {error && (
            <div
              style={{ color: "#ff6b6b", marginBottom: 8, fontSize: "0.95rem" }}
            >
              {error}
            </div>
          )}
        </div>
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #578169 60%, #31493C 100%)",
            color: "#fff",
            fontWeight: 700,
            fontSize: isMobile ? "1rem" : "1.1rem",
            borderRadius: 32,
            padding: isMobile ? "0.7rem 1.5rem" : "0.85rem 2.2rem",
            border: "none",
            cursor: "pointer",
            marginTop: 8,
            transition: "background 0.2s",
          }}
        >
          {t("register")}
        </button>
        <div
          style={{
            textAlign: "center",
            marginTop: 18,
            fontSize: isMobile ? "0.95rem" : "1.05rem",
            color: "#b7c9b7",
          }}
        >
          {t("haveAccount")}{" "}
          <a
            href="/login"
            style={{
              color: "#578169",
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            {t("loginNow")}
          </a>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: 18,
            fontSize: isMobile ? "0.85rem" : "1rem",
            color: "#b7c9b7",
            fontStyle: "italic",
            letterSpacing: "0.01em",
          }}
        >
          {t("powered")}
          <span style={{ color: "#fff", fontWeight: 600 }}>bagdja.com</span>
        </div>
      </form>
    </div>
  );
}
