import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package, Scale, Clock, FileText, MessageCircle, ChevronRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const productDetails: Record<string, {
  name: string;
  category: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  packaging: string;
  moq: string;
  hsCode: string;
  shelfLife: string;
  features: string[];
}> = {
  'basmati-rice': {
    name: 'Premium Basmati Rice',
    category: 'Agricultural Products',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=800&h=600&fit=crop',
    ],
    description: 'Our Premium Basmati Rice is sourced from the finest farms in the foothills of the Himalayas. Known for its distinctive aroma, extra-long grains, and fluffy texture when cooked, this rice is aged for 12-18 months to enhance its flavor and cooking properties. Ideal for biryanis, pulao, and other gourmet dishes.',
    specifications: {
      'Grain Length': '8.35mm average',
      'Moisture Content': 'Max 12.5%',
      'Broken Grains': 'Max 1%',
      'Foreign Matter': 'Nil',
      'Purity': '95% min',
      'Aging': '12-18 months',
    },
    packaging: 'Available in 1kg, 5kg, 10kg, 25kg, and 50kg bags. Customized packaging available for bulk orders.',
    moq: '20 Metric Tons',
    hsCode: '1006.30',
    shelfLife: '24 months from manufacturing date',
    features: [
      'Extra-long grain (8.35mm avg)',
      'Aged for 12-18 months',
      'Authentic Himalayan origin',
      'Non-GMO and pesticide-free',
      'FSSAI and APEDA certified',
    ],
  },
  'turmeric-powder': {
    name: 'Organic Turmeric Powder',
    category: 'Agricultural Products',
    images: [
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1607877361964-c5a96b2f1c90?w=800&h=600&fit=crop',
    ],
    description: 'Premium organic turmeric powder with high curcumin content, sourced from certified organic farms in South India. Known for its vibrant color and potent medicinal properties.',
    specifications: {
      'Curcumin Content': 'Min 3.5%',
      'Moisture': 'Max 10%',
      'Mesh Size': '60-80 mesh',
      'Color Value': 'Min 200 ASTA',
    },
    packaging: '25kg bags, 50kg bags, or custom packaging',
    moq: '5 Metric Tons',
    hsCode: '0910.30',
    shelfLife: '18 months',
    features: ['Certified organic', 'High curcumin content', 'No artificial colors', 'Lab tested'],
  },
};

// Default product for unknown IDs
const defaultProduct = {
  name: 'Product Details',
  category: 'General',
  images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'],
  description: 'Contact us for detailed information about this product.',
  specifications: {},
  packaging: 'Custom packaging available',
  moq: 'Contact for MOQ',
  hsCode: 'Contact for HS Code',
  shelfLife: 'Varies by product',
  features: ['Quality assured', 'Export ready', 'Competitive pricing'],
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productDetails[id || ''] || defaultProduct;
  const [activeImage, setActiveImage] = useState(0);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={cn(
                        "w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                        activeImage === index ? "border-secondary" : "border-transparent hover:border-border"
                      )}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="text-secondary font-medium text-sm">{product.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foreground">{product.name}</h1>
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-foreground">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-muted rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium text-foreground">MOQ</span>
                  </div>
                  <p className="text-muted-foreground">{product.moq}</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium text-foreground">HS Code</span>
                  </div>
                  <p className="text-muted-foreground">{product.hsCode}</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium text-foreground">Shelf Life</span>
                  </div>
                  <p className="text-muted-foreground">{product.shelfLife}</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Scale className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium text-foreground">Packaging</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{product.packaging}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="ocean" size="lg" className="flex-1" asChild>
                  <Link to={`/contact?product=${id}`}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Enquiry
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          {Object.keys(product.specifications).length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Specifications</h2>
              <div className="bg-muted rounded-2xl overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={key} className={index % 2 === 0 ? 'bg-card' : ''}>
                        <td className="px-6 py-4 font-medium text-foreground">{key}</td>
                        <td className="px-6 py-4 text-muted-foreground">{String(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
