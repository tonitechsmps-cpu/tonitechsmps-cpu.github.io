import { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useNavigation, useCreateNavItem, useUpdateNavItem, useDeleteNavItem } from '@/hooks/useCMS';
import { Plus, Edit, Trash2, GripVertical, Loader2, Menu } from 'lucide-react';

export default function AdminNavigation() {
  const { data: navItems, isLoading } = useNavigation();
  const createNavItem = useCreateNavItem();
  const updateNavItem = useUpdateNavItem();
  const deleteNavItem = useDeleteNavItem();
  
  const [newItemOpen, setNewItemOpen] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [formData, setFormData] = useState({ label: '', href: '' });

  const handleCreate = () => {
    if (!formData.label || !formData.href) return;
    
    const maxOrder = Math.max(...(navItems?.map((i: any) => i.sort_order) || [0]), 0);
    
    createNavItem.mutate(
      { ...formData, sort_order: maxOrder + 1 },
      {
        onSuccess: () => {
          setNewItemOpen(false);
          setFormData({ label: '', href: '' });
        },
      }
    );
  };

  const handleUpdate = () => {
    if (!editItem || !formData.label || !formData.href) return;
    
    updateNavItem.mutate(
      { id: editItem.id, label: formData.label, href: formData.href },
      {
        onSuccess: () => {
          setEditItem(null);
          setFormData({ label: '', href: '' });
        },
      }
    );
  };

  const handleToggleVisibility = (item: any) => {
    updateNavItem.mutate({ id: item.id, is_visible: !item.is_visible });
  };

  const handleDelete = (item: any) => {
    if (confirm('Are you sure you want to delete this menu item?')) {
      deleteNavItem.mutate(item.id);
    }
  };

  const openEditDialog = (item: any) => {
    setEditItem(item);
    setFormData({ label: item.label, href: item.href });
  };

  if (isLoading) {
    return (
      <AdminLayout title="Navigation">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Navigation">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Manage your website's navigation menu.
          </p>
          <Dialog open={newItemOpen} onOpenChange={setNewItemOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Menu Item
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Menu Item</DialogTitle>
                <DialogDescription>
                  Add a new item to your navigation menu.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <label className="text-sm font-medium">Label</label>
                  <Input
                    value={formData.label}
                    onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                    placeholder="About Us"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Link URL</label>
                  <Input
                    value={formData.href}
                    onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                    placeholder="/about"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewItemOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreate} disabled={createNavItem.isPending}>
                  {createNavItem.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Add Item'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Main Menu</CardTitle>
            <CardDescription>
              These items appear in your website's main navigation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {navItems?.filter((item: any) => item.menu_location === 'main').map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted"
                >
                  <div className="flex items-center gap-3">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                    <Menu className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.href}</p>
                    </div>
                    {!item.is_visible && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                        Hidden
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={item.is_visible}
                      onCheckedChange={() => handleToggleVisibility(item)}
                    />
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(item)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              {(!navItems || navItems.filter((i: any) => i.menu_location === 'main').length === 0) && (
                <p className="text-center text-muted-foreground py-8">
                  No menu items yet. Add your first one!
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Edit Dialog */}
      <Dialog open={!!editItem} onOpenChange={(open) => !open && setEditItem(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Menu Item</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium">Label</label>
              <Input
                value={formData.label}
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Link URL</label>
              <Input
                value={formData.href}
                onChange={(e) => setFormData({ ...formData, href: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditItem(null)}>
              Cancel
            </Button>
            <Button onClick={handleUpdate} disabled={updateNavItem.isPending}>
              {updateNavItem.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
