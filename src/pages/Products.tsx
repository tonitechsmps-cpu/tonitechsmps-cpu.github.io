import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'agricultural', name: 'Agricultural' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'textiles', name: 'Textiles' },
  { id: 'handicrafts', name: 'Handicrafts' },
  { id: 'chemicals', name: 'Chemicals' },
  { id: 'food', name: 'Food & Beverages' },
];

const products = [
  {
    id: 'basmati-rice',
    name: 'Premium Basmati Rice',
    category: 'agricultural',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
    description: 'Extra-long grain aromatic rice, aged for superior quality',
    hsCode: '1006.30',
    moq: '20 MT',
  },
  {
    id: 'turmeric-powder',
    name: 'Organic Turmeric Powder',
    category: 'agricultural',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=300&fit=crop',
    description: 'High curcumin content, certified organic turmeric',
    hsCode: '0910.30',
    moq: '5 MT',
  },
  {
    id: 'cotton-fabric',
    name: 'Premium Cotton Fabric',
    category: 'textiles',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop',
    description: '100% cotton fabric, various GSM and weave patterns',
    hsCode: '5208.12',
    moq: '5000 meters',
  },
  {
    id: 'machine-parts',
    name: 'Industrial Machine Parts',
    category: 'industrial',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop',
    description: 'Precision-engineered machine components',
    hsCode: '8483.40',
    moq: '500 units',
  },
  {
    id: 'brass-handicraft',
    name: 'Brass Handicrafts',
    category: 'handicrafts',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
    description: 'Traditional Indian brass decorative items',
    hsCode: '8306.29',
    moq: '200 pieces',
  },
  {
    id: 'organic-honey',
    name: 'Organic Forest Honey',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop',
    description: 'Pure, unprocessed organic honey from Indian forests',
    hsCode: '0409.00',
    moq: '1 MT',
  },
  {
    id: 'chemicals-dye',
    name: 'Industrial Dyes',
    category: 'chemicals',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop',
    description: 'Eco-friendly textile dyes and pigments',
    hsCode: '3204.17',
    moq: '500 kg',
  },
  {
    id: 'cashew-nuts',
    name: 'Premium Cashew Nuts',
    category: 'agricultural',
    image: 'https://images.unsplash.com/photo-1509358271058-aedd22840a0d?w=400&h=300&fit=crop',
    description: 'Grade W180, W240, and W320 cashew kernels',
    hsCode: '0801.32',
    moq: '10 MT',
  },
  {
    id: 'silk-saree',
    name: 'Handwoven Silk Sarees',
    category: 'textiles',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop',
    description: 'Traditional Banarasi and Kanchipuram silk sarees',
    hsCode: '5007.20',
    moq: '100 pieces',
  },
  {
    id: 'steel-pipes',
    name: 'Stainless Steel Pipes',
    category: 'industrial',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    description: 'SS304 and SS316 grade pipes and tubes',
    hsCode: '7306.40',
    moq: '10 MT',
  },
  {
    id: 'spices-mix',
    name: 'Indian Spice Collection',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
    description: 'Premium blended spices and masalas',
    hsCode: '0910.99',
    moq: '2 MT',
  },
  {
    id: 'marble-products',
    name: 'Marble Handicrafts',
    category: 'handicrafts',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    description: 'Hand-carved Makrana marble products',
    hsCode: '6802.91',
    moq: '100 pieces',
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
              Export Quality Products
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Explore our diverse range of premium Indian products ready for global export.
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
                        {product.category}
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
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We source a wide variety of products beyond what's listed. Contact us with your 
            requirements and we'll help you find the right products.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Send Product Inquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
