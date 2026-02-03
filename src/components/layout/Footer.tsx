import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Export Capabilities', href: '/export-capabilities' },
    { name: 'Logistics & Shipping', href: '/logistics' },
    { name: 'Documentation Support', href: '/documentation' },
    { name: 'Quality Assurance', href: '/certifications' },
  ],
  products: [
    { name: 'Color Masterbatch', href: '/products?category=color-masterbatch' },
    { name: 'Polymer Compounds', href: '/products?category=polymer-compounds' },
    { name: 'Specialty Products', href: '/products?category=specialty' },
    { name: 'All Products', href: '/products' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Dudhani Overseas" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-bold text-xl">Dudhani Overseas</h3>
                <p className="text-sm text-primary-foreground/70">India Private Limited</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Leading manufacturer and exporter of Color Masterbatches, Polymer Compounds, and 
              Specialty Additives. Serving global markets with quality products since 2018.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@doipl.in" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                info@doipl.in
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>Dwarka, Sector - 6<br />New Delhi 110078, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Registration Info */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-primary-foreground/60">
            <div>
              <span className="font-medium text-primary-foreground/80">CIN:</span> U24304JH2018PTC011591
            </div>
            <div>
              <span className="font-medium text-primary-foreground/80">GSTIN:</span> 07AAGCD7615P1Z5
            </div>
            <div>
              <span className="font-medium text-primary-foreground/80">Established:</span> 2018
            </div>
            <div>
              <span className="font-medium text-primary-foreground/80">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Dudhani Overseas India Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
