'use client'

import { useData } from './DataContext'

export default function FilterSection() {
  const { industry, companyId, setIndustry, setCompanyId, filteredData } = useData()

  // Get unique industries
  const industries = Array.from(new Set(filteredData.map(d => d['Company-Category']))).sort()
  
  // Get unique company IDs
  const companyIds = Array.from(new Set(filteredData.map(d => d.Company_ID))).sort()

  return (
    <div className="flex gap-4 mb-6">
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
          Industry
        </label>
        <select
          id="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">All Industries</option>
          {industries.map(ind => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <select
          id="company"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
          className="block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">All Companies</option>
          {companyIds.map(id => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>
      </div>
    </div>
  )
} 