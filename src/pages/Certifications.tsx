import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Shield, CheckCircle, ChevronRight, FileCheck, Globe, Leaf, Users } from 'lucide-react';

const certifications = [
  {
    name: 'ISO 9001:2015',
    fullName: 'Quality Management System',
    description: 'Internationally recognized standard for quality management ensuring consistent product quality and customer satisfaction.',
    icon: Award,
  },
  {
    name: 'ISO 14001',
    fullName: 'Environmental Management System',
    description: 'Commitment to environmental responsibility and sustainable manufacturing practices.',
    icon: Leaf,
  },
  {
    name: 'ISO 45001',
    fullName: 'Occupational Health & Safety',
    description: 'Ensuring safe and healthy workplace conditions for all employees and stakeholders.',
    icon: Users,
  },
  {
    name: 'UL Certified',
    fullName: 'Underwriters Laboratories',
    description: 'International safety certification for products meeting rigorous safety standards.',
    icon: Shield,
  },
  {
    name: 'NABL Accredited',
    fullName: 'Autodynamics Technologies',
    description: 'Laboratory testing accreditation ensuring accurate and reliable quality testing.',
    icon: FileCheck,
  },
  {
    name: 'IEC',
    fullName: 'Importer Exporter Code',
    description: 'Official registration with DGFT for conducting international trade from India.',
    icon: Globe,
  },
];

const complianceAreas = [
  {
    title: 'Quality Standards',
    items: ['TiO2 content testing', 'Melt flow analysis', 'Color consistency', 'Dispersion quality'],
  },
  {
    title: 'Environmental',
    items: ['RoHS compliance', 'REACH regulations', 'Eco-friendly formulations', 'Waste management'],
  },
  {
    title: 'Documentation',
    items: ['Certificate of Analysis', 'Material Safety Data Sheets', 'Technical Data Sheets', 'Batch traceability'],
  },
  {
    title: 'Industry Standards',
    items: ['Automotive OEM specs', 'Packaging regulations', 'Food contact compliance', 'Electrical safety'],
  },
];

const testingCapabilities = [
  'Melt Flow Index (MFI) Testing',
  'Color Measurement & Matching',
  'Tensile Strength Analysis',
  'Impact Resistance Testing',
  'Heat Deflection Temperature',
  'Ash Content Determination',
  'Moisture Content Analysis',
  'Dispersion Quality Check',
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
              the highest quality masterbatches and compounds for our global customers.
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

      {/* Testing Capabilities */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Laboratory</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
                In-House Testing Capabilities
              </h2>
              <p className="text-muted-foreground mb-6">
                Our state-of-the-art laboratory is equipped with advanced testing equipment 
                to ensure every batch meets the highest quality standards before dispatch.
              </p>
              <p className="text-muted-foreground mb-8">
                All testing is conducted by trained technicians following standardized 
                procedures, with results documented for complete traceability.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-lg mb-6 text-foreground">Testing Services</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {testingCapabilities.map((test) => (
                  <div key={test} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm text-muted-foreground">{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Compliance</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Our Compliance Framework
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We ensure full compliance across all aspects of manufacturing and international trade.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceAreas.map((area) => (
              <div key={area.title} className="bg-muted rounded-2xl p-6 shadow-sm">
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
            We can provide detailed documentation for your products.
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
