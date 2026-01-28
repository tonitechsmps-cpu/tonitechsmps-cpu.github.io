import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Ship, Shield, Clock, Award, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import heroBg from '@/assets/hero-bg.jpg';

// Product Categories
const productCategories = [
  {
    id: 'agricultural',
    name: 'Agricultural Products',
    description: 'Premium grains, spices, and organic produce',
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
  },
  {
    id: 'industrial',
    name: 'Industrial Goods',
    description: 'Quality machinery parts and raw materials',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  },
  {
    id: 'textiles',
    name: 'Textiles & Fabrics',
    description: 'Traditional and modern textile solutions',
    icon: '🧵',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop',
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    description: 'Authentic Indian artisan products',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
  },
  {
    id: 'chemicals',
    name: 'Chemicals & Pharmaceuticals',
    description: 'Certified chemical and pharma exports',
    icon: '🧪',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop',
  },
  {
    id: 'food',
    name: 'Food & Beverages',
    description: 'Premium packaged food products',
    icon: '🍚',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop',
  },
];

// Countries we export to
const exportCountries = [
  { name: 'United States', flag: '🇺🇸' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'South Africa', flag: '🇿🇦' },
];

// Why Choose Us
const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous quality control at every stage ensures only the best products reach our clients.',
  },
  {
    icon: Award,
    title: 'Certified & Compliant',
    description: 'All exports meet international standards with proper certifications and documentation.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Reliable logistics network guarantees timely delivery to any destination worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: '50+ countries served with established trade relationships and local expertise.',
  },
];

// Certifications
const certifications = [
  { name: 'IEC', description: 'Import Export Code' },
  { name: 'ISO 9001', description: 'Quality Management' },
  { name: 'APEDA', description: 'Agricultural Export' },
  { name: 'FSSAI', description: 'Food Safety' },
  { name: 'BIS', description: 'Bureau of Indian Standards' },
  { name: 'FIEO', description: 'Federation of Export' },
];

// Testimonials
const testimonials = [
  {
    quote: "GlobalExport has been our trusted partner for over 5 years. Their commitment to quality and timely delivery is unmatched.",
    author: "James Mitchell",
    role: "Procurement Director",
    company: "TechCorp Industries, USA",
    rating: 5,
  },
  {
    quote: "The documentation support and compliance handling made our first import from India completely hassle-free.",
    author: "Sarah Schmidt",
    role: "Supply Chain Manager",
    company: "EuroTrade GmbH, Germany",
    rating: 5,
  },
  {
    quote: "Exceptional product quality and professional service. They understand international trade requirements perfectly.",
    author: "Ahmed Al-Rashid",
    role: "CEO",
    company: "Gulf Imports LLC, UAE",
    rating: 5,
  },
];

// Statistics
const stats = [
  { value: '50+', label: 'Countries Served' },
  { value: '1000+', label: 'Products Exported' },
  { value: '500+', label: 'Happy Clients' },
  { value: '15+', label: 'Years Experience' },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-up">
              <Ship className="h-4 w-4 text-accent" />
              <span className="text-sm text-primary-foreground/90">Trusted Export Partner Since 2009</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up leading-tight">
              Reliable Global Export Solutions from{' '}
              <span className="text-accent">India</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 animate-fade-up max-w-2xl">
              Your trusted partner for premium quality products, seamless logistics, and 
              complete export documentation. Connecting Indian excellence to global markets.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-primary-foreground/20">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-foreground">
                India's Premier Export & Trading Company
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Established in 2009, GlobalExport has grown to become one of India's most trusted 
                export companies. We specialize in sourcing, quality control, and export of diverse 
                product categories to over 50 countries worldwide.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our commitment to quality, compliance, and customer satisfaction has earned us 
                long-term partnerships with businesses across North America, Europe, Middle East, 
                and Asia-Pacific regions.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" 
                    alt="Warehouse"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=300&fit=crop" 
                    alt="Shipping"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=300&fit=crop" 
                    alt="Global Trade"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop" 
                    alt="Quality Check"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Export Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We source and export a wide range of quality products across multiple categories, 
              ensuring the best of India reaches global markets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group bg-card rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-4xl">{category.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="ocean" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Countries We Export To */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Global Reach</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Countries We Export To
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Our extensive network spans across continents, delivering Indian products to 
              businesses in over 50 countries.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
            {exportCountries.map((country) => (
              <div 
                key={country.name}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-primary-foreground/20 transition-colors"
              >
                <span className="text-3xl mb-2 block">{country.flag}</span>
                <span className="text-sm text-primary-foreground/80">{country.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/60 mb-4">And 40+ more countries across the globe</p>
            <Button variant="heroOutline" asChild>
              <Link to="/export-capabilities">
                Explore Our Export Capabilities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Your Trusted Export Partner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise with commitment to excellence, ensuring every 
              export transaction exceeds expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Compliance & Trust</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              Our Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain all necessary certifications and compliance standards for 
              seamless international trade.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div 
                key={cert.name}
                className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/certifications">
                View All Certifications
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-muted rounded-2xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-secondary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-secondary">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Exporting?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get in touch with our export specialists today. We'll help you source the 
            right products and handle all logistics and documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+911234567890">
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
