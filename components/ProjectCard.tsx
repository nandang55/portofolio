import React, { useState } from 'react';

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
  tags?: string[];
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
  tags = [],
}) => {
  const [logoError, setLogoError] = useState(false);
  const [companyLogoError, setCompanyLogoError] = useState(false);

  // Ambil inisial dari nama (maksimal 2 huruf)
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0]?.toUpperCase() || '')
      .join('')
      .slice(0, 2);
  };

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
        <div style={{ minWidth: 80, minHeight: 80, borderRadius: '50%', background: '#40604e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 28, color: '#fff', position: 'relative' }}>
          {!logoError && appLogo ? (
            <img
              src={appLogo}
              alt="App Logo"
              style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover' }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span>{getInitials(appName)}</span>
          )}
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
            <div style={{ minWidth: 60, minHeight: 60, borderRadius: 8, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, color: '#40604e' }}>
              {!companyLogoError && companyLogo ? (
                <img
                  src={companyLogo}
                  alt="Company Logo"
                  style={{ width: 40, height: 40, objectFit: 'contain' }}
                  onError={() => setCompanyLogoError(true)}
                />
              ) : (
                <span>{getInitials(companyName)}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      {tags.length > 0 && (
        <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{
                background: '#40604e',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: 16,
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
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