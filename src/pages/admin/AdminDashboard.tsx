import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Download, Plus, Eye } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalEnrollments: 0,
    totalBlogPosts: 0,
    recentEnrollments: [],
    recentPosts: []
  });

  useEffect(() => {
    // Fetch dashboard stats
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    // Mock data for now - replace with actual API calls
    setStats({
      totalEnrollments: 42,
      totalBlogPosts: 8,
      recentEnrollments: [
        { id: 1, name: "John Doe", email: "john@example.com", skillInterest: "Web Development", createdAt: "2024-12-01" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", skillInterest: "Graphic Design", createdAt: "2024-12-02" },
      ],
      recentPosts: [
        { id: 1, title: "Welcome to Ilum Stars", status: "published", createdAt: "2024-12-01" },
        { id: 2, title: "Our First Cohort Journey", status: "draft", createdAt: "2024-12-02" },
      ]
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-bold text-2xl">Admin Dashboard</h1>
          <p className="text-primary-foreground/80">Manage your NGO operations</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalEnrollments}</div>
              <p className="text-xs text-muted-foreground">Cohort 1 applications</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBlogPosts}</div>
              <p className="text-xs text-muted-foreground">Published content</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button asChild size="sm" className="w-full">
                <Link to="/admin/enrollments">
                  <Eye className="h-4 w-4 mr-2" />
                  View Enrollments
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link to="/admin/blog/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Blog Post
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Enrollments */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Enrollments</CardTitle>
              <Button asChild size="sm" variant="outline">
                <Link to="/admin/enrollments">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentEnrollments.map((enrollment: any) => (
                  <div key={enrollment.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{enrollment.name}</p>
                      <p className="text-sm text-muted-foreground">{enrollment.email}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {enrollment.skillInterest}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {enrollment.createdAt}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Blog Posts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Blog Posts</CardTitle>
              <Button asChild size="sm" variant="outline">
                <Link to="/admin/blog">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentPosts.map((post: any) => (
                  <div key={post.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.createdAt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;