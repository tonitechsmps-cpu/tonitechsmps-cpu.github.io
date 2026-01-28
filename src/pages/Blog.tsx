import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 'export-regulations-2024',
    title: 'Understanding Export Regulations: A Complete Guide for 2024',
    excerpt: 'Navigate the complex world of export regulations with our comprehensive guide covering documentation, compliance, and best practices.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    category: 'Compliance',
    author: 'Priya Patel',
    date: '2024-01-15',
    readTime: '8 min read',
  },
  {
    id: 'basmati-rice-export',
    title: 'Why Indian Basmati Rice is the World\'s Most Sought-After',
    excerpt: 'Discover what makes Indian Basmati rice unique and why it remains the premium choice for international buyers.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    category: 'Products',
    author: 'Rajesh Sharma',
    date: '2024-01-10',
    readTime: '5 min read',
  },
  {
    id: 'shipping-optimization',
    title: 'Optimizing Your Shipping Strategy for Cost Efficiency',
    excerpt: 'Learn how to reduce shipping costs without compromising delivery times or product safety.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop',
    category: 'Logistics',
    author: 'Amit Kumar',
    date: '2024-01-05',
    readTime: '6 min read',
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance in Export: Building Trust with Global Buyers',
    excerpt: 'How robust quality control processes can help you build lasting relationships with international clients.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
    category: 'Quality',
    author: 'Sneha Reddy',
    date: '2023-12-28',
    readTime: '7 min read',
  },
  {
    id: 'fta-benefits',
    title: 'Leveraging Free Trade Agreements for Better Export Terms',
    excerpt: 'A guide to understanding and utilizing FTAs to reduce duties and improve your competitive advantage.',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop',
    category: 'Trade',
    author: 'Priya Patel',
    date: '2023-12-20',
    readTime: '9 min read',
  },
  {
    id: 'sustainable-exports',
    title: 'Sustainable Exporting: Meeting Global Environmental Standards',
    excerpt: 'How Indian exporters are adapting to meet international sustainability requirements.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
    category: 'Sustainability',
    author: 'Rajesh Sharma',
    date: '2023-12-15',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Compliance', 'Products', 'Logistics', 'Quality', 'Trade', 'Sustainability'];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Blog & Resources</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
              Export Insights & Updates
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Stay informed with the latest trends, regulations, and best practices in 
              international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-[72px] lg:top-[88px] z-40 bg-card border-b border-border shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-muted/80 first:bg-primary first:text-primary-foreground"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-semibold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="text-secondary text-sm font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest export insights and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
