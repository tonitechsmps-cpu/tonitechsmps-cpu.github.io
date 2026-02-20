import michaelHembromImg from '@/assets/employees/michael-hembrom.jpg';
import tursisiyusMurmuImg from '@/assets/employees/tursisiyus-murmu.jpg';
import dhanajayKumarSharmaImg from '@/assets/employees/dhanajay-kumar-sharma.png';

export interface Employee {
  id: string;
  name: string;
  role: string;
  image?: string;
}

export const employees: Employee[] = [
  { id: 'michael-hembrom', name: 'Michael Hembrom', role: 'Employee', image: michaelHembromImg },
  { id: 'tursisiyus-murmu', name: 'Tursisiyus Murmu', role: 'Employee', image: tursisiyusMurmuImg },
  { id: 'dhanajay-kumar-sharma', name: 'Dhanajay Kumar Sharma', role: 'Employee', image: dhanajayKumarSharmaImg },
];
