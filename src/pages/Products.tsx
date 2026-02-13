import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'spices', name: 'Spices / Herbs' },
  { 
    id: 'chemical', 
    name: 'Chemical',
    children: [
      { id: 'color-masterbatch', name: 'Color Masterbatch' },
      { id: 'polymer-compounds', name: 'Polymer Compounds' },
    ],
  },
  { id: 'specialty', name: 'Specialty' },
  { id: 'basmati', name: 'Basmati' },
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
    category: 'color-masterbatch',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    description: 'High-performance ABS, SAN, and ASA compounds for automotive and electronics',
    hsCode: '3903.30',
    moq: '1000 kg',
  },
  {
    id: 'pc-compounds',
    name: 'PC Compounds',
    category: 'polymer-compounds',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop',
    description: 'Polycarbonate based compounds with excellent impact resistance and clarity',
    hsCode: '3907.40',
    moq: '1000 kg',
  },
  {
    id: 'pet-compounds',
    name: 'PET Compounds',
    category: 'polymer-compounds',
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
  // Spices Category - Whole Spices
  {
    id: 'red-chilli-whole',
    name: 'Red Chilli Whole (लाल मिर्च साबुत)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&h=300&fit=crop',
    description: 'Premium quality whole red chillies for export, rich color and pungency',
    hsCode: '0904.2010',
    moq: '500 kg',
  },
  {
    id: 'fenugreek-seeds',
    name: 'Fenugreek Seeds (मेथी दाना)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop',
    description: 'High-grade fenugreek seeds, aromatic and rich in nutrients',
    hsCode: '0910.9912',
    moq: '500 kg',
  },
  {
    id: 'coriander-seeds',
    name: 'Coriander Seeds (धनिया)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?w=400&h=300&fit=crop',
    description: 'Whole coriander seeds with rich aroma, sorted and cleaned for export',
    hsCode: '0909.2010',
    moq: '500 kg',
  },
  {
    id: 'mustard-seeds',
    name: 'Mustard Seeds (राई)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1599909533901-fda01b0c8e27?w=400&h=300&fit=crop',
    description: 'Premium black and yellow mustard seeds for culinary and oil extraction',
    hsCode: '0909.1000',
    moq: '500 kg',
  },
  {
    id: 'cumin-seeds',
    name: 'Cumin Seeds (जीरा)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    description: 'Export quality cumin seeds with strong aroma and flavor',
    hsCode: '0909.3010',
    moq: '500 kg',
  },
  {
    id: 'black-pepper-whole',
    name: 'Black Pepper Whole (काली मिर्च साबुत)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1599909533901-fda01b0c8e27?w=400&h=300&fit=crop',
    description: 'Premium whole black peppercorns, bold flavor for global markets',
    hsCode: '0904.1110',
    moq: '500 kg',
  },
  {
    id: 'fennel-seeds',
    name: 'Fennel Seeds (सौंफ)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop',
    description: 'Aromatic fennel seeds, ideal for cooking and mouth freshener use',
    hsCode: '0909.5000',
    moq: '500 kg',
  },
  {
    id: 'cloves',
    name: 'Cloves (लौंग)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1599909533901-fda01b0c8e27?w=400&h=300&fit=crop',
    description: 'Whole cloves with intense aroma, sourced from premium farms',
    hsCode: '0907.0000',
    moq: '250 kg',
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon (दालचीनी)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop',
    description: 'Premium cinnamon sticks and powder for culinary and medicinal use',
    hsCode: '0906.1000',
    moq: '250 kg',
  },
  {
    id: 'star-anise',
    name: 'Star Anise (चक्रफूल)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
    description: 'Whole star anise with rich licorice flavor for spice blends',
    hsCode: '0909.6100',
    moq: '250 kg',
  },
  {
    id: 'bay-leaf',
    name: 'Bay Leaf (तेज पत्ता)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=400&h=300&fit=crop',
    description: 'Dried bay leaves with aromatic flavor for cooking and seasoning',
    hsCode: '0910.9914',
    moq: '250 kg',
  },
  {
    id: 'nigella-seeds',
    name: 'Nigella Seeds / Black Cumin (कलौंजी)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    description: 'Premium nigella seeds with distinct nutty flavor and health benefits',
    hsCode: '0910.9913',
    moq: '500 kg',
  },
  {
    id: 'nutmeg',
    name: 'Nutmeg (जायफल)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
    description: 'Whole nutmeg with warm aromatic flavor for spice blends',
    hsCode: '0908.1100',
    moq: '250 kg',
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder (हल्दी पाउडर)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop',
    description: 'High curcumin content turmeric powder for food and health industries',
    hsCode: '0910.3000',
    moq: '500 kg',
  },
  {
    id: 'mace',
    name: 'Mace (जावित्री)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
    description: 'Premium mace spice with delicate flavor for gourmet cooking',
    hsCode: '0908.1200',
    moq: '250 kg',
  },
  {
    id: 'red-chilli-powder',
    name: 'Red Chilli Powder (लाल मिर्च पाउडर)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&h=300&fit=crop',
    description: 'Fine ground red chilli powder with vibrant color and heat',
    hsCode: '0904.2020',
    moq: '500 kg',
  },
  {
    id: 'kashmiri-chilli',
    name: 'Kashmiri Chilli (कश्मीरी मिर्च)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&h=300&fit=crop',
    description: 'Mild heat Kashmiri chillies known for deep red color',
    hsCode: '0904.2010',
    moq: '500 kg',
  },
  {
    id: 'dry-ginger-powder',
    name: 'Dry Ginger Powder (सोंठ / सूखी अदरक)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop',
    description: 'Finely ground dry ginger powder for culinary and medicinal use',
    hsCode: '0910.1120',
    moq: '500 kg',
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder (धनिया पाउडर)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?w=400&h=300&fit=crop',
    description: 'Fresh ground coriander powder with rich aroma for cooking',
    hsCode: '0909.2020',
    moq: '500 kg',
  },
  {
    id: 'dry-mango-powder',
    name: 'Dry Mango Powder / Amchur (अमचूर)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    description: 'Tangy amchur powder made from dried raw mangoes',
    hsCode: '1106.3020',
    moq: '500 kg',
  },
  {
    id: 'cumin-powder',
    name: 'Cumin Powder (जीरा पाउडर)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    description: 'Freshly ground cumin powder with intense earthy flavor',
    hsCode: '0909.3020',
    moq: '500 kg',
  },
  {
    id: 'asafoetida-hing',
    name: 'Asafoetida / Hing (हींग)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
    description: 'Pure asafoetida with strong flavor, essential Indian spice',
    hsCode: '1301.9019',
    moq: '250 kg',
  },
  {
    id: 'black-pepper-powder',
    name: 'Black Pepper Powder (काली मिर्च पाउडर)',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1599909533901-fda01b0c8e27?w=400&h=300&fit=crop',
    description: 'Finely ground black pepper powder with bold pungent flavor',
    hsCode: '0904.1200',
    moq: '500 kg',
  },
  // Pulses & Herbs (under spices category)
  {
    id: 'chana-dal',
    name: 'Chana Dal',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    description: 'Premium quality split chickpeas, cleaned and sorted for export',
    hsCode: '0713.20',
    moq: '1000 kg',
  },
  {
    id: 'mung-dal',
    name: 'Mung Dal',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1612257416648-ee7a6c5b18c9?w=400&h=300&fit=crop',
    description: 'High-grade green gram dal, ideal for cooking and processing',
    hsCode: '0713.31',
    moq: '1000 kg',
  },
  {
    id: 'toor-dal',
    name: 'Toor Dal',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop',
    description: 'Yellow pigeon pea split dal, rich in protein and nutrients',
    hsCode: '0713.40',
    moq: '1000 kg',
  },
  {
    id: 'urad-dal',
    name: 'Urad Dal',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop',
    description: 'Black gram dal, essential ingredient for South Indian cuisine',
    hsCode: '0713.39',
    moq: '1000 kg',
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8c10616?w=400&h=300&fit=crop',
    description: 'Fresh aloe vera leaves and processed gel for cosmetic and health industries',
    hsCode: '1211.90',
    moq: '500 kg',
  },
  {
    id: 'neem-datun',
    name: 'Neem Datun',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?w=400&h=300&fit=crop',
    description: 'Natural neem twigs for traditional dental care, antibacterial properties',
    hsCode: '1211.90',
    moq: '250 kg',
  },
  {
    id: 'neem-leaves',
    name: 'Neem Leaves',
    category: 'spices',
    image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=400&h=300&fit=crop',
    description: 'Dried neem leaves for medicinal and agricultural applications',
    hsCode: '1211.90',
    moq: '500 kg',
  },
  // Basmati Category
  {
    id: 'basmati-rice-1121',
    name: '1121 Basmati Rice',
    category: 'basmati',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
    description: 'Premium 1121 Basmati Rice, extra-long grain with aromatic flavor for export',
    hsCode: '1006.30',
    moq: '1000 kg',
  },
  {
    id: 'basmati-rice-sella',
    name: 'Sella Basmati Rice',
    category: 'basmati',
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&h=300&fit=crop',
    description: 'Parboiled Sella Basmati Rice, golden color with firm texture after cooking',
    hsCode: '1006.30',
    moq: '1000 kg',
  },
];

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
            {/* Categories */}
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
