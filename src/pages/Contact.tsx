import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const countries = [
  'United States', 'United Kingdom', 'Germany', 'France', 'Netherlands',
  'UAE', 'Saudi Arabia', 'Singapore', 'Australia', 'Canada', 'Japan', 'Other'
];

const productCategories = [
  'White Masterbatch', 'Black Masterbatch', 'Color Masterbatch',
  'PE/PP Masterbatch', 'Engineering Polymers', 'Additive Masterbatch', 'Other'
];

export default function Contact() {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    productInterest: prefilledProduct || '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Have questions about our masterbatches or polymer compounds? We're here to help you with your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to our team for inquiries about products, pricing, shipping, 
                  or partnership opportunities.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+916287585752" className="text-muted-foreground hover:text-secondary transition-colors">
                      +91-6287585752
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:rabindrasharmarks@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
                      rabindrasharmarks@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Sarai Road Gandhi Maidan<br />
                      near Reliance Mall<br />
                      Dumka, Jharkhand 814101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/916287585752" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Quick responses guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-muted rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-secondary" />
                  <h4 className="font-semibold text-foreground">Office Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* Company Registration */}
              <div className="bg-muted rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-4">Company Details</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">CIN: </span>
                    <span className="text-foreground">U24304JH2018PTC011591</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">GSTIN: </span>
                    <span className="text-foreground">07AAGCD7615P1Z5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your inquiry has been received. Our team will get back to you within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">Request a Quote</h3>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and we'll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Country *
                          </label>
                          <Select value={formData.country} onValueChange={(value) => handleChange('country', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem key={country} value={country}>{country}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Company Name
                          </label>
                          <Input
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            placeholder="Your Company Ltd."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Product Interest *
                          </label>
                          <Select value={formData.productInterest} onValueChange={(value) => handleChange('productInterest', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select product category" />
                            </SelectTrigger>
                            <SelectContent>
                              {productCategories.map((category) => (
                                <SelectItem key={category} value={category}>{category}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Please describe your requirements, including quantities, specifications, and any specific questions..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="ocean" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16">
            <div className="rounded-2xl overflow-hidden bg-muted h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Dumka, Jharkhand, India</p>
                <p className="text-sm text-muted-foreground">Sarai Road Gandhi Maidan, near Reliance Mall</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
