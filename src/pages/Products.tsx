import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'color-masterbatch', name: 'Color Masterbatch' },
  { id: 'polymer-compounds', name: 'Polymer Compounds' },
  { id: 'engineering-polymers', name: 'Engineering Polymers' },
  { id: 'specialty', name: 'Specialty' },
];

const products = [
  {
    id: 'white-masterbatch',
    name: 'White Masterbatch',
    category: 'color-masterbatch',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'High quality titanium dioxide based white masterbatch for superior opacity and brightness',
    hsCode: '3901.20',
    moq: '500 kg',
  },
  {
    id: 'black-masterbatch',
    name: 'Black Masterbatch',
    category: 'color-masterbatch',
    image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400&h=300&fit=crop',
    description: 'Carbon black based masterbatch for various polymers with excellent dispersion',
    hsCode: '3901.20',
    moq: '500 kg',
  },
  {
    id: 'color-masterbatch',
    name: 'Color Masterbatch',
    category: 'color-masterbatch',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
    description: 'Custom color masterbatches in wide range of colors with precise color matching',
    hsCode: '3901.20',
    moq: '250 kg',
  },
  {
    id: 'pe-masterbatch',
    name: 'PE Masterbatch',
    category: 'polymer-compounds',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop',
    description: 'HDPE/LLDPE/LDPE based masterbatches for film, pipe, and molding applications',
    hsCode: '3901.10',
    moq: '500 kg',
  },
  {
    id: 'pp-masterbatch',
    name: 'PP Masterbatch',
    category: 'polymer-compounds',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop',
    description: 'Polypropylene based masterbatches for injection molding and fiber applications',
    hsCode: '3902.10',
    moq: '500 kg',
  },
  {
    id: 'abs-compounds',
    name: 'ABS/SAN/ASA Compounds',
    category: 'engineering-polymers',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    description: 'High-performance ABS, SAN, and ASA compounds for automotive and electronics',
    hsCode: '3903.30',
    moq: '1000 kg',
  },
  {
    id: 'pc-compounds',
    name: 'PC Compounds',
    category: 'engineering-polymers',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop',
    description: 'Polycarbonate based compounds with excellent impact resistance and clarity',
    hsCode: '3907.40',
    moq: '1000 kg',
  },
  {
    id: 'pet-compounds',
    name: 'PET Compounds',
    category: 'engineering-polymers',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    description: 'Polyethylene terephthalate compounds for packaging and fiber applications',
    hsCode: '3907.60',
    moq: '1000 kg',
  },
  {
    id: 'eva-masterbatch',
    name: 'EVA Masterbatch',
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop',
    description: 'Ethylene vinyl acetate masterbatches for footwear and foam applications',
    hsCode: '3901.30',
    moq: '500 kg',
  },
  {
    id: 'tpu-compounds',
    name: 'TPU Compounds',
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
    description: 'Thermoplastic polyurethane compounds for flexible and durable applications',
    hsCode: '3909.50',
    moq: '500 kg',
  },
  {
    id: 'pa-compounds',
    name: 'PA Compounds',
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop',
    description: 'Polyamide (Nylon) compounds for engineering and automotive applications',
    hsCode: '3908.10',
    moq: '1000 kg',
  },
  {
    id: 'additive-masterbatch',
    name: 'Additive Masterbatch',
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
    description: 'UV stabilizers, antioxidants, flame retardants and processing aids',
    hsCode: '3901.90',
    moq: '250 kg',
  },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Products</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
              Masterbatches & Polymer Compounds
            </h1>
            <p className="text-xl text-primary-foreground/80">
              High-quality color masterbatches, polymer compounds, and specialty additives 
              for diverse industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[72px] lg:top-[88px] z-40 bg-card border-b border-border shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSearchParams(category.id === 'all' ? {} : { category: category.id })}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-card rounded-2xl overflow-hidden card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-medium capitalize">
                        {product.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">HS: {product.hsCode}</span>
                      <span className="text-muted-foreground">MOQ: {product.moq}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No products found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSearchParams({}); setSearchQuery(''); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Formulations?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We offer custom color matching and formulation services. Contact us with your 
            specifications and our technical team will develop the perfect solution.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Request Custom Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
