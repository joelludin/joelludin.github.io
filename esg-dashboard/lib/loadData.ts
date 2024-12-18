import { CompanyData } from '@/types';
import data from '@/public/data.json';

export function loadData(): CompanyData[] {
  if (!data) {
    console.error('Failed to load data');
    return [];
  }
  return data as CompanyData[];
} 