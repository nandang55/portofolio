'use client';

import { useProjectYears } from '../hooks/useProjectYears';

interface YearFilterProps {
  selectedYear: number | null;
  onYearChange: (year: number | null) => void;
}

export const YearFilter = ({ selectedYear, onYearChange }: YearFilterProps) => {
  const { years, loading, error } = useProjectYears();

  if (loading) {
    return <div>Memuat tahun...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="year-filter">
      <label htmlFor="year-select">Filter berdasarkan tahun:</label>
      <select
        id="year-select"
        value={selectedYear || ''}
        onChange={(e) => onYearChange(e.target.value ? Number(e.target.value) : null)}
      >
        <option value="">Semua tahun</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}; 