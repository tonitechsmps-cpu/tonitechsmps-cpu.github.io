import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Site Settings
export function useSiteSettings() {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');
      
      if (error) throw error;
      
      // Convert array to object keyed by 'key'
      const settings: Record<string, any> = {};
      data?.forEach(item => {
        settings[item.key] = item.value;
      });
      return settings;
    },
  });
}

export function useUpdateSiteSettings() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async ({ key, value }: { key: string; value: any }) => {
      const { error } = await supabase
        .from('site_settings')
        .update({ value })
        .eq('key', key);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['site-settings'] });
      toast({ title: 'Settings saved successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error saving settings', description: error.message, variant: 'destructive' });
    },
  });
}

// Pages
export function usePages() {
  return useQuery({
    queryKey: ['cms-pages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
  });
}

export function usePage(slug: string) {
  return useQuery({
    queryKey: ['cms-page', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
}

export function useCreatePage() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (page: { slug: string; title: string; meta_description?: string }) => {
      const { data, error } = await supabase
        .from('pages')
        .insert(page)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-pages'] });
      toast({ title: 'Page created successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error creating page', description: error.message, variant: 'destructive' });
    },
  });
}

export function useUpdatePage() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: { id: string; [key: string]: any }) => {
      const { error } = await supabase
        .from('pages')
        .update(updates)
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-pages'] });
      toast({ title: 'Page updated successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error updating page', description: error.message, variant: 'destructive' });
    },
  });
}

export function useDeletePage() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('pages')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-pages'] });
      toast({ title: 'Page deleted successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error deleting page', description: error.message, variant: 'destructive' });
    },
  });
}

// Page Sections
export function usePageSections(pageId?: string) {
  return useQuery({
    queryKey: ['cms-sections', pageId],
    queryFn: async () => {
      let query = supabase
        .from('page_sections')
        .select('*, pages(slug, title)')
        .order('sort_order');
      
      if (pageId) {
        query = query.eq('page_id', pageId);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
}

export function useUpdateSection() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: { id: string; content?: any; is_visible?: boolean }) => {
      const { error } = await supabase
        .from('page_sections')
        .update(updates)
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-sections'] });
      toast({ title: 'Section updated successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error updating section', description: error.message, variant: 'destructive' });
    },
  });
}

// Navigation
export function useNavigation() {
  return useQuery({
    queryKey: ['cms-navigation'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('navigation')
        .select('*')
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
  });
}

export function useCreateNavItem() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (item: { label: string; href: string; menu_location?: string; sort_order?: number }) => {
      const { data, error } = await supabase
        .from('navigation')
        .insert(item)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-navigation'] });
      toast({ title: 'Menu item added' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error adding menu item', description: error.message, variant: 'destructive' });
    },
  });
}

export function useUpdateNavItem() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: { id: string; [key: string]: any }) => {
      const { error } = await supabase
        .from('navigation')
        .update(updates)
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-navigation'] });
      toast({ title: 'Menu item updated' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error updating menu item', description: error.message, variant: 'destructive' });
    },
  });
}

export function useDeleteNavItem() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('navigation')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-navigation'] });
      toast({ title: 'Menu item deleted' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error deleting menu item', description: error.message, variant: 'destructive' });
    },
  });
}

// Media
export function useMedia() {
  return useQuery({
    queryKey: ['cms-media'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('media')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
}

export function useUploadMedia() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (file: File) => {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;
      
      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('cms-uploads')
        .upload(filePath, file);
      
      if (uploadError) throw uploadError;
      
      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('cms-uploads')
        .getPublicUrl(filePath);
      
      // Insert into media table
      const { data, error } = await supabase
        .from('media')
        .insert({
          name: file.name,
          file_path: publicUrl,
          file_type: file.type,
          file_size: file.size,
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-media'] });
      toast({ title: 'File uploaded successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error uploading file', description: error.message, variant: 'destructive' });
    },
  });
}

export function useDeleteMedia() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('media')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-media'] });
      toast({ title: 'File deleted' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error deleting file', description: error.message, variant: 'destructive' });
    },
  });
}
