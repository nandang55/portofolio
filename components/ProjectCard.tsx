import React, { useState } from "react";

interface ProjectCardProps {
  appName: string;
  companyName: string;
  companyLogo: string;
  appLogo: string;
  country: string;
  startDate: string;
  endDate: string;
  description: string;
  media: { type: "image" | "video"; src: string }[];
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
      .split(" ")
      .map((word) => word[0]?.toUpperCase() || "")
      .join("")
      .slice(0, 2);
  };

  // Deteksi mobile
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  return (
    <div
      style={{
        background: "#232826",
        borderRadius: 16,
        padding: isMobile ? 12 : 24,
        marginBottom: isMobile ? 16 : 32,
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.08)",
        color: "#fff",
        maxWidth: isMobile ? "100%" : 800,
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "row" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 12 : 24,
          width: "100%",
        }}
      >
        {/* Logo Project */}
        <div
          style={{
            minWidth: isMobile ? 56 : 80,
            minHeight: isMobile ? 56 : 80,
            borderRadius: "50%",
            background: "#40604e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: isMobile ? 20 : 28,
            color: "#fff",
            position: "relative",
            marginBottom: isMobile ? 8 : 0,
            flexShrink: 0,
          }}
        >
          {!logoError && appLogo ? (
            <img
              src={appLogo}
              alt="App Logo"
              style={{
                width: isMobile ? 40 : 60,
                height: isMobile ? 40 : 60,
                borderRadius: "50%",
                objectFit: "cover",
              }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span>{getInitials(appName)}</span>
          )}
        </div>
        {/* Info Project & Perusahaan */}
        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              width: "100%",
              gap: isMobile ? 8 : 16,
            }}
          >
            {/* Nama Project */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: isMobile ? 16 : 22,
                    marginBottom: 2,
                    textAlign: "left",
                    wordBreak: "break-word",
                  }}
                >
                  {appName}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: isMobile ? 13 : 15,
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{companyName}</span>
                  <span style={{ fontWeight: 500 }}>{country}</span>
                </div>
                <div
                  style={{
                    fontSize: isMobile ? 11 : 13,
                    color: "#b7c9b7",
                    marginTop: 2,
                  }}
                >
                  {startDate} - {endDate}
                </div>
              </div>
              {/* Logo & Nama Perusahaan */}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  minWidth: isMobile ? 32 : 40,
                  minHeight: isMobile ? 32 : 40,
                  borderRadius: 8,
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: isMobile ? 13 : 18,
                  color: "#40604e",
                }}
              >
                {!companyLogoError && companyLogo ? (
                  <img
                    src={companyLogo}
                    alt="Company Logo"
                    style={{
                      width: isMobile ? 20 : 32,
                      height: isMobile ? 20 : 32,
                      objectFit: "contain",
                    }}
                    onError={() => setCompanyLogoError(true)}
                  />
                ) : (
                  <span>{getInitials(companyName)}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tags */}
      {tags.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: isMobile ? 8 : 16,
            flexWrap: "wrap",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{
                background: "#40604e",
                color: "#fff",
                padding: isMobile ? "2px 8px" : "4px 12px",
                borderRadius: 16,
                fontSize: isMobile ? 10 : 12,
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div
        style={{
          margin: isMobile ? "12px 0" : "24px 0",
          width: "100%",
          overflowX: "auto",
          display: "flex",
          gap: isMobile ? 8 : 16,
          justifyContent: isMobile ? "flex-start" : "center",
          alignItems: "center",
        }}
      >
        {media.map((item, idx) => (
          <div
            key={idx}
            style={{
              minWidth: isMobile ? 100 : 180,
              minHeight: isMobile ? 70 : 120,
              borderRadius: 12,
              background: "#181c1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt="media"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <video
                src={item.src}
                controls
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </div>
        ))}
      </div>
      <div
        style={{
          background: "#2E4037",
          borderRadius: 8,
          padding: isMobile ? 10 : 16,
          color: "#fff",
          fontSize: isMobile ? 12 : 15,
          marginTop: 8,
          textAlign: isMobile ? "center" : "left",
          wordBreak: "break-word",
        }}
      >
        {description}
      </div>
    </div>
  );
};
