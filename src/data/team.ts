import rabindraImg from '@/assets/team/rabindra-kumar-sharma.png';
import khusbooImg from '@/assets/team/vijay-kumar-singh.png';
import vijayImg from '@/assets/team/khusboo-sharma.png';
import sapnaImg from '@/assets/team/sapna-verma.png';
import anthoniImg from '@/assets/team/anthoni-soren.png';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'rabindra-kumar-sharma',
    name: 'Rabindra Kumar Sharma',
    role: 'Founder & Managing Director',
    bio: 'Investment and Wealth Management Consultant. Advisor in IPO & Fund Raising. Founder & CEO @ IRA | Business & Growth Consultant | Investment Banking. Mr. Rabindra Kumar Sharma has been the driving force behind Dudhani Overseas India Private Limited since its inception, leading the company with a vision to become a dominant player in the polymer and export industry.',
    image: rabindraImg,
  },
  {
    id: 'sapna-verma',
    name: 'Sapna Verma',
    role: 'Director',
    bio: 'Ms. Sapna Verma has successfully spearheaded the company over the years to take it to its pinnacle as "the largest polymer compound manufacturer". Many years and many struggles later, Ms. Sapna Verma has aced her way to being one of the top names in this industry. She brings with her a wealth of experience and is quite easily the technical pillar of DUDHANI Industries Private Limited.',
    image: sapnaImg,
  },
  {
    id: 'khusboo-sharma',
    name: 'Khusboo Sharma',
    role: 'Director',
    bio: 'Ms. Khushboo Kumari has already gained nearly a decade\'s experience on the DUDHANI Board. Under her supervision, the company has scaled newer heights, bettering its standards and practices, and taking on global giants in the industry.',
    image: khusbooImg,
  },
  {
    id: 'vijay-kumar-singh',
    name: 'Vijay Kumar Singh',
    role: 'Founder & Director',
    bio: 'Mr. Vijay Kumar Singh, Founder & Director, leads company growth, global expansion and strategic operations with strong focus on quality and innovation.',
    image: vijayImg,
  },
  {
    id: 'anthoni-soren',
    name: 'Anthoni Soren',
    role: 'Technical Manager',
    bio: 'Mr. Anthoni Soren oversees technical operations, process optimization, and quality control, ensuring all manufacturing and export activities meet international standards and client specifications.',
    image: anthoniImg,
  },
  {
    id: 'rinki-sharma',
    name: 'Rinki Sharma',
    role: 'Sales Manager',
    bio: 'Ms. Rinki Sharma leads sales operations with a strong focus on client relationships, market expansion, and revenue growth. She plays a key role in driving domestic and international sales through strategic planning and customer-centric solutions.',
    image: '', // No photo available
  },
];
