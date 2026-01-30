-- Fix the update_updated_at_column function with proper search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

-- Seed initial site settings
INSERT INTO public.site_settings (key, value) VALUES
('general', '{"title": "GlobalExport", "tagline": "Trading Solutions", "description": "Your trusted partner for global export solutions from India", "logo_url": "", "favicon_url": ""}'),
('contact', '{"phone": "+91 123 456 7890", "email": "info@globalexport.com", "whatsapp": "+911234567890", "address": "123 Export Tower, Business District, Mumbai, Maharashtra 400001, India"}'),
('social', '{"facebook": "#", "twitter": "#", "linkedin": "#", "instagram": "#"}');

-- Seed pages
INSERT INTO public.pages (slug, title, meta_description, is_system, sort_order) VALUES
('home', 'Home', 'Reliable Global Export Solutions from India', true, 0),
('about', 'About Us', 'Learn about GlobalExport - India''s trusted export partner', true, 1),
('products', 'Products', 'Export quality products from India', true, 2),
('export-capabilities', 'Export Capabilities', 'Our global reach and export services', true, 3),
('certifications', 'Certifications & Compliance', 'Our certifications and compliance standards', true, 4),
('logistics', 'Logistics & Shipping', 'End-to-end logistics solutions', true, 5),
('documentation', 'Documentation Support', 'Complete export documentation services', true, 6),
('blog', 'Blog & Resources', 'Export insights and updates', true, 7),
('contact', 'Contact Us', 'Get in touch with our export specialists', true, 8);

-- Seed navigation
INSERT INTO public.navigation (menu_location, label, href, sort_order) VALUES
('main', 'Home', '/', 0),
('main', 'About Us', '/about', 1),
('main', 'Products', '/products', 2),
('main', 'Export Capabilities', '/export-capabilities', 3),
('main', 'Certifications', '/certifications', 4),
('main', 'Logistics', '/logistics', 5),
('main', 'Blog', '/blog', 6),
('main', 'Contact', '/contact', 7);

-- Seed page sections for home page
INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'hero',
    '{"headline": "Reliable Global Export Solutions from India", "subheadline": "Your trusted partner for premium quality products, seamless logistics, and complete export documentation. Connecting Indian excellence to global markets.", "badge": "Trusted Export Partner Since 2009", "cta_primary": "Request a Quote", "cta_secondary": "Explore Products", "background_image": ""}',
    0
FROM public.pages p WHERE p.slug = 'home';

INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'stats',
    '{"items": [{"value": "50+", "label": "Countries Served"}, {"value": "1000+", "label": "Products Exported"}, {"value": "500+", "label": "Happy Clients"}, {"value": "15+", "label": "Years Experience"}]}',
    1
FROM public.pages p WHERE p.slug = 'home';

INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'about_intro',
    '{"title": "India''s Premier Export & Trading Company", "description": "Established in 2009, GlobalExport has grown to become one of India''s most trusted export companies. We specialize in sourcing, quality control, and export of diverse product categories to over 50 countries worldwide.\n\nOur commitment to quality, compliance, and customer satisfaction has earned us long-term partnerships with businesses across North America, Europe, Middle East, and Asia-Pacific regions."}',
    2
FROM public.pages p WHERE p.slug = 'home';

INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'product_categories',
    '{"title": "Export Product Categories", "subtitle": "We source and export a wide range of quality products across multiple categories, ensuring the best of India reaches global markets.", "categories": [{"id": "agricultural", "name": "Agricultural Products", "description": "Premium grains, spices, and organic produce", "icon": "🌾", "image": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop"}, {"id": "industrial", "name": "Industrial Goods", "description": "Quality machinery parts and raw materials", "icon": "⚙️", "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"}, {"id": "textiles", "name": "Textiles & Fabrics", "description": "Traditional and modern textile solutions", "icon": "🧵", "image": "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop"}, {"id": "handicrafts", "name": "Handicrafts", "description": "Authentic Indian artisan products", "icon": "🎨", "image": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop"}, {"id": "chemicals", "name": "Chemicals & Pharmaceuticals", "description": "Certified chemical and pharma exports", "icon": "🧪", "image": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop"}, {"id": "food", "name": "Food & Beverages", "description": "Premium packaged food products", "icon": "🍚", "image": "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&h=300&fit=crop"}]}',
    3
