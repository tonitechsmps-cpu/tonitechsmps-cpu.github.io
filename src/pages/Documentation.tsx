import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, FileCheck, Globe, Stamp, ClipboardList, ChevronRight, CheckCircle } from 'lucide-react';

const documents = [
  {
    icon: FileText,
    title: 'Commercial Invoice',
    description: 'Detailed invoice with product description, quantity, value, and terms of sale.',
  },
  {
    icon: ClipboardList,
    title: 'Packing List',
    description: 'Complete list of goods with packaging details, weights, and dimensions.',
  },
  {
    icon: Globe,
    title: 'Certificate of Origin',
    description: 'Official document certifying the country where goods were manufactured.',
  },
  {
    icon: FileCheck,
    title: 'Bill of Lading / Airway Bill',
    description: 'Transport document serving as receipt and title for shipped goods.',
  },
  {
    icon: Stamp,
    title: 'Phytosanitary Certificate',
    description: 'Required for plant-based products certifying pest-free status.',
  },
  {
    icon: FileCheck,
    title: 'Quality Certificates',
    description: 'Lab reports and quality inspection certificates as required.',
  },
];

const additionalDocs = [
  'Health Certificate',
  'Insurance Certificate',
  'Inspection Certificate',
  'Fumigation Certificate',
  'Shipping Bill',
  'Export License (if required)',
  'GSP Certificate',
  'Halal Certificate (for food)',
];

const process = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description: 'We analyze destination country requirements and buyer specifications.',
  },
  {
    step: '02',
    title: 'Document Preparation',
    description: 'Our team prepares all required export documents accurately.',
  },
  {
    step: '03',
    title: 'Verification & Certification',
    description: 'Documents are verified and certified by relevant authorities.',
  },
  {
    step: '04',
    title: 'Customs Filing',
    description: 'Complete customs documentation and electronic filing.',
  },
];

export default function Documentation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Documentation Support</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
              Complete Export Documentation
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive documentation services to ensure smooth customs clearance 
              and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Documents */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Documents</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Key Export Documents
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <div key={doc.title} className="bg-muted rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <doc.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{doc.title}</h3>
                <p className="text-muted-foreground text-sm">{doc.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Documents */}
          <div className="mt-12 bg-muted rounded-2xl p-8">
            <h3 className="font-semibold text-xl mb-6 text-foreground">Additional Documents We Handle</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {additionalDocs.map((doc) => (
                <div key={doc} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                  <span className="text-sm text-muted-foreground">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Documentation Workflow
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-sm h-full">
                  <span className="text-5xl font-bold text-secondary/20">{item.step}</span>
                  <h3 className="font-semibold text-lg mt-2 mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-secondary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Documentation Assistance?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our export documentation experts are ready to help with your requirements.
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
