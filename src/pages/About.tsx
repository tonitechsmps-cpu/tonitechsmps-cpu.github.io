import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, Globe, Handshake, ChevronRight, Lightbulb, Heart, Shield } from 'lucide-react';

const milestones = [
  { year: '2018', title: 'Company Founded', description: 'Established as Dudhani Overseas India Private Limited' },
  { year: '2019', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification' },
  { year: '2020', title: 'Product Expansion', description: 'Launched full range of color masterbatches' },
  { year: '2021', title: 'Export Operations', description: 'Started exporting to international markets' },
  { year: '2023', title: 'Engineering Polymers', description: 'Added ABS, PC, and PA compound lines' },
  { year: '2024', title: 'Global Reach', description: 'Serving customers in 30+ countries' },
];

const team = [
  {
    name: 'Rabindra Kumar Sharma',
    role: 'Managing Director',
    description: 'Founder with extensive experience in polymer industry',
  },
  {
    name: 'Sapna Verma',
    role: 'Director',
    description: 'Overseeing business operations and strategy',
  },
  {
    name: 'Khushboo Kumari',
    role: 'Director',
    description: 'Managing finance and administration',
  },
  {
    name: 'Vijay Singh',
    role: 'General Manager',
    description: 'Leading production and quality control',
  },
  {
    name: 'Gauri Shankar Sharma',
    role: 'CEO',
    description: 'Driving business growth and partnerships',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent and ethical business practices form the foundation of our relationships.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue the highest standards in every product and service we deliver.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our clients success is our success. We go above and beyond to exceed expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Technology Edge',
    description: 'Continuous innovation and adoption of advanced manufacturing technologies.',
  },
  {
    icon: Heart,
    title: 'Responsibility',
    description: 'Committed to environmental sustainability and social responsibility.',
  },
  {
    icon: Handshake,
    title: 'Team Work',
    description: 'Collaborative culture that values every team members contribution.',
  },
  {
    icon: Globe,
    title: 'Valuing People',
    description: 'Respecting the strength and capability of employees, customers, and associates.',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">
              Leading Manufacturer of Masterbatches & Compounds
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Dudhani Overseas India Private Limited is a trusted name in the polymer industry, 
              delivering high-quality masterbatches and compounds to customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-muted rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To provide the highest quality materials based on advanced technology to our 
                customers and ensuring to meet the challenging and ever-increasing market demands.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Respect the strength and capability of our employees, customers, and associates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Honor all commitments we undertake
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Provide quality Masterbatches & Compounds that effectively cater to processing requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Emphasize quality, customer need and service excellence for total satisfaction
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a dominant multi-location production company in Engineered Thermoplastic 
                Compounds, Color & Specialty Additive Master Batches, thus establishing itself 
                as a top-performing compounder with multiple product range.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We aim to develop new applications close to OEMs and associated sectors of 
                Automotive, Railway, Defense, Furniture & Household industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-foreground">
                Building Excellence Since 2018
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dudhani Overseas India Private Limited was founded in 2018 with a vision to 
                become a leading manufacturer of masterbatches and polymer compounds. What 
                started as a focused operation has grown into a comprehensive manufacturing 
                facility serving customers globally.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, investment in technology, 
                and an unwavering commitment to quality. Today, we offer a diverse range of 
                products including color masterbatches, engineering polymer compounds, and 
                specialty additives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our success is built on strong technical expertise, state-of-the-art manufacturing 
                capabilities, and most importantly, our dedication to customer satisfaction.
              </p>
            </div>
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div 
                  key={milestone.year}
                  className="flex gap-4 items-start bg-card rounded-xl p-4 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary-foreground">{milestone.year}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.slice(0, 4).map((value) => (
              <div key={value.title} className="text-center p-6 bg-muted rounded-2xl">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-6">
            {values.slice(4).map((value) => (
              <div key={value.title} className="text-center p-6 bg-muted rounded-2xl">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team brings decades of combined expertise in 
              polymer manufacturing, quality management, and international trade.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                <p className="text-secondary text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Company Details</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Corporate Information
            </h2>
          </div>
          <div className="max-w-2xl mx-auto bg-muted rounded-2xl p-8">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Company Name</span>
                <span className="font-medium text-foreground">Dudhani Overseas India Private Limited</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">CIN</span>
                <span className="font-medium text-foreground">U24304JH2018PTC011591</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">GSTIN</span>
                <span className="font-medium text-foreground">07AAGCD7615P1Z5</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Established</span>
                <span className="font-medium text-foreground">2018</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-muted-foreground">Industry</span>
                <span className="font-medium text-foreground">Polymer Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join our growing list of satisfied customers worldwide. Contact us today 
            to discuss your masterbatch and compound requirements.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
