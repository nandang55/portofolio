'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useProjectYears } from "../hooks/useProjectYears";
import { useProjectsByYear } from "../hooks/useProjectsByYear";
import { useState, useEffect, useRef } from "react";
import { useLocalization } from "../hooks/useLocalization";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  const { years, loading, error } = useProjectYears();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const scrollCountRef = useRef(0);
  const scrollThreshold = 3;
  const { locale, setLocale, messages } = useLocalization();
  const rightSectionRef = useRef<HTMLDivElement>(null);
  
  // Hook untuk mengambil project berdasarkan tahun terpilih
  const { projects, loading: projectsLoading, error: projectsError } = useProjectsByYear(selectedYear);

  // Set tahun terbaru sebagai default saat data dimuat
  useEffect(() => {
    if (years.length > 0 && selectedYear === null) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  // Handle scroll untuk mengubah tahun dengan debounce
  const handleYearScroll = (e: React.WheelEvent) => {
    if (years.length === 0) return;

    e.preventDefault();
    
    scrollCountRef.current += 1;

    // Hanya ubah tahun jika sudah mencapai threshold
    if (scrollCountRef.current >= scrollThreshold) {
      const currentIndex = years.findIndex(year => year === selectedYear);
      let newIndex = currentIndex;

      if (e.deltaY > 0) {
        // Scroll down - pilih tahun sebelumnya
        newIndex = Math.min(currentIndex + 1, years.length - 1);
      } else {
        // Scroll up - pilih tahun berikutnya
        newIndex = Math.max(currentIndex - 1, 0);
      }

      setSelectedYear(years[newIndex]);
      scrollCountRef.current = 0; // Reset counter
    }

    // Reset counter setelah 1 detik jika tidak ada scroll lagi
    setTimeout(() => {
      scrollCountRef.current = 0;
    }, 1000);
  };

  // Scroll handler untuk rightSection
  const handleRightSectionScroll = () => {
    const el = rightSectionRef.current;
    if (!el) return;
    // Scroll ke bawah: select tahun berikutnya
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 2) {
      if (years.length > 0 && selectedYear != null) {
        const idx = years.findIndex(y => y === selectedYear);
        if (idx < years.length - 1) {
          setSelectedYear(years[idx + 1]);
        }
      }
    }
    // Scroll ke atas: select tahun sebelumnya
    if (el.scrollTop <= 2) {
      if (years.length > 0 && selectedYear != null) {
        const idx = years.findIndex(y => y === selectedYear);
        if (idx > 0) {
          setSelectedYear(years[idx - 1]);
        }
      }
    }
  };

  // Helper function untuk translation
  const t = (key: string, params?: any) => {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (match, param) => {
        return params[param] || match;
      });
    }
    
    return value || key;
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Bagian Kiri */}
        <div className={styles.leftSection} onWheel={handleYearScroll}>
          <div className={styles.header}>
            <h1>{t('home.title')}</h1>
            <LanguageSwitcher 
              currentLocale={locale} 
              onLanguageChange={setLocale} 
            />
          </div>
          {loading && <p>{t('home.loading')}</p>}
          {error && <p>{t('home.error', { error })}</p>}
          {!loading && !error && (
            <div className={styles.leftContent}>
              <div className={styles.projectByYearLabel}>{t('home.projectByYear')}</div>
              <div className={styles.yearList}>
                {years.map((year) => (
                  <div
                    key={year}
                    className={`${styles.yearItem} ${
                      selectedYear === year ? styles.selectedYear : ''
                    }`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                    {selectedYear === year && (
                      <span className={styles.selectedIndicator}>✓</span>
                    )}
                  </div>
                ))}
              </div>
              {selectedYear && (
                <div className={styles.yearInfo}>
                  <p>{t('home.selectedYear', { year: selectedYear })}</p>
                  <p className={styles.scrollHint}>
                    {t('home.scrollHint', { count: scrollThreshold })}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bagian Kanan */}
        <div className={styles.rightSection} ref={rightSectionRef} onScroll={handleRightSectionScroll}>
          <main className={styles.main}>
            {projectsLoading && <p>{t('home.loading')}</p>}
            {projectsError && <p>{t('home.error', { error: projectsError })}</p>}
            {!projectsLoading && !projectsError && projects.length === 0 && (
              <p>{t('home.noProjects', { year: selectedYear })}</p>
            )}
            {!projectsLoading && !projectsError && projects.map((project) => (
              <ProjectCard
                key={project.id}
                appName={project.app_name}
                companyName={project.company_name}
                companyLogo={project.company_logo}
                appLogo={project.app_logo}
                country={project.country}
                startDate={project.start_date}
                endDate={project.end_date}
                description={project.description?.[locale] || project.description?.['en'] || ''}
                media={project.media?.map(item => ({
                  type: item.type,
                  src: item.url
                })) || []}
                tags={project.tags || []}
              />
            ))}
          </main>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {t('footer.learn')}
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          {t('footer.examples')}
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          {t('footer.goToNextjs')}
        </a>
      </footer>
    </div>
  );
}
