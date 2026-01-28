import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Globe, Ship, Plane, Truck, Package, FileCheck, Clock, Shield, ChevronRight, MapPin } from 'lucide-react';

const capabilities = [
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'FCL and LCL shipments to all major ports worldwide with competitive rates and reliable transit times.',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Express air cargo services for time-sensitive shipments to international destinations.',
  },
  {
    icon: Truck,
    title: 'Multimodal Transport',
    description: 'Seamless door-to-door delivery combining multiple transportation modes.',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    description: 'Export-grade packaging solutions tailored to product requirements and destination standards.',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete export documentation including commercial invoice, packing list, COO, and more.',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Comprehensive cargo insurance options to protect your shipments against all risks.',
  },
];

const regions = [
  {
    name: 'North America',
    countries: ['United States', 'Canada', 'Mexico'],
    ports: ['Los Angeles', 'New York', 'Houston', 'Vancouver'],
  },
  {
    name: 'Europe',
    countries: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Belgium', 'Italy', 'Spain'],
    ports: ['Rotterdam', 'Hamburg', 'Antwerp', 'Southampton', 'Le Havre'],
  },
  {
    name: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'],
    ports: ['Dubai', 'Jeddah', 'Dammam', 'Abu Dhabi'],
  },
  {
    name: 'Asia Pacific',
    countries: ['Singapore', 'Malaysia', 'Australia', 'Japan', 'South Korea', 'Thailand'],
    ports: ['Singapore', 'Sydney', 'Melbourne', 'Tokyo', 'Busan'],
  },
  {
    name: 'Africa',
    countries: ['South Africa', 'Kenya', 'Nigeria', 'Egypt', 'Morocco'],
    ports: ['Durban', 'Mombasa', 'Lagos', 'Alexandria'],
  },
];

const stats = [
  { value: '50+', label: 'Countries' },
  { value: '100+', label: 'Ports' },
  { value: '15+', label: 'Shipping Lines' },
  { value: '99%', label: 'On-Time Delivery' },
];

export default function ExportCapabilities() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Export Capabilities</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
              Global Reach, Local Expertise
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Our extensive network and expertise enable seamless exports to over 50 countries 
              across 5 continents.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-secondary-foreground">{stat.value}</div>
                <div className="text-secondary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Comprehensive Export Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div 
                key={capability.title}
                className="bg-muted rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <capability.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Global Presence</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Regions We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div key={region.name} className="bg-card rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{region.name}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Countries</p>
                    <p className="text-sm text-foreground">{region.countries.join(', ')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Major Ports</p>
                    <p className="text-sm text-foreground">{region.ports.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Export?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us to discuss your export requirements. We'll provide a customized 
            solution for your business needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
