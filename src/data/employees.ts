import kalpnaMurmuImg from '@/assets/employees/kalpna-murmu.png';

export interface Employee {
  id: string;
  name: string;
  role: string;
  image?: string;
}

export const employees: Employee[] = [
  { id: 'sunil-kumar-raut', name: 'Sunil Kumar Raut', role: 'Employee' },
  { id: 'dheeraj-kumar', name: 'Dheeraj Kumar', role: 'Employee' },
  { id: 'kalpna-murmu', name: 'Kalpna Murmu', role: 'Employee', image: kalpnaMurmuImg },
  { id: 'gopesh-chandra-mallik', name: 'Gopesh Chandra Mallik', role: 'Employee' },
  { id: 'dhanajay-kumar-sharma', name: 'Dhanajay Kumar Sharma', role: 'Employee' },
  { id: 'shurti-kumari', name: 'Shurti Kumari', role: 'Employee' },
  { id: 'chandna-goswami', name: 'Chandna Goswami', role: 'Employee' },
  { id: 'putul-kumari', name: 'Putul Kumari', role: 'Employee' },
  { id: 'maical-murmu', name: 'Maical Murmu', role: 'Employee' },
];
