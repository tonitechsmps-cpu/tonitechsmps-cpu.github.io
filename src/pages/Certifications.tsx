import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Shield, CheckCircle, ChevronRight, FileCheck, Globe } from 'lucide-react';

const certifications = [
  {
    name: 'IEC',
    fullName: 'Importer Exporter Code',
    description: 'Official registration with DGFT for conducting international trade from India.',
    icon: Globe,
  },
  {
    name: 'ISO 9001:2015',
    fullName: 'Quality Management System',
    description: 'Internationally recognized standard for quality management ensuring consistent product quality.',
    icon: Award,
  },
  {
    name: 'APEDA',
    fullName: 'Agricultural & Processed Food Products Export Development Authority',
    description: 'Registered exporter for agricultural and processed food products.',
    icon: Shield,
  },
  {
    name: 'FSSAI',
    fullName: 'Food Safety and Standards Authority of India',
    description: 'Compliance with Indian food safety regulations for food product exports.',
    icon: CheckCircle,
  },
  {
    name: 'BIS',
    fullName: 'Bureau of Indian Standards',
    description: 'Products meet Indian quality standards and specifications.',
    icon: FileCheck,
  },
  {
    name: 'FIEO',
    fullName: 'Federation of Indian Export Organisations',
    description: 'Member of premier trade promotion organization in India.',
    icon: Globe,
  },
];

const complianceAreas = [
  {
    title: 'Product Safety',
    items: ['Quality testing', 'Safety certifications', 'Compliance documentation', 'Lab reports'],
  },
  {
    title: 'Export Regulations',
    items: ['DGFT compliance', 'Customs regulations', 'Trade agreements', 'Sanctions screening'],
  },
  {
    title: 'Documentation',
    items: ['Certificate of Origin', 'Phytosanitary certificates', 'Health certificates', 'Inspection reports'],
  },
  {
    title: 'Industry Standards',
    items: ['ISO compliance', 'Industry-specific standards', 'Destination country requirements', 'Buyer specifications'],
  },
];

export default function Certifications() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Certifications & Compliance</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
              Quality You Can Trust
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We maintain comprehensive certifications and compliance standards to ensure 
              seamless international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Certifications & Registrations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div 
                key={cert.name}
                className="bg-muted rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <cert.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">{cert.name}</h3>
                  </div>
                </div>
                <p className="text-sm font-medium text-secondary mb-2">{cert.fullName}</p>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Compliance</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Our Compliance Framework
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We ensure full compliance across all aspects of international trade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceAreas.map((area) => (
              <div key={area.title} className="bg-card rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-foreground">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Specific Certifications?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us to discuss your specific certification and compliance requirements.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Contact Us
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
