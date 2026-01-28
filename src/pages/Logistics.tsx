import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, Package, Warehouse, Clock, Globe, ChevronRight, CheckCircle } from 'lucide-react';

const shippingModes = [
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Cost-effective ocean shipping for bulk cargo with FCL and LCL options.',
    features: ['FCL (Full Container Load)', 'LCL (Less than Container Load)', '20ft and 40ft containers', 'Refrigerated containers'],
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast delivery for time-sensitive shipments to global destinations.',
    features: ['Express delivery', 'Priority handling', 'Temperature controlled', 'Dangerous goods certified'],
  },
  {
    icon: Truck,
    title: 'Road Transport',
    description: 'Comprehensive inland transportation across India.',
    features: ['Factory pickup', 'Port delivery', 'Cross-country transport', 'Specialized vehicles'],
  },
];

const services = [
  {
    icon: Package,
    title: 'Custom Packaging',
    description: 'Export-grade packaging solutions designed for international transit.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Secure storage facilities with inventory management.',
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    description: 'Live shipment tracking from origin to destination.',
  },
  {
    icon: Globe,
    title: 'Customs Clearance',
    description: 'Complete customs handling at origin and destination.',
  },
];

const ports = [
  { name: 'Nhava Sheva (JNPT)', location: 'Mumbai', type: 'Sea' },
  { name: 'Mundra Port', location: 'Gujarat', type: 'Sea' },
  { name: 'Chennai Port', location: 'Tamil Nadu', type: 'Sea' },
  { name: 'Chhatrapati Shivaji Airport', location: 'Mumbai', type: 'Air' },
  { name: 'Indira Gandhi Airport', location: 'Delhi', type: 'Air' },
  { name: 'Kempegowda Airport', location: 'Bangalore', type: 'Air' },
];

export default function Logistics() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Logistics & Shipping</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
              End-to-End Logistics Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Reliable shipping and logistics services to ensure your goods reach 
              their destination safely and on time.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Modes */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Transportation</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Shipping Options
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {shippingModes.map((mode) => (
              <div key={mode.title} className="bg-muted rounded-2xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <mode.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground">{mode.title}</h3>
                <p className="text-muted-foreground mb-6">{mode.description}</p>
                <ul className="space-y-3">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Additional Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Network</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Ports We Operate From
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ports.map((port) => (
              <div key={port.name} className="flex items-center gap-4 bg-muted rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  {port.type === 'Sea' ? (
                    <Ship className="h-5 w-5 text-primary-foreground" />
                  ) : (
                    <Plane className="h-5 w-5 text-primary-foreground" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{port.name}</h4>
                  <p className="text-sm text-muted-foreground">{port.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Shipping Quote?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us with your shipping requirements and we'll provide competitive rates.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Quote
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
