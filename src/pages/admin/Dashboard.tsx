import { Link } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePages, useNavigation, useMedia, useSiteSettings } from '@/hooks/useCMS';
import { FileText, Navigation, Image, Settings, ArrowRight } from 'lucide-react';

export default function AdminDashboard() {
  const { data: pages } = usePages();
  const { data: navigation } = useNavigation();
  const { data: media } = useMedia();
  const { data: settings } = useSiteSettings();

  const stats = [
    {
      title: 'Pages',
      value: pages?.length || 0,
      description: 'Total pages',
      icon: FileText,
      href: '/admin/pages',
      color: 'bg-blue-500',
    },
    {
      title: 'Menu Items',
      value: navigation?.length || 0,
      description: 'Navigation links',
      icon: Navigation,
      href: '/admin/navigation',
      color: 'bg-green-500',
    },
    {
      title: 'Media Files',
      value: media?.length || 0,
      description: 'Uploaded files',
      icon: Image,
      href: '/admin/media',
      color: 'bg-purple-500',
    },
    {
      title: 'Settings',
      value: Object.keys(settings || {}).length,
      description: 'Configuration groups',
      icon: Settings,
      href: '/admin/settings',
      color: 'bg-orange-500',
    },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        {/* Welcome */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Your CMS Dashboard</CardTitle>
            <CardDescription>
              Manage your website content, pages, navigation, and media from here.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Link key={stat.title} to={stat.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/admin/settings"
                className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Edit Site Title</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
              <Link
                to="/admin/pages"
                className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Manage Pages</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
              <Link
                to="/admin/media"
                className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Image className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Upload Images</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
