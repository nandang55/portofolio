import Image from "next/image";

export default function Home() {
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
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Portofolio</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 400 }}>Make and share your portofolio with bagdja.com</p>
      </div>
    </div>
  );
} 