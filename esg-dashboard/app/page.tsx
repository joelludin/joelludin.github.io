'use client';

import { DataProvider } from '../components/DataContext';
import { Filters } from '../components/Filters';
import DiversitySection from '../components/DiversitySection';
import StewardshipSection from '../components/StewardshipSection';
import SustainabilitySection from '../components/SustainabilitySection';

export default function Dashboard() {
  return (
    <DataProvider>
      <div className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">ESG Dashboard - Prototype</h1>
          <p className="text-gray-600 text-sm">This dashboard contains mock data for demonstration purposes only</p>
        </div>
        <Filters />
        <div className="space-y-8">
          <SustainabilitySection />
          <StewardshipSection />
          <DiversitySection />
        </div>
      </div>
    </DataProvider>
  );
} 