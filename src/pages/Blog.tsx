import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiService, BlogPost } from "@/services/api";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await apiService.getBlogPosts(1, 20);
      if (response.success) {
        // Filter only published posts for public view
        const publishedPosts = response.data.posts.filter(post => post.status === 'published');
        setPosts(publishedPosts);
      }
    } catch (error) {
      console.error("Failed to fetch blog posts:", error);
      // Show some demo posts if API is not available
      setPosts([
        {
          id: 1,
          title: "Welcome to Ilum Stars NGO",
          content: "We are excited to announce the launch of Ilum Stars NGO...",
          excerpt: "We are excited to announce the launch of Ilum Stars NGO, a Christian-inspired organization dedicated to illuminating young talents in Orlu and beyond.",
          author: "Ilum Stars Team",
          publishedAt: "2024-12-01",
          slug: "welcome-to-ilum-stars",
          status: "published" as const,
          imageUrl: "/placeholder.svg"
        },
        {
          id: 2,
          title: "Our First Cohort: A Journey of Transformation",
          content: "As we prepare for our first cohort starting in 2025...",
          excerpt: "Learn about our comprehensive training programs and how they will transform the lives of young people in our community.",
          author: "Leadership Team",
          publishedAt: "2024-12-05",
          slug: "first-cohort-journey",
          status: "published" as const,
          imageUrl: "/placeholder.svg"
        },
        {
          id: 3,
          title: "The Power of Mentorship in Youth Development",
          content: "Mentorship plays a crucial role in shaping young minds...",
          excerpt: "Discover how our mentorship program combines technical training with character development and spiritual guidance.",
          author: "Mentorship Team",
          publishedAt: "2024-12-10",
          slug: "power-of-mentorship",
          status: "published" as const,
          imageUrl: "/placeholder.svg"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our <span className="text-gold">Blog</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Stories of transformation, insights from our programs, and updates from the Ilum Stars community.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="text-lg">Loading blog posts...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-large transition-all duration-300 border-2 hover:border-gold/30">
                  <div className="aspect-video bg-accent rounded-t-lg overflow-hidden">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gold/10 flex items-center justify-center">
                        <div className="text-gold text-4xl">📝</div>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button asChild variant="outline" className="group-hover:bg-gold group-hover:text-gold-foreground group-hover:border-gold">
                      <Link to={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="text-lg text-muted-foreground">
                No blog posts found matching your search criteria.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter to get the latest updates about our programs, success stories, and upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" />
            <Button className="bg-gold hover:bg-gold-hover text-gold-foreground">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;