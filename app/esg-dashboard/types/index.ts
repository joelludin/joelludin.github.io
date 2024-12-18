export interface CompanyData {
  "Company-Category": string;
  "Company": string;
  "Company_ID": string;
  "Employee Engagement Efforts"?: string;
  "Inclusion & Diversity Efforts"?: string;
  "DEI Function"?: string;
  "Philanthropic or Volunteer Efforts"?: string;
  "Citizenship & Philanthropy Function"?: string;
  "Total Voluntary Turnover Rate"?: string;
  "Energy Intensity (kWh/$M Revenue)": string;
  "Non-Hazardous Waste Intensity (MT/$M Revenue)": string;
  "Percent Non-Hazardous Waste Recycled (%)": string;
  "Water Intensity (m³/$M Revenue)": string;
  "Climate-Related Risk Management Process": string;
  "GHG Emissions Reduction Targets and Goals": string;
  "Sustainability Function": string;
  "Enviornmental Efforts -Energy Reduction": string;
  "Environment Efforts - Renewable Energy": string;
  "Environmental Efforts - Water": string;
  "Environmental Efforts - Waste": string;
  "GHG Scope 1 Reduction Efforts": string;
  "GHG Scope 2 Reduction Efforts": string;
  "GHG Scope 3 Reduction Efforts": string;
  "Number of Board Meetings": string;
  "Average Attendance at Board Meetings (%) ": string;
  "ESG Oversight at Board or Executive Level ": string;
  "Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1": string;
  [key: string]: string | undefined;
}

export interface ProcessedESGData {
  companyId: string;
  company: string;
  category: string;
  energyIntensity: number;
  waterIntensity: number;
  ghgScope1: number;
  ghgScope2: number;
  boardMeetings: number;
  boardAttendance: number;
  voluntaryTurnover: number;
  incidentRate: number;
} 