import rabindraImg from '@/assets/team/rabindra-kumar-sharma.png';
import khusbooImg from '@/assets/team/khusboo-sharma.png';
import vijayImg from '@/assets/team/vijay-kumar-singh.png';
import sapnaImg from '@/assets/team/sapna-verma.png';
import anthoniImg from '@/assets/team/anthoni-soren.png';

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  email?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  joiningDate: string;
  social: SocialLinks;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'rabindra-kumar-sharma',
    name: 'Rabindra Kumar Sharma',
    role: 'Founder & Managing Director',
    bio: 'Investment and Wealth Management Consultant. Advisor in IPO & Fund Raising. Founder & CEO @ IRA | Business & Growth Consultant | Investment Banking. Mr. Rabindra Kumar Sharma has been the driving force behind Dudhani Overseas India Private Limited since its inception, leading the company with a vision to become a dominant player in the polymer and export industry.',
    image: rabindraImg,
    joiningDate: '2018-01-15',
    social: {
      instagram: '#',
      facebook: '#',
      linkedin: 'https://www.linkedin.com/in/rabindra-kumar-sharma-86849546/',
      email: 'rabindra@doipl.in',
    },
  },
  {
    id: 'sapna-verma',
    name: 'Sapna Verma',
    role: 'Director',
    bio: 'Ms. Sapna Verma has successfully spearheaded the company over the years to take it to its pinnacle as "the largest polymer compound manufacturer". Many years and many struggles later, Ms. Sapna Verma has aced her way to being one of the top names in this industry. She brings with her a wealth of experience and is quite easily the technical pillar of DUDHANI Industries Private Limited.',
    image: sapnaImg,
    joiningDate: '2018-03-10',
    social: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      email: 'sapna@doipl.in',
    },
  },
  {
    id: 'khusboo-sharma',
    name: 'Khusboo Sharma',
    role: 'Director',
    bio: 'Ms. Khushboo Kumari has already gained nearly a decade\'s experience on the DUDHANI Board. Under her supervision, the company has scaled newer heights, bettering its standards and practices, and taking on global giants in the industry.',
    image: khusbooImg,
    joiningDate: '2019-06-01',
    social: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      email: 'khusboo@doipl.in',
    },
  },
  {
    id: 'vijay-kumar-singh',
    name: 'Vijay Kumar Singh',
    role: 'Founder & Director',
    bio: 'Mr. Vijay Kumar Singh, Founder & Director, leads company growth, global expansion and strategic operations with strong focus on quality and innovation.',
    image: vijayImg,
    joiningDate: '2018-01-15',
    social: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      email: 'vijay@doipl.in',
    },
  },
  {
    id: 'anthoni-soren',
    name: 'Anthoni Soren',
    role: 'Technical Manager',
    bio: 'Mr. Anthoni Soren oversees technical operations, process optimization, and quality control, ensuring all manufacturing and export activities meet international standards and client specifications.',
    image: anthoniImg,
    joiningDate: '2020-09-15',
    social: {
      instagram: 'https://www.instagram.com/raizo_mark_anthoni/',
      facebook: 'https://www.facebook.com/share/17ASNRecqB/',
      linkedin: 'https://www.linkedin.com/in/anthoni-soren-61793728a/',
      email: 'anthoni@doipl.in',
    },
  },
  {
    id: 'rinki-sharma',
    name: 'Rinki Sharma',
    role: 'Sales Manager',
    bio: 'Ms. Rinki Sharma leads sales operations with a strong focus on client relationships, market expansion, and revenue growth. She plays a key role in driving domestic and international sales through strategic planning and customer-centric solutions.',
    image: '',
    joiningDate: '2021-04-01',
    social: {
      instagram: '#',
      facebook: '#',
      linkedin: '#',
      email: 'rinki@doipl.in',
    },
  },
];
