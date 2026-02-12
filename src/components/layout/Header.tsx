import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us', 
    href: '/about',
    children: [
      { name: 'About Company', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
    ]
  },
  { 
    name: 'Products', 
    href: '/products',
    children: [
      { name: 'All Products', href: '/products' },
      { name: 'Spices / Herbs', href: '/products?category=spices' },
      { 
        name: 'Chemical', 
        href: '/products?category=chemical',
        children: [
          { name: 'Color Masterbatch', href: '/products?category=color-masterbatch' },
          { name: 'Polymer Compounds', href: '/products?category=polymer-compounds' },
        ]
      },
      { name: 'Specialty', href: '/products?category=specialty' },
      { name: 'Basmati', href: '/products?category=basmati' },
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
              <img src={logo} alt="Dudhani Overseas" className="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg lg:text-xl text-foreground">Dudhani Overseas</h1>
                <p className="text-xs text-muted-foreground">India Private Limited</p>
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
                    <div className="absolute top-full left-0 w-52 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in z-50">
                      {item.children.map((child) => (
                        'children' in child && child.children ? (
                          <div
                            key={child.name}
                            className="relative group/sub"
                          >
                            <Link
                              to={child.href}
                              className="flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                            >
                              {child.name}
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                            <div className="absolute left-full top-0 w-48 bg-card rounded-lg shadow-lg border border-border py-2 hidden group-hover/sub:block z-50">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                          >
                            {child.name}
                          </Link>
                        )
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
