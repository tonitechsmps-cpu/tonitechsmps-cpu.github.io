-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

-- User roles table (for security - roles stored separately)
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(auth.uid(), 'admin')
$$;

-- RLS policy for user_roles (only admins can view/modify)
CREATE POLICY "Admins can view all roles" ON public.user_roles
    FOR SELECT USING (public.is_admin());

CREATE POLICY "Admins can insert roles" ON public.user_roles
    FOR INSERT WITH CHECK (public.is_admin());

CREATE POLICY "Admins can delete roles" ON public.user_roles
    FOR DELETE USING (public.is_admin());

-- Site settings table
CREATE TABLE public.site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT UNIQUE NOT NULL,
    value JSONB NOT NULL DEFAULT '{}',
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_by UUID REFERENCES auth.users(id)
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read site settings (for frontend)
CREATE POLICY "Anyone can read site settings" ON public.site_settings
    FOR SELECT USING (true);

-- Only admins can modify site settings
CREATE POLICY "Admins can update site settings" ON public.site_settings
    FOR UPDATE USING (public.is_admin());

CREATE POLICY "Admins can insert site settings" ON public.site_settings
    FOR INSERT WITH CHECK (public.is_admin());

-- Pages table
CREATE TABLE public.pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    meta_description TEXT,
    is_published BOOLEAN DEFAULT true,
    is_system BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_by UUID REFERENCES auth.users(id)
);

ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

-- Anyone can read published pages
CREATE POLICY "Anyone can read published pages" ON public.pages
    FOR SELECT USING (is_published = true OR public.is_admin());

CREATE POLICY "Admins can manage pages" ON public.pages
    FOR ALL USING (public.is_admin());

-- Page sections table (for content blocks)
CREATE TABLE public.page_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE NOT NULL,
    section_key TEXT NOT NULL,
    content JSONB NOT NULL DEFAULT '{}',
    is_visible BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.page_sections ENABLE ROW LEVEL SECURITY;

-- Anyone can read visible sections
CREATE POLICY "Anyone can read visible sections" ON public.page_sections
    FOR SELECT USING (is_visible = true OR public.is_admin());

CREATE POLICY "Admins can manage sections" ON public.page_sections
    FOR ALL USING (public.is_admin());

-- Navigation menu table
CREATE TABLE public.navigation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    menu_location TEXT NOT NULL DEFAULT 'main',
    label TEXT NOT NULL,
    href TEXT NOT NULL,
    parent_id UUID REFERENCES public.navigation(id) ON DELETE CASCADE,
    sort_order INTEGER DEFAULT 0,
    is_visible BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.navigation ENABLE ROW LEVEL SECURITY;

-- Anyone can read visible navigation
CREATE POLICY "Anyone can read visible navigation" ON public.navigation
    FOR SELECT USING (is_visible = true OR public.is_admin());

CREATE POLICY "Admins can manage navigation" ON public.navigation
    FOR ALL USING (public.is_admin());

-- Media library table
CREATE TABLE public.media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_type TEXT,
    file_size INTEGER,
    alt_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    uploaded_by UUID REFERENCES auth.users(id)
);

ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- Anyone can read media (for frontend display)
CREATE POLICY "Anyone can read media" ON public.media
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage media" ON public.media
    FOR ALL USING (public.is_admin());

-- Create storage bucket for uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-uploads', 'cms-uploads', true);

-- Storage policies
CREATE POLICY "Public can view uploads" ON storage.objects
    FOR SELECT USING (bucket_id = 'cms-uploads');

CREATE POLICY "Admins can upload" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'cms-uploads' AND public.is_admin());

CREATE POLICY "Admins can update uploads" ON storage.objects
    FOR UPDATE USING (bucket_id = 'cms-uploads' AND public.is_admin());

CREATE POLICY "Admins can delete uploads" ON storage.objects
    FOR DELETE USING (bucket_id = 'cms-uploads' AND public.is_admin());

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_site_settings_updated_at
    BEFORE UPDATE ON public.site_settings
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_pages_updated_at
    BEFORE UPDATE ON public.pages
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_page_sections_updated_at
    BEFORE UPDATE ON public.page_sections
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_navigation_updated_at
    BEFORE UPDATE ON public.navigation
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();