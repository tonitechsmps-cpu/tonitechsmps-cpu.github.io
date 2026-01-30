import { useState, useRef } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useMedia, useUploadMedia, useDeleteMedia } from '@/hooks/useCMS';
import { Upload, Trash2, Copy, Image as ImageIcon, File, Loader2, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminMedia() {
  const { data: media, isLoading } = useMedia();
  const uploadMedia = useUploadMedia();
  const deleteMedia = useDeleteMedia();
  const { toast } = useToast();
  
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    for (let i = 0; i < files.length; i++) {
      await uploadMedia.mutateAsync(files[i]);
    }
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCopyUrl = (file: any) => {
    navigator.clipboard.writeText(file.file_path);
    setCopiedId(file.id);
    toast({ title: 'URL copied to clipboard' });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = (file: any) => {
    if (confirm('Are you sure you want to delete this file?')) {
      deleteMedia.mutate(file.id);
      setSelectedFile(null);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const isImage = (fileType: string) => fileType?.startsWith('image/');

  if (isLoading) {
    return (
      <AdminLayout title="Media Library">
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Media Library">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Upload and manage your images and files.
          </p>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileSelect}
            />
            <Button onClick={() => fileInputRef.current?.click()} disabled={uploadMedia.isPending}>
              {uploadMedia.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Upload className="h-4 w-4 mr-2" />
              )}
              Upload Files
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Files</CardTitle>
            <CardDescription>
              Click on a file to view details or copy its URL.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {media && media.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {media.map((file: any) => (
                  <div
                    key={file.id}
                    className="group relative aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                    onClick={() => setSelectedFile(file)}
                  >
                    {isImage(file.file_type) ? (
                      <img
                        src={file.file_path}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-2">
                        <File className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-xs text-muted-foreground text-center truncate w-full">
                          {file.name}
                        </p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyUrl(file);
                        }}
                      >
                        {copiedId === file.id ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(file);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No files uploaded yet.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Upload your first file
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* File Details Dialog */}
      <Dialog open={!!selectedFile} onOpenChange={(open) => !open && setSelectedFile(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>File Details</DialogTitle>
          </DialogHeader>
          {selectedFile && (
            <div className="space-y-4">
              {isImage(selectedFile.file_type) && (
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={selectedFile.file_path}
                    alt={selectedFile.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Filename</label>
                  <p className="text-foreground">{selectedFile.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">File Size</label>
                  <p className="text-foreground">{formatFileSize(selectedFile.file_size)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">URL</label>
                  <div className="flex gap-2">
                    <Input value={selectedFile.file_path} readOnly className="text-xs" />
                    <Button size="icon" variant="outline" onClick={() => handleCopyUrl(selectedFile)}>
                      {copiedId === selectedFile.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedFile(null)}>
              Close
            </Button>
            <Button variant="destructive" onClick={() => handleDelete(selectedFile)}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
