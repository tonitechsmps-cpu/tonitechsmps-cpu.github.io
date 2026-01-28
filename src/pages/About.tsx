import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, Globe, Handshake, ChevronRight } from 'lucide-react';

const milestones = [
  { year: '2009', title: 'Company Founded', description: 'Started as a small trading firm in Mumbai' },
  { year: '2012', title: 'First Export License', description: 'Obtained IEC and began international trade' },
  { year: '2015', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification' },
  { year: '2018', title: 'Global Expansion', description: 'Expanded to 30+ countries' },
  { year: '2021', title: '500+ Clients', description: 'Reached milestone of 500 active clients' },
  { year: '2024', title: '50+ Countries', description: 'Now exporting to over 50 countries' },
];

const team = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    description: '20+ years in international trade',
  },
  {
    name: 'Priya Patel',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    description: 'Expert in logistics and supply chain',
  },
  {
    name: 'Amit Kumar',
    role: 'Head of Quality Assurance',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    description: 'ISO certified quality specialist',
  },
  {
    name: 'Sneha Reddy',
    role: 'Export Documentation Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    description: 'Compliance and documentation expert',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue the highest standards in every product and service we deliver.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'Transparent and ethical business practices form the foundation of our relationships.',
  },
  {
    icon: Globe,
    title: 'Global Vision',
    description: 'We think globally while maintaining deep local expertise and partnerships.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our clients success is our success. We go above and beyond to exceed expectations.',
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
              India's Trusted Global Export Partner
            </h1>
            <p className="text-xl text-primary-foreground/80">
              For over 15 years, GlobalExport has been connecting Indian manufacturers with 
              businesses worldwide, delivering quality products with complete export solutions.
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
              <p className="text-muted-foreground leading-relaxed">
                To be the bridge between Indian excellence and global markets, providing seamless 
                export solutions that enable businesses to source quality products with confidence. 
                We are committed to maintaining the highest standards of quality, compliance, and 
                customer service in every transaction.
              </p>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and preferred export partner for businesses worldwide, 
                recognized for our commitment to quality, reliability, and innovation. We envision 
                a world where geographical boundaries don't limit access to premium Indian products.
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
                15 Years of Export Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2009 by Rajesh Sharma, GlobalExport began as a small trading firm in 
                Mumbai with a vision to showcase Indian products on the global stage. What started 
                with a single container shipment has grown into a comprehensive export operation 
                serving clients in over 50 countries.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our journey has been marked by continuous growth, innovation, and an unwavering 
                commitment to quality. Today, we handle diverse product categories from agricultural 
                commodities to industrial goods, maintaining the same personalized service that 
                defined our early days.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our success is built on long-term partnerships with manufacturers, logistics 
                providers, and most importantly, our clients who trust us to deliver excellence 
                consistently.
              </p>
            </div>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
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
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
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
              international trade, logistics, and quality management.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                  <p className="text-secondary text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-2">{member.description}</p>
                </div>
              </div>
            ))}
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
            Join hundreds of businesses worldwide who trust GlobalExport for their 
            sourcing and export needs.
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
