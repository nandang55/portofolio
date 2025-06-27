import React from 'react';

interface ProjectCardProps {
  appName: string;
  companyName: string;
  companyLogo: string;
  appLogo: string;
  country: string;
  startDate: string;
  endDate: string;
  description: string;
  media: { type: 'image' | 'video'; src: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  appName,
  companyName,
  companyLogo,
  appLogo,
  country,
  startDate,
  endDate,
  description,
  media,
}) => {
  return (
    <div style={{
      background: '#232826',
      borderRadius: 16,
      padding: 24,
      marginBottom: 32,
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)',
      color: '#fff',
      maxWidth: 800,
      width: '100%',
      margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
        <div style={{ minWidth: 80, minHeight: 80, borderRadius: '50%', background: '#40604e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, color: '#fff' }}>
          <img src={appLogo} alt="App Logo" style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4 }}>{appName}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 15 }}>
                <span style={{ fontWeight: 500 }}>{companyName}</span>
                <span style={{ color: '#b7c9b7' }}>{country}</span>
              </div>
              <div style={{ fontSize: 13, color: '#b7c9b7', marginTop: 2 }}>{startDate} - {endDate}</div>
            </div>
            <div style={{ minWidth: 60, minHeight: 60, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={companyLogo} alt="Company Logo" style={{ width: 40, height: 40, objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: '24px 0', width: '100%', overflowX: 'auto', display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
        {media.map((item, idx) => (
          <div key={idx} style={{ minWidth: 180, minHeight: 120, borderRadius: 12, background: '#181c1a', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {item.type === 'image' ? (
              <img src={item.src} alt="media" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <video src={item.src} controls style={{ width: '100%', height: '100%' }} />
            )}
          </div>
        ))}
      </div>
      <div style={{ background: '#2E4037', borderRadius: 8, padding: 16, color: '#fff', fontSize: 15, marginTop: 8 }}>
        {description}
      </div>
    </div>
  );
}; 