'use client'

import { DataProvider } from './components/DataContext'
import DiversitySection from './components/DiversitySection'
import StewardshipSection from './components/StewardshipSection'
import SustainabilitySection from './components/SustainabilitySection'
import FilterSection from './components/FilterSection'

export default function Dashboard() {
  return (
    <DataProvider>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">ESG Dashboard</h1>
        
        {/* Filters */}
        <div className="mb-8">
          <FilterSection />
        </div>

        {/* Dashboard Sections */}
        <div className="space-y-8">
          <SustainabilitySection />
          <DiversitySection />
          <StewardshipSection />
        </div>
      </main>
    </DataProvider>
  )
} 