'use client';

import { useData } from './DataContext';
import { Zap, Droplet, Recycle, Factory, Building2, Plane, Check } from 'lucide-react';
import { CompanyData } from '../types';

export default function SustainabilitySection() {
  const { filteredData } = useData();

  // Helper function to render yes/no
  const renderYesNo = (value: string | undefined | null) => {
    if (!value) return null;
    return value.toLowerCase() === 'yes' ? <Check className="w-5 h-5 text-green-500" /> : null;
  };

  // Helper function to render environmental effort icons
  const renderEnvironmentalEfforts = (company: CompanyData) => (
    <div className="flex gap-2">
      {company['Enviornmental Efforts -Energy Reduction'] === '1' && (
        <Zap className="w-5 h-5 text-yellow-500" aria-label="Energy Consumption Reduction Effort" />
      )}
      {company['Environment Efforts - Renewable Energy'] === '1' && (
        <Factory className="w-5 h-5 text-orange-500" aria-label="Renewable Energy Effort" />
      )}
      {company['Environmental Efforts - Water'] === '1' && (
        <Droplet className="w-5 h-5 text-blue-500" aria-label="Water Consumption Reduction Effort" />
      )}
      {company['Environmental Efforts - Waste'] === '1' && (
        <Recycle className="w-5 h-5 text-emerald-500" aria-label="Waste Consumption Reduction Effort" />
      )}
    </div>
  );

  // Helper function to render GHG emissions icons
  const renderGHGEmissions = (company: CompanyData) => (
    <div className="flex gap-2">
      {company['GHG Scope 1 Reduction Efforts'] === '1' && (
        <Factory className="w-5 h-5 text-red-500" aria-label="Scope 1 GHG Emissions Reduction Initiatives" />
      )}
      {company['GHG Scope 2 Reduction Efforts'] === '1' && (
        <Building2 className="w-5 h-5 text-purple-500" aria-label="Scope 2 GHG Emissions Reduction Initiatives" />
      )}
      {company['GHG Scope 3 Reduction Efforts'] === '1' && (
        <Plane className="w-5 h-5 text-indigo-500" aria-label="Scope 3 GHG Emissions Reduction Initiatives" />
      )}
    </div>
  );

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Environmental Sustainability</h2>
      
      {/* Table content */}
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Environmental Efforts</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Climate-Related Risk Management Process</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">GHG Emission Reduction Efforts</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">GHG Emissions Reduction Targets and Goals</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sustainability Function</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Energy Intensity</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Non-Hazardous Waste</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recycled Waste %</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Water Intensity</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((company) => (
              <tr key={company.Company_ID} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company.Company_ID}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {renderEnvironmentalEfforts(company)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Climate-Related Risk Management Process'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {renderGHGEmissions(company)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['GHG Emissions Reduction Targets and Goals'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Sustainability Function'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company['Energy Intensity (kWh/$M Revenue)']}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company['Non-Hazardous Waste Intensity (MT/$M Revenue)']}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company['Percent Non-Hazardous Waste Recycled (%)']}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company['Water Intensity (m³/$M Revenue)']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Icon Legend */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2">Key:</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-sm">Yes</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" aria-label="Energy Consumption Reduction Effort" />
            <span className="text-sm">Energy Consumption Reduction Effort</span>
          </div>
          <div className="flex items-center gap-2">
            <Factory className="w-5 h-5 text-orange-500" aria-label="Renewable Energy Effort" />
            <span className="text-sm">Renewable Energy Effort</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-500" aria-label="Water Consumption Reduction Effort" />
            <span className="text-sm">Water Consumption Reduction Effort</span>
          </div>
          <div className="flex items-center gap-2">
            <Recycle className="w-5 h-5 text-emerald-500" aria-label="Waste Consumption Reduction Effort" />
            <span className="text-sm">Waste Consumption Reduction Effort</span>
          </div>
          <div className="flex items-center gap-2">
            <Factory className="w-5 h-5 text-red-500" />
            <span className="text-sm">Scope 1 GHG Emissions Reduction</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-purple-500" />
            <span className="text-sm">Scope 2 GHG Emissions Reduction</span>
          </div>
          <div className="flex items-center gap-2">
            <Plane className="w-5 h-5 text-indigo-500" />
            <span className="text-sm">Scope 3 GHG Emissions Reduction</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          * Indicates non-hazardous waste-to-landfill intensity only
          <br />
          N/A: Not Applicable — Company Did Not Report
        </div>
      </div>
    </section>
  );
} 