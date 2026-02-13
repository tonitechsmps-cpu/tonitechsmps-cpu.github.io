import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { categories, products } from '@/data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('category') || 'all';

  const chemicalSubIds = ['color-masterbatch', 'polymer-compounds'];
  const filteredProducts = products.filter((product) => {
    let matchesCategory = activeCategory === 'all';
    if (!matchesCategory) {
      if (activeCategory === 'chemical') {
        matchesCategory = chemicalSubIds.includes(product.category);
      } else {
        matchesCategory = product.category === activeCategory;
      }
    }
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
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <div key={category.id} className="flex flex-wrap gap-1">
                  <button
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
                  {'children' in category && category.children && activeCategory === category.id && category.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => setSearchParams({ category: child.id })}
                      className={cn(
                        "px-3 py-2 rounded-full text-xs font-medium transition-colors",
                        activeCategory === child.id
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted/60 text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {child.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>

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
