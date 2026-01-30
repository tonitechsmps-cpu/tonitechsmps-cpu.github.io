import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { usePage, usePageSections, useUpdatePage, useUpdateSection } from '@/hooks/useCMS';
import { ArrowLeft, Save, Loader2, Eye, EyeOff } from 'lucide-react';

export default function PageEditor() {
  const { slug } = useParams();
  const { data: page, isLoading: pageLoading } = usePage(slug || '');
  const { data: sections, isLoading: sectionsLoading } = usePageSections(page?.id);
  const updatePage = useUpdatePage();
  const updateSection = useUpdateSection();
  
  const [pageData, setPageData] = useState({
    title: '',
    meta_description: '',
    is_published: true,
  });
  
  const [sectionContents, setSectionContents] = useState<Record<string, any>>({});

  useEffect(() => {
    if (page) {
      setPageData({
        title: page.title,
        meta_description: page.meta_description || '',
        is_published: page.is_published,
      });
    }
  }, [page]);

  useEffect(() => {
    if (sections) {
      const contents: Record<string, any> = {};
      sections.forEach((section: any) => {
        contents[section.id] = section.content;
      });
      setSectionContents(contents);
    }
  }, [sections]);

  const handleSavePage = () => {
    if (!page) return;
    updatePage.mutate({ id: page.id, ...pageData });
  };

  const handleSaveSection = (sectionId: string) => {
    updateSection.mutate({
      id: sectionId,
      content: sectionContents[sectionId],
    });
  };

  const handleToggleSectionVisibility = (section: any) => {
    updateSection.mutate({
      id: section.id,
      is_visible: !section.is_visible,
    });
  };

  const updateSectionContent = (sectionId: string, key: string, value: any) => {
    setSectionContents(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [key]: value,
      },
    }));
  };

  const renderFieldInput = (sectionId: string, key: string, value: any, depth = 0) => {
    if (typeof value === 'string') {
      if (value.length > 100 || key === 'description' || key === 'subheadline') {
        return (
          <div key={key} className="space-y-1">
            <label className="text-sm font-medium capitalize">{key.replace(/_/g, ' ')}</label>
            <Textarea
              value={value}
              onChange={(e) => updateSectionContent(sectionId, key, e.target.value)}
              rows={3}
            />
          </div>
        );
      }
      return (
        <div key={key} className="space-y-1">
          <label className="text-sm font-medium capitalize">{key.replace(/_/g, ' ')}</label>
          <Input
            value={value}
            onChange={(e) => updateSectionContent(sectionId, key, e.target.value)}
          />
        </div>
      );
    }
    
    if (Array.isArray(value)) {
      return (
        <div key={key} className="space-y-2">
          <label className="text-sm font-medium capitalize">{key.replace(/_/g, ' ')}</label>
          <div className="space-y-2 pl-4 border-l-2 border-border">
            {value.map((item, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-3 space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Item {index + 1}</p>
                {typeof item === 'object' && Object.entries(item).map(([itemKey, itemValue]) => (
                  <div key={itemKey} className="space-y-1">
                    <label className="text-xs font-medium capitalize">{itemKey.replace(/_/g, ' ')}</label>
                    <Input
                      value={String(itemValue)}
                      onChange={(e) => {
                        const newArray = [...value];
                        newArray[index] = { ...item, [itemKey]: e.target.value };
                        setSectionContents(prev => ({
                          ...prev,
                          [sectionId]: {
                            ...prev[sectionId],
                            [key]: newArray,
                          },
                        }));
                      }}
                      className="text-sm"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return null;
  };

  if (pageLoading || sectionsLoading) {
    return (
      <AdminLayout title="Edit Page">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </AdminLayout>
    );
  }

  if (!page) {
    return (
      <AdminLayout title="Page Not Found">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">Page not found.</p>
            <Button variant="outline" asChild className="mt-4">
              <Link to="/admin/pages">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Pages
              </Link>
            </Button>
          </CardContent>
        </Card>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={`Edit: ${page.title}`}>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin/pages">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>

        {/* Page Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Page Settings</CardTitle>
            <CardDescription>
              Configure basic page information and SEO settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Page Title</label>
                <Input
                  value={pageData.title}
                  onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium">URL Slug</label>
                <Input value={`/${page.slug}`} disabled className="bg-muted" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Meta Description (SEO)</label>
              <Textarea
                value={pageData.meta_description}
                onChange={(e) => setPageData({ ...pageData, meta_description: e.target.value })}
                rows={2}
              />
            </div>
            <div className="flex items-center gap-4">
              <Switch
                checked={pageData.is_published}
                onCheckedChange={(checked) => setPageData({ ...pageData, is_published: checked })}
              />
              <span className="text-sm">
                {pageData.is_published ? 'Published' : 'Draft'}
              </span>
            </div>
            <Button onClick={handleSavePage} disabled={updatePage.isPending}>
              {updatePage.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              Save Page Settings
            </Button>
          </CardContent>
        </Card>

        {/* Page Sections */}
        {sections && sections.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Page Content Sections</CardTitle>
              <CardDescription>
                Edit the content of each section on this page.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {sections.map((section: any) => (
                  <AccordionItem key={section.id} value={section.id}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <span className="font-medium capitalize">
                          {section.section_key.replace(/_/g, ' ')}
                        </span>
                        {!section.is_visible && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                            Hidden
                          </span>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-4 pb-4 border-b">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleToggleSectionVisibility(section)}
                          >
                            {section.is_visible ? (
                              <>
                                <EyeOff className="h-4 w-4 mr-2" />
                                Hide Section
                              </>
                            ) : (
                              <>
                                <Eye className="h-4 w-4 mr-2" />
                                Show Section
                              </>
                            )}
                          </Button>
                        </div>
                        
                        <div className="space-y-4">
                          {sectionContents[section.id] &&
                            Object.entries(sectionContents[section.id]).map(([key, value]) =>
                              renderFieldInput(section.id, key, value)
                            )}
                        </div>
                        
                        <Button
                          onClick={() => handleSaveSection(section.id)}
                          disabled={updateSection.isPending}
                        >
                          {updateSection.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          ) : (
                            <Save className="h-4 w-4 mr-2" />
                          )}
                          Save Section
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
