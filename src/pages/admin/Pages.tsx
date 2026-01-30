import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { usePages, useCreatePage, useUpdatePage, useDeletePage } from '@/hooks/useCMS';
import { Plus, Edit, Trash2, Eye, EyeOff, FileText, Loader2, ExternalLink } from 'lucide-react';

export default function AdminPages() {
  const { data: pages, isLoading } = usePages();
  const createPage = useCreatePage();
  const updatePage = useUpdatePage();
  const deletePage = useDeletePage();
  
  const [newPageOpen, setNewPageOpen] = useState(false);
  const [newPage, setNewPage] = useState({ title: '', slug: '', meta_description: '' });

  const handleCreatePage = () => {
    if (!newPage.title || !newPage.slug) return;
    
    createPage.mutate(newPage, {
      onSuccess: () => {
        setNewPageOpen(false);
        setNewPage({ title: '', slug: '', meta_description: '' });
      },
    });
  };

  const handleTogglePublish = (page: any) => {
    updatePage.mutate({ id: page.id, is_published: !page.is_published });
  };

  const handleDeletePage = (page: any) => {
    if (page.is_system) {
      alert('System pages cannot be deleted');
      return;
    }
    if (confirm('Are you sure you want to delete this page?')) {
      deletePage.mutate(page.id);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="Pages">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Pages">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Manage your website pages. Click on a page to edit its content.
          </p>
          <Dialog open={newPageOpen} onOpenChange={setNewPageOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Page
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Page</DialogTitle>
                <DialogDescription>
                  Add a new page to your website.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <label className="text-sm font-medium">Page Title</label>
                  <Input
                    value={newPage.title}
                    onChange={(e) => setNewPage({ ...newPage, title: e.target.value })}
                    placeholder="About Us"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">URL Slug</label>
                  <Input
                    value={newPage.slug}
                    onChange={(e) => setNewPage({ ...newPage, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                    placeholder="about-us"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    This will be the page URL: /about-us
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Meta Description</label>
                  <Input
                    value={newPage.meta_description}
                    onChange={(e) => setNewPage({ ...newPage, meta_description: e.target.value })}
                    placeholder="Brief description for SEO..."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewPageOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreatePage} disabled={createPage.isPending}>
                  {createPage.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Create Page'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4">
          {pages?.map((page) => (
            <Card key={page.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{page.title}</h3>
                        {page.is_system && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            System
                          </span>
                        )}
                        {!page.is_published && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                            Draft
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">/{page.slug}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 mr-4">
                      <Switch
                        checked={page.is_published}
                        onCheckedChange={() => handleTogglePublish(page)}
                      />
                      <span className="text-sm text-muted-foreground">
                        {page.is_published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                    
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/admin/pages/${page.slug}`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`/${page.slug === 'home' ? '' : page.slug}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    
                    {!page.is_system && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeletePage(page)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
