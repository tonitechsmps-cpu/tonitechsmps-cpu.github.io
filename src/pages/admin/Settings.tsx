import { useState, useEffect } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSiteSettings, useUpdateSiteSettings } from '@/hooks/useCMS';
import { Save, Loader2 } from 'lucide-react';

export default function AdminSettings() {
  const { data: settings, isLoading } = useSiteSettings();
  const updateSettings = useUpdateSiteSettings();
  
  const [general, setGeneral] = useState({
    title: '',
    tagline: '',
    description: '',
    logo_url: '',
    favicon_url: '',
  });
  
  const [contact, setContact] = useState({
    phone: '',
    email: '',
    whatsapp: '',
    address: '',
  });
  
  const [social, setSocial] = useState({
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  });

  useEffect(() => {
    if (settings) {
      if (settings.general) setGeneral(settings.general);
      if (settings.contact) setContact(settings.contact);
      if (settings.social) setSocial(settings.social);
    }
  }, [settings]);

  const handleSaveGeneral = () => {
    updateSettings.mutate({ key: 'general', value: general });
  };

  const handleSaveContact = () => {
    updateSettings.mutate({ key: 'contact', value: contact });
  };

  const handleSaveSocial = () => {
    updateSettings.mutate({ key: 'social', value: social });
  };

  if (isLoading) {
    return (
      <AdminLayout title="Site Settings">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Site Settings">
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure your website's basic information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium">Site Title</label>
                  <Input
                    value={general.title}
                    onChange={(e) => setGeneral({ ...general, title: e.target.value })}
                    placeholder="GlobalExport"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Tagline</label>
                  <Input
                    value={general.tagline}
                    onChange={(e) => setGeneral({ ...general, tagline: e.target.value })}
                    placeholder="Trading Solutions"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={general.description}
                    onChange={(e) => setGeneral({ ...general, description: e.target.value })}
                    placeholder="Your website description..."
                    rows={3}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Logo URL</label>
                  <Input
                    value={general.logo_url}
                    onChange={(e) => setGeneral({ ...general, logo_url: e.target.value })}
                    placeholder="https://..."
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Upload your logo in Media Library and paste the URL here
                  </p>
                </div>
              </div>
              <Button onClick={handleSaveGeneral} disabled={updateSettings.isPending}>
                {updateSettings.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update your business contact details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    placeholder="info@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">WhatsApp Number</label>
                  <Input
                    value={contact.whatsapp}
                    onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })}
                    placeholder="+911234567890"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Business Address</label>
                <Textarea
                  value={contact.address}
                  onChange={(e) => setContact({ ...contact, address: e.target.value })}
                  placeholder="Full address..."
                  rows={3}
                />
              </div>
              <Button onClick={handleSaveContact} disabled={updateSettings.isPending}>
                {updateSettings.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>
                Add your social media profile URLs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Facebook</label>
                  <Input
                    value={social.facebook}
                    onChange={(e) => setSocial({ ...social, facebook: e.target.value })}
                    placeholder="https://facebook.com/..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Twitter / X</label>
                  <Input
                    value={social.twitter}
                    onChange={(e) => setSocial({ ...social, twitter: e.target.value })}
                    placeholder="https://twitter.com/..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">LinkedIn</label>
                  <Input
                    value={social.linkedin}
                    onChange={(e) => setSocial({ ...social, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Instagram</label>
                  <Input
                    value={social.instagram}
                    onChange={(e) => setSocial({ ...social, instagram: e.target.value })}
                    placeholder="https://instagram.com/..."
                  />
                </div>
              </div>
              <Button onClick={handleSaveSocial} disabled={updateSettings.isPending}>
                {updateSettings.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}
