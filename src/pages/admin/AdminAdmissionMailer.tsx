import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiService } from "@/services/api";
import { Upload, Filter, Mail, Eye, Send, ArrowLeft, Download, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Candidate {
  id: number;
  name: string;
  email: string;
  course: string;
}

const AdminAdmissionMailer = () => {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("all");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [ctaLink, setCtaLink] = useState("");
  const [ctaText, setCTAText] = useState("Join Now");
  const [isUploading, setIsUploading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  const courses = [
    "Web Development",
    "Mobile Development", 
    "IoT & Embedded Systems",
    "AI for Creatives",
    "Data Analysis & Science",
    "Graphic Design",
    "Photography & Video",
    "Digital Marketing",
    "Content Writing",
    "One-on-One Mentoring",
    "Character Building",
    "Life Skills",
    "Project Management",
    "Modern Office Tools"
  ];

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast({
        title: "Invalid File",
        description: "Please upload a CSV file",
        variant: "destructive",
      });
      return;
    }

    setCsvFile(file);
    setIsUploading(true);

    try {
      const response = await apiService.uploadCandidatesCsv(file);
      if (response.success) {
        setCandidates(response.data.candidates);
        setFilteredCandidates(response.data.candidates);
        toast({
          title: "CSV Uploaded Successfully",
          description: `Loaded ${response.data.candidates.length} candidates`,
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: error instanceof Error ? error.message : "Failed to process CSV file",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleCourseFilter = (course: string) => {
    setSelectedCourse(course);
    if (course === "all") {
      setFilteredCandidates(candidates);
    } else {
      setFilteredCandidates(candidates.filter(candidate => candidate.course === course));
    }
  };

  const generatePreview = () => {
    const sampleCandidate = filteredCandidates[0];
    if (!sampleCandidate) return "";

    let preview = emailMessage
      .replace(/\{Name\}/g, sampleCandidate.name)
      .replace(/\{Course\}/g, sampleCandidate.course);

    if (ctaLink && ctaText) {
      preview += `\n\n${ctaText}: ${ctaLink}`;
    }

    return preview;
  };

  const handleSendEmails = async () => {
    if (!emailSubject || !emailMessage || filteredCandidates.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please provide subject, message, and ensure candidates are loaded",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await apiService.sendAdmissionEmails({
        candidates: filteredCandidates,
        subject: emailSubject,
        message: emailMessage,
        ctaLink,
        ctaText
      });

      if (response.success) {
        toast({
          title: "Emails Sent Successfully",
          description: `Admission emails sent to ${filteredCandidates.length} candidates`,
        });
        
        // Reset form
        setEmailSubject("");
        setEmailMessage("");
        setCtaLink("");
        setCTAText("Join Now");
        setShowPreview(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        title: "Send Failed",
        description: error instanceof Error ? error.message : "Failed to send emails",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const downloadSampleCsv = () => {
    const csvContent = "Name,Email,Course\nJohn Doe,john@example.com,Web Development\nJane Smith,jane@example.com,Graphic Design";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample-candidates.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

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
              <h1 className="font-heading font-bold text-2xl">Admission Mailer</h1>
              <p className="text-primary-foreground/80">Send targeted admission emails to candidates</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Step 1: CSV Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="h-5 w-5 mr-2 text-gold" />
              Step 1: Upload Candidates CSV
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="csv-upload">Upload CSV File</Label>
                <p className="text-sm text-muted-foreground">
                  CSV should contain columns: Name, Email, Course
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={downloadSampleCsv}>
                <Download className="h-4 w-4 mr-2" />
                Download Sample
              </Button>
            </div>
            
            <Input
              id="csv-upload"
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              disabled={isUploading}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-gold-foreground hover:file:bg-gold-hover"
            />
            
            {isUploading && (
              <p className="text-sm text-muted-foreground">Processing CSV file...</p>
            )}
            
            {candidates.length > 0 && (
              <div className="bg-accent rounded-lg p-4">
                <p className="text-sm font-medium text-foreground">
                  ✅ Successfully loaded {candidates.length} candidates
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Step 2: Filter by Course */}
        {candidates.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2 text-gold" />
                Step 2: Filter by Course
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="course-filter">Select Course/Skill</Label>
                <Select onValueChange={handleCourseFilter} defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses ({candidates.length})</SelectItem>
                    {courses.map(course => {
                      const count = candidates.filter(c => c.course === course).length;
                      return count > 0 ? (
                        <SelectItem key={course} value={course}>
                          {course} ({count})
                        </SelectItem>
                      ) : null;
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-accent rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">
                    <Users className="h-4 w-4 inline mr-2" />
                    Filtered Candidates: {filteredCandidates.length}
                  </p>
                  <Badge variant="secondary">
                    {selectedCourse === "all" ? "All Courses" : selectedCourse}
                  </Badge>
                </div>
                
                {filteredCandidates.length > 0 && (
                  <div className="max-h-32 overflow-y-auto">
                    <div className="text-sm text-muted-foreground space-y-1">
                      {filteredCandidates.slice(0, 5).map(candidate => (
                        <div key={candidate.id} className="flex justify-between">
                          <span>{candidate.name}</span>
                          <span>{candidate.email}</span>
                        </div>
                      ))}
                      {filteredCandidates.length > 5 && (
                        <p className="text-center">... and {filteredCandidates.length - 5} more</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Compose Email */}
        {filteredCandidates.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold" />
                Step 3: Compose Admission Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email-subject">Email Subject *</Label>
                <Input
                  id="email-subject"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Congratulations! You've been admitted to {Course} at Ilum Stars"
                />
              </div>

              <div>
                <Label htmlFor="email-message">Email Message *</Label>
                <Textarea
                  id="email-message"
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  placeholder="Dear {Name},&#10;&#10;Congratulations! We are excited to inform you that you have been admitted to our {Course} program at Ilum Stars NGO.&#10;&#10;Your journey to illuminate your potential starts here..."
                  rows={8}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Use placeholders: {"{Name}"} for candidate name, {"{Course}"} for their selected course
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cta-text">Call-to-Action Text</Label>
                  <Input
                    id="cta-text"
                    value={ctaText}
                    onChange={(e) => setCTAText(e.target.value)}
                    placeholder="Join WhatsApp Group"
                  />
                </div>
                <div>
                  <Label htmlFor="cta-link">Call-to-Action Link</Label>
                  <Input
                    id="cta-link"
                    value={ctaLink}
                    onChange={(e) => setCtaLink(e.target.value)}
                    placeholder="https://wa.me/..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Preview & Send */}
        {emailMessage && filteredCandidates.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-gold" />
                  Step 4: Preview & Send
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? "Hide" : "Show"} Preview
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {showPreview && (
                <div className="bg-accent rounded-lg p-4">
                  <h4 className="font-medium mb-2">Email Preview:</h4>
                  <div className="bg-background rounded border p-4">
                    <p className="font-medium mb-2">Subject: {emailSubject.replace(/\{Course\}/g, filteredCandidates[0]?.course || "Course")}</p>
                    <div className="whitespace-pre-wrap text-sm">
                      {generatePreview()}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between bg-accent rounded-lg p-4">
                <div>
                  <p className="font-medium">Ready to send to {filteredCandidates.length} candidates</p>
                  <p className="text-sm text-muted-foreground">
                    Course: {selectedCourse === "all" ? "All Courses" : selectedCourse}
                  </p>
                </div>
                <Button
                  onClick={handleSendEmails}
                  disabled={isSending || !emailSubject || !emailMessage}
                  className="bg-gold hover:bg-gold-hover text-gold-foreground"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSending ? "Sending..." : "Send Emails"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default AdminAdmissionMailer;