FROM public.pages p WHERE p.slug = 'home';

INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'countries',
    '{"title": "Countries We Export To", "subtitle": "Our extensive network spans across continents, delivering Indian products to businesses in over 50 countries.", "countries": [{"name": "United States", "flag": "🇺🇸"}, {"name": "United Kingdom", "flag": "🇬🇧"}, {"name": "Germany", "flag": "🇩🇪"}, {"name": "UAE", "flag": "🇦🇪"}, {"name": "Singapore", "flag": "🇸🇬"}, {"name": "Australia", "flag": "🇦🇺"}, {"name": "Canada", "flag": "🇨🇦"}, {"name": "Japan", "flag": "🇯🇵"}, {"name": "Netherlands", "flag": "🇳🇱"}, {"name": "France", "flag": "🇫🇷"}, {"name": "Saudi Arabia", "flag": "🇸🇦"}, {"name": "South Africa", "flag": "🇿🇦"}]}',
    4
FROM public.pages p WHERE p.slug = 'home';

INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'features',
    '{"title": "Your Trusted Export Partner", "subtitle": "We combine industry expertise with commitment to excellence, ensuring every export transaction exceeds expectations.", "features": [{"icon": "Shield", "title": "Quality Assured", "description": "Rigorous quality control at every stage ensures only the best products reach our clients."}, {"icon": "Award", "title": "Certified & Compliant", "description": "All exports meet international standards with proper certifications and documentation."}, {"icon": "Clock", "title": "On-Time Delivery", "description": "Reliable logistics network guarantees timely delivery to any destination worldwide."}, {"icon": "Globe", "title": "Global Network", "description": "50+ countries served with established trade relationships and local expertise."}]}',
    5
FROM public.pages p WHERE p.slug = 'home';

INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'certifications',
    '{"title": "Our Certifications", "subtitle": "We maintain all necessary certifications and compliance standards for seamless international trade.", "certifications": [{"name": "IEC", "description": "Import Export Code"}, {"name": "ISO 9001", "description": "Quality Management"}, {"name": "APEDA", "description": "Agricultural Export"}, {"name": "FSSAI", "description": "Food Safety"}, {"name": "BIS", "description": "Bureau of Indian Standards"}, {"name": "FIEO", "description": "Federation of Export"}]}',
    6
FROM public.pages p WHERE p.slug = 'home';

INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'testimonials',
    '{"title": "What Our Clients Say", "testimonials": [{"quote": "GlobalExport has been our trusted partner for over 5 years. Their commitment to quality and timely delivery is unmatched.", "author": "James Mitchell", "role": "Procurement Director", "company": "TechCorp Industries, USA", "rating": 5}, {"quote": "The documentation support and compliance handling made our first import from India completely hassle-free.", "author": "Sarah Schmidt", "role": "Supply Chain Manager", "company": "EuroTrade GmbH, Germany", "rating": 5}, {"quote": "Exceptional product quality and professional service. They understand international trade requirements perfectly.", "author": "Ahmed Al-Rashid", "role": "CEO", "company": "Gulf Imports LLC, UAE", "rating": 5}]}',
    7
FROM public.pages p WHERE p.slug = 'home';

INSERT INTO public.page_sections (page_id, section_key, content, sort_order)
SELECT 
    p.id,
    'cta',
    '{"title": "Ready to Start Exporting?", "description": "Get in touch with our export specialists today. We''ll help you source the right products and handle all logistics and documentation.", "cta_primary": "Request a Quote", "cta_secondary": "Call Us Now"}',
    8
FROM public.pages p WHERE p.slug = 'home';