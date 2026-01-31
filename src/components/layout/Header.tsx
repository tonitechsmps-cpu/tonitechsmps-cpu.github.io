import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Products', 
    href: '/products',
    children: [
      { name: 'All Products', href: '/products' },
      { name: 'Agricultural', href: '/products?category=agricultural' },
      { name: 'Industrial', href: '/products?category=industrial' },
      { name: 'Textiles', href: '/products?category=textiles' },
    ]
  },
  { name: 'Export Capabilities', href: '/export-capabilities' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Logistics', href: '/logistics' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-custom flex items-center justify-between py-2 text-sm">
          <div className="hidden sm:flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
            </a>
            <a href="mailto:info@doipl.in" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              info@doipl.in
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-end">
            <span>🌍 Exporting to 50+ Countries</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg lg:text-xl">DO</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg lg:text-xl text-foreground">Dudhani Overseas</h1>
                <p className="text-xs text-muted-foreground">Trading Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive(item.href) 
                        ? "text-secondary bg-secondary/10" 
                        : "text-foreground hover:text-secondary hover:bg-muted"
                    )}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 w-48 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ocean" asChild>
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in">
            <div className="container-custom py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      isActive(item.href)
                        ? "text-secondary bg-secondary/10"
                        : "text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Button variant="ocean" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Request Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
