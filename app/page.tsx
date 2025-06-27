'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useProjectYears } from "../hooks/useProjectYears";
import { useState, useEffect } from "react";

export default function Home() {
  const { years, loading, error } = useProjectYears();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Set tahun terbaru sebagai default saat data dimuat
  useEffect(() => {
    if (years.length > 0 && selectedYear === null) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  // Handle scroll untuk mengubah tahun
  const handleYearScroll = (e: React.WheelEvent) => {
    if (years.length === 0) return;

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
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Bagian Kiri */}
        <div className={styles.leftSection} onWheel={handleYearScroll}>
          <h1>Daftar Tahun Project</h1>
          {loading && <p>Memuat data tahun...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <div className={styles.leftContent}>
              <h2>Project berdasarkan tahun:</h2>
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
                  <p>Tahun terpilih: <strong>{selectedYear}</strong></p>
                  <p className={styles.scrollHint}>Scroll untuk mengubah tahun</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bagian Kanan */}
        <div className={styles.rightSection}>
          <main className={styles.main}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol>
              <li>
                Get started by editing <code>app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>

            <div className={styles.ctas}>
              <a
                className={styles.primary}
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.logo}
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Read our docs
              </a>
            </div>
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
          Learn
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
          Examples
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
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
