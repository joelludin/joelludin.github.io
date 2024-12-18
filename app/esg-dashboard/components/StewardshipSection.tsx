'use client';

import { useData } from './DataContext';
import { Check, Circle, CircleDot } from 'lucide-react';

export default function StewardshipSection() {
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
      <h2 className="text-2xl font-bold mb-6">Responsible Stewardship</h2>
      
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Board Meetings</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Board Attendance</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">ESG Oversight</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Sustainability Goals</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Public ESG Disclosure</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Health & Safety Efforts</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Health & Safety Function</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Recordable Incident Rate</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lost-Time Incident Rate</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Anti-Harassment</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Code of Conduct</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Cybersecurity</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Data Privacy</th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Health & Safety Policy</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((company) => (
              <tr key={company.Company_ID} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company.Company_ID}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company['Number of Board Meetings']}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company['Average Attendance at Board Meetings (%) ']}</td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['ESG Oversight at Board or Executive Level '])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Public ESG Disclosure2'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Health & Safety Efforts3 '])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderYesNo(company['Health & Safety Function4 '])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company['Total Recordable Incident Rate ']}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">{company['Lost-Time Incident Rate ']}</td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderCircleIcon(company['AntiHarassment5 '])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderCircleIcon(company['Code of Conduct/ Business Ethics5 C'])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderCircleIcon(company['Cybersecurity5 '])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderCircleIcon(company['Data Privacy5 '])}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {renderCircleIcon(company['Health&Safety'])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2">Key:</h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-sm">Yes</span>
          </div>
          <div className="flex items-center gap-2">
            <CircleDot className="w-5 h-5 text-blue-600 fill-current" />
            <span className="text-sm">Policy and Training</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="w-5 h-5 text-blue-600" />
            <span className="text-sm">Policy or Training Only</span>
          </div>
          <div className="flex items-center gap-2">
            <Circle className="w-5 h-5 text-gray-300" />
            <span className="text-sm">None</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          N/A: Not Applicable — Company Did Not Report
        </div>
      </div>
    </section>
  );
} 