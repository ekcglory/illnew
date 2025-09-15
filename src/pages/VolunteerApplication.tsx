import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiService } from "@/services/api";
import { Heart, Users, Upload, CheckCircle, User, Mail, Phone, BookOpen, Award } from "lucide-react";

interface VolunteerForm {
  fullName: string;
  email: string;
  phone: string;
  areaOfExpertise: string;
  shortBio: string;
  cv: File | null;
  availability: string;
  experience: string;
  motivation: string;
}

const VolunteerApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const { toast } = useToast();
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<VolunteerForm>();

  const onSubmit = async (data: VolunteerForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiService.submitVolunteerApplication({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        areaOfExpertise: data.areaOfExpertise,
        shortBio: data.shortBio,
        cv: cvFile,
        availability: data.availability,
        experience: data.experience,
        motivation: data.motivation
      });
      
      if (response.success) {
        setIsSubmitted(true);
        toast({
          title: "Application Submitted Successfully!",
          description: "We'll review your application and get back to you within 48 hours.",
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please upload a CV file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setCvFile(file);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-gold" />
          </div>
          <h1 className="font-heading font-bold text-3xl mb-4 text-foreground">
            Application Submitted!
          </h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Thank you for your interest in volunteering with Ilum Stars. We've received your application 
            and will review it carefully. You'll hear from us within 48 hours.
          </p>
          <div className="bg-accent rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              <strong>Next Steps:</strong>
              <br />
              1. Application review (24-48 hours)
              <br />
              2. Interview invitation (if selected)
              <br />
              3. Volunteer onboarding and training
            </p>
          </div>
          <Button asChild className="w-full bg-primary hover:bg-primary-hover">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Volunteer <span className="text-gold">Application</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join our team of passionate facilitators and instructors. Help us illuminate young stars 
            and make a lasting impact in our community.
          </p>
          
          {/* Volunteer Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Heart className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="font-semibold">Make Impact</p>
              <p className="text-sm text-primary-foreground/80">Transform Lives</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="font-semibold">Build Community</p>
              <p className="text-sm text-primary-foreground/80">Connect & Grow</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Award className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="font-semibold">Gain Experience</p>
              <p className="text-sm text-primary-foreground/80">Develop Skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 shadow-large">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl text-foreground">
                Volunteer Application Form
              </CardTitle>
              <p className="text-muted-foreground">
                Please fill out all required fields to complete your volunteer application.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="h-5 w-5 text-gold" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      Personal Information
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        {...register("fullName", { required: "Full name is required" })}
                        placeholder="Enter your full name"
                        className={errors.fullName ? "border-destructive" : ""}
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        placeholder="+234 xxx xxx xxxx"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="your.email@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Expertise & Experience */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <BookOpen className="h-5 w-5 text-gold" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      Expertise & Experience
                    </h3>
                  </div>

                  <div>
                    <Label htmlFor="areaOfExpertise">Area of Expertise *</Label>
                    <Select onValueChange={(value) => setValue("areaOfExpertise", value)}>
                      <SelectTrigger className={errors.areaOfExpertise ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select your area of expertise" />
                      </SelectTrigger>
                      <SelectContent>
                        <optgroup label="Digital Skills">
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-development">Mobile Development</SelectItem>
                          <SelectItem value="iot-embedded">IoT & Embedded Systems</SelectItem>
                          <SelectItem value="ai-for-creatives">AI for Creatives</SelectItem>
                          <SelectItem value="data-analysis">Data Analysis & Science</SelectItem>
                        </optgroup>
                        <optgroup label="Creative Skills">
                          <SelectItem value="graphic-design">Graphic Design</SelectItem>
                          <SelectItem value="photography-video">Photography & Video</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="content-writing">Content Writing</SelectItem>
                        </optgroup>
                        <optgroup label="Leadership & Mentorship">
                          <SelectItem value="mentorship">Mentorship & Coaching</SelectItem>
                          <SelectItem value="character-building">Character Building</SelectItem>
                          <SelectItem value="life-skills">Life Skills Training</SelectItem>
                          <SelectItem value="project-management">Project Management</SelectItem>
                          <SelectItem value="career-guidance">Career Guidance</SelectItem>
                        </optgroup>
                        <optgroup label="Other">
                          <SelectItem value="business-development">Business Development</SelectItem>
                          <SelectItem value="finance-accounting">Finance & Accounting</SelectItem>
                          <SelectItem value="communications">Communications</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </optgroup>
                      </SelectContent>
                    </Select>
                    {errors.areaOfExpertise && (
                      <p className="text-destructive text-sm mt-1">Please select your area of expertise</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="experience">Relevant Experience *</Label>
                    <Textarea
                      id="experience"
                      {...register("experience", { required: "Please describe your relevant experience" })}
                      placeholder="Describe your professional experience, teaching background, or relevant skills..."
                      rows={4}
                      className={errors.experience ? "border-destructive" : ""}
                    />
                    {errors.experience && (
                      <p className="text-destructive text-sm mt-1">{errors.experience.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="shortBio">Short Bio *</Label>
                    <Textarea
                      id="shortBio"
                      {...register("shortBio", { required: "Please provide a short bio" })}
                      placeholder="Tell us about yourself, your background, and what drives your passion for youth development..."
                      rows={3}
                      className={errors.shortBio ? "border-destructive" : ""}
                    />
                    {errors.shortBio && (
                      <p className="text-destructive text-sm mt-1">{errors.shortBio.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="cv">Upload CV/Resume *</Label>
                    <div className="mt-2">
                      <Input
                        id="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-gold-foreground hover:file:bg-gold-hover"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Upload your CV in PDF, DOC, or DOCX format (max 5MB)
                      </p>
                      {cvFile && (
                        <p className="text-sm text-gold mt-1">
                          Selected: {cvFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Availability & Motivation */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="availability">Availability *</Label>
                    <Select onValueChange={(value) => setValue("availability", value)}>
                      <SelectTrigger className={errors.availability ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays (Monday - Friday)</SelectItem>
                        <SelectItem value="weekends">Weekends (Saturday - Sunday)</SelectItem>
                        <SelectItem value="flexible">Flexible (Any day)</SelectItem>
                        <SelectItem value="evenings">Evenings only</SelectItem>
                        <SelectItem value="part-time">Part-time commitment</SelectItem>
                        <SelectItem value="full-time">Full-time commitment</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.availability && (
                      <p className="text-destructive text-sm mt-1">Please select your availability</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="motivation">Why do you want to volunteer with Ilum Stars? *</Label>
                    <Textarea
                      id="motivation"
                      {...register("motivation", { required: "Please share your motivation" })}
                      placeholder="Tell us what motivates you to volunteer, your goals, and how you hope to contribute to our mission..."
                      rows={4}
                      className={errors.motivation ? "border-destructive" : ""}
                    />
                    {errors.motivation && (
                      <p className="text-destructive text-sm mt-1">{errors.motivation.message}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !cvFile}
                    className="w-full bg-gold hover:bg-gold-hover text-gold-foreground font-semibold py-3 text-lg shadow-gold"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Volunteer Application"}
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    By submitting this form, you agree to be contacted by Ilum Stars regarding your volunteer application.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl mb-4 text-foreground">
              Volunteer Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what happens after you submit your volunteer application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gold">1</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Application Review</h3>
              <p className="text-muted-foreground text-sm">
                Our team reviews your application and CV within 24-48 hours
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gold">2</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Interview</h3>
              <p className="text-muted-foreground text-sm">
                Selected candidates will be invited for a brief interview
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gold">3</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Training</h3>
              <p className="text-muted-foreground text-sm">
                Volunteer orientation and training program
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gold">4</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Start Volunteering</h3>
              <p className="text-muted-foreground text-sm">
                Begin making impact in young people's lives
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerApplication;