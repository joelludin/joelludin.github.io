'use client';

import { useData } from './DataContext';
import { CircleDot, Circle, Check } from 'lucide-react';

export default function DiversitySection() {
  const { filteredData } = useData();

  // Helper function to render yes/no
  const renderYesNo = (value: string | undefined | null) => {
    if (!value) return null;
    return value.toLowerCase() === 'yes' ? <Check className="w-5 h-5 text-green-500" /> : null;
  };

  // Helper function to render the appropriate circle icon
  const renderCircleIcon = (value: string | undefined | null) => {
    if (!value) return <Circle className="w-5 h-5 text-gray-300" />;
    
    switch (value.toLowerCase()) {
      case 'policy and training':
        return <CircleDot className="w-5 h-5 text-blue-600 fill-current" />;
      case 'policy':
      case 'training':
        return <Circle className="w-5 h-5 text-blue-600" />;
      default:
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Diversity & Inclusion</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee Engagement</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Inclusion & Diversity</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">DEI Function</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Philanthropic Efforts</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Citizenship & Philanthropy</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Turnover Rate</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Anti-Discrimination</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">DEI</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Supplier Code of Conduct</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((company) => (
              <tr key={company.Company_ID} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company.Company_ID}</td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Employee Engagement Efforts'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Inclusion & Diversity Efforts'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['DEI Function'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Philanthropic or Volunteer Efforts'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Citizenship & Philanthropy Function'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  {company['Total Voluntary Turnover Rate']}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderCircleIcon(company['Anti-Discrimination'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderCircleIcon(company['DEI'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderCircleIcon(company['Supplier Code of Conduct'])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Icon Legend */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2">Icon Legend:</h4>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-sm">Yes</span>
          </div>
          <div className="flex items-center gap-2">
            <CircleDot className="w-5 h-5 text-blue-600 fill-current" />
            <span className="text-sm">Policy AND Training</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="w-5 h-5 text-blue-600" />
            <span className="text-sm">Policy OR Training</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">None</span>
          </div>
        </div>
      </div>
    </section>
  );
} 