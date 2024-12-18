'use client';

import React from 'react';
import { useData } from './DataContext';

export function Filters() {
  const { industry, companyId, setIndustry, setCompanyId } = useData();

  const uniqueIndustries = ['All', 'Communication Services'];
  const uniqueCompanyIds = [
    'All',
    'Communication Services-COMPANY A',
    'Communication Services-COMPANY B',
    'Communication Services-COMPANY C',
    'Communication Services-COMPANY D',
    'Communication Services-COMPANY E'
  ];

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
          {uniqueIndustries.map(ind => (
            <option key={ind} value={ind}>
              {ind === 'All' ? 'All Industries' : ind}
            </option>
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
          {uniqueCompanyIds.map(id => (
            <option key={id} value={id}>
              {id === 'All' ? 'All Companies' : id}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
} 