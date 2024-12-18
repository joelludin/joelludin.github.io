import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { CompanyData } from '../types';

export async function parseCSVData(): Promise<CompanyData[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    return new Promise((resolve, reject) => {
      Papa.parse<CompanyData>(fileContent, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log('Parsed Data:', results.data);
          resolve(results.data);
        },
        error: (error: Error) => {
          console.error('Parse error:', error);
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('File reading error:', error);
    throw error;
  }
}