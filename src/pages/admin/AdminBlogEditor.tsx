import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiService, BlogPost } from "@/services/api";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogForm {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  status: 'published' | 'draft';
  imageUrl?: string;
}

const AdminBlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();
  
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<BlogForm>({
    defaultValues: {
      status: 'draft',
      author: 'Ilum Stars Team'
    }
  });

  const isEditing = !!id;
  const watchedStatus = watch("status");

  useEffect(() => {
    if (isEditing && id) {
      fetchPost(parseInt(id));
    }
  }, [id, isEditing]);

  const fetchPost = async (postId: number) => {
    try {
      const response = await apiService.getBlogPostById(postId);
      if (response.success) {
        const post = response.data;
        setPost(post);
        setValue("title", post.title);
        setValue("content", post.content);
        setValue("excerpt", post.excerpt);
        setValue("author", post.author);
        setValue("status", post.status);
        setValue("imageUrl", post.imageUrl || "");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blog post",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (data: BlogForm) => {
    setIsSubmitting(true);
    
    try {
      const slug = data.title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      const postData = {
        ...data,
        slug,
        publishedAt: data.status === 'published' ? new Date().toISOString() : post?.publishedAt || new Date().toISOString()
      };

      let response;
      if (isEditing && id) {
        response = await apiService.updateBlogPost(parseInt(id), postData);
      } else {
        response = await apiService.createBlogPost(postData);
      }
      
      if (response.success) {
        toast({
          title: isEditing ? "Post Updated!" : "Post Created!",
          description: `Blog post has been ${data.status === 'published' ? 'published' : 'saved as draft'} successfully.`,
        });
        navigate('/admin/blog');
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        title: "Save Failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/admin/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <div>
              <h1 className="font-heading font-bold text-2xl">
                {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
              <p className="text-primary-foreground/80">
                {isEditing ? 'Update your blog post' : 'Write and publish a new blog post'}
              </p>
            </div>
          </div>
          {post && watchedStatus === 'published' && (
            <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to={`/blog/${post.slug}`} target="_blank">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Link>
            </Button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <Card className="border-2 shadow-large">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-foreground">
              Blog Post Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Post Title *</Label>
                  <Input
                    id="title"
                    {...register("title", { required: "Title is required" })}
                    placeholder="Enter post title"
                    className={errors.title ? "border-destructive" : ""}
                  />
                  {errors.title && (
                    <p className="text-destructive text-sm mt-1">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="author">Author *</Label>
                  <Input
                    id="author"
                    {...register("author", { required: "Author is required" })}
                    placeholder="Author name"
                    className={errors.author ? "border-destructive" : ""}
                  />
                  {errors.author && (
                    <p className="text-destructive text-sm mt-1">{errors.author.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="status">Status *</Label>
                  <Select onValueChange={(value: 'published' | 'draft') => setValue("status", value)} defaultValue={watchedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="imageUrl">Featured Image URL</Label>
                  <Input
                    id="imageUrl"
                    {...register("imageUrl")}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt">Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  {...register("excerpt", { required: "Excerpt is required" })}
                  placeholder="Brief description of the post (will be shown in blog listings)"
                  rows={3}
                  className={errors.excerpt ? "border-destructive" : ""}
                />
                {errors.excerpt && (
                  <p className="text-destructive text-sm mt-1">{errors.excerpt.message}</p>
                )}
              </div>

              {/* Content */}
              <div>
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  {...register("content", { required: "Content is required" })}
                  placeholder="Write your blog post content here..."
                  rows={15}
                  className={errors.content ? "border-destructive" : ""}
                />
                {errors.content && (
                  <p className="text-destructive text-sm mt-1">{errors.content.message}</p>
                )}
                <p className="text-sm text-muted-foreground mt-1">
                  You can use basic HTML tags for formatting. Line breaks will be preserved.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gold hover:bg-gold-hover text-gold-foreground font-semibold"
                  onClick={() => setValue("status", "published")}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Publishing..." : "Publish Post"}
                </Button>
                
                <Button 
                  type="submit" 
                  variant="outline"
                  disabled={isSubmitting}
                  onClick={() => setValue("status", "draft")}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Saving..." : "Save as Draft"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminBlogEditor;