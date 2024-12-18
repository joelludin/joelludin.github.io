'use client';

import React, { createContext, useContext, useState } from 'react';
import { CompanyData } from '../types';
import { loadData } from '@/lib/loadData';

interface DataContextType {
  filteredData: CompanyData[];
  industry: string;
  companyId: string;
  setIndustry: (industry: string) => void;
  setCompanyId: (companyId: string) => void;
}

// Load data at build time
const staticData = loadData();

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [industry, setIndustry] = useState<string>('');
  const [companyId, setCompanyId] = useState<string>('');

  const filteredData = React.useMemo(() => {
    return staticData.filter(company => {
      if (industry && company['Company-Category'] !== industry) return false;
      if (companyId && company.Company_ID !== companyId) return false;
      return true;
    });
  }, [industry, companyId]);

  return (
    <DataContext.Provider value={{ filteredData, industry, companyId, setIndustry, setCompanyId }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
} 