import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiService } from "@/services/api";
import { Download, Search, Filter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AdminEnrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { toast } = useToast();

  useEffect(() => {
    fetchEnrollments();
  }, [currentPage]);

  const fetchEnrollments = async () => {
    try {
      setLoading(true);
      const response = await apiService.getEnrollments(currentPage, 10);
      if (response.success) {
        setEnrollments(response.data.enrollments);
        setTotalPages(Math.ceil(response.data.total / 10));
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch enrollments",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const blob = await apiService.exportEnrollments();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `enrollments-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast({
        title: "Export Successful",
        description: "Enrollments exported to CSV",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Unable to export enrollments",
        variant: "destructive",
      });
    }
  };

  const filteredEnrollments = enrollments.filter((enrollment: any) =>
    enrollment.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enrollment.skillInterest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/admin/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="font-heading font-bold text-2xl">Enrollments Management</h1>
              <p className="text-primary-foreground/80">Manage Cohort 1 applications</p>
            </div>
          </div>
          <Button onClick={handleExport} className="bg-gold hover:bg-gold-hover text-gold-foreground">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, email, or skill interest..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Enrollments List */}
        <Card>
          <CardHeader>
            <CardTitle>All Enrollments ({filteredEnrollments.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading enrollments...</div>
            ) : (
              <div className="space-y-4">
                {filteredEnrollments.map((enrollment: any) => (
                  <div key={enrollment.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-semibold">{enrollment.fullName}</h3>
                        <p className="text-sm text-muted-foreground">{enrollment.email}</p>
                        <p className="text-sm text-muted-foreground">{enrollment.phone}</p>
                      </div>
                      <div>
                        <Badge variant="secondary">{enrollment.skillInterest}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          Age: {enrollment.age} | {enrollment.gender}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{enrollment.location}</p>
                        <p className="text-sm text-muted-foreground">
                          Applied: {new Date(enrollment.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredEnrollments.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    No enrollments found matching your search criteria.
                  </div>
                )}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center space-x-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <span className="flex items-center px-4 text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminEnrollments;