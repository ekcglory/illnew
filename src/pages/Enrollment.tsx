import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users, Star, CheckCircle, Upload, User, Mail, Phone, MapPin } from "lucide-react";

interface EnrollmentForm {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  skillInterest: string;
  location: string;
  education: string;
  experience: string;
  motivation: string;
  availability: string;
}

const Enrollment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<EnrollmentForm>();

  const watchedSkillInterest = watch("skillInterest");

  const onSubmit = async (data: EnrollmentForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Enrollment Data:", data);
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you within 48 hours.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
            Thank you for your interest in Ilum Stars. We've received your application for Cohort 1 
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
              3. Final confirmation and onboarding
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
            Enroll for <span className="text-gold">Cohort 1</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join the first generation of Ilum Stars. Limited spots available for our 
            flagship program starting September 27th, 2024.
          </p>
          
          {/* Program Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="font-semibold">Sept 27, 2024</p>
              <p className="text-sm text-primary-foreground/80">Start Date</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="font-semibold">3 Months</p>
              <p className="text-sm text-primary-foreground/80">Duration</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="font-semibold">100 Spots</p>
              <p className="text-sm text-primary-foreground/80">Available</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Star className="h-8 w-8 text-gold mx-auto mb-2" />
              <p className="font-semibold">100% Free</p>
              <p className="text-sm text-primary-foreground/80">No Cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 shadow-large">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl text-foreground">
                Application Form
              </CardTitle>
              <p className="text-muted-foreground">
                Please fill out all required fields to complete your application.
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
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="16"
                        max="35"
                        {...register("age", { 
                          required: "Age is required",
                          min: { value: 16, message: "Must be at least 16 years old" },
                          max: { value: 35, message: "Must be 35 years or younger" }
                        })}
                        placeholder="Enter your age"
                        className={errors.age ? "border-destructive" : ""}
                      />
                      {errors.age && (
                        <p className="text-destructive text-sm mt-1">{errors.age.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => setValue("gender", value)}>
                        <SelectTrigger className={errors.gender ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.gender && (
                        <p className="text-destructive text-sm mt-1">Gender is required</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        {...register("location", { required: "Location is required" })}
                        placeholder="City, State"
                        className={errors.location ? "border-destructive" : ""}
                      />
                      {errors.location && (
                        <p className="text-destructive text-sm mt-1">{errors.location.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Mail className="h-5 w-5 text-gold" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      Contact Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                {/* Program Interest */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="h-5 w-5 text-gold" />
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      Program Interest
                    </h3>
                  </div>

                  <div>
                    <Label htmlFor="skillInterest">Primary Skill Interest *</Label>
                    <Select onValueChange={(value) => setValue("skillInterest", value)}>
                      <SelectTrigger className={errors.skillInterest ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-development">Mobile Development</SelectItem>
                        <SelectItem value="iot-embedded">IoT & Embedded Systems</SelectItem>
                        <SelectItem value="graphic-design">Graphic Design</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="photography-video">Photography & Video</SelectItem>
                        <SelectItem value="general">General (Undecided)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.skillInterest && (
                      <p className="text-destructive text-sm mt-1">Please select your skill interest</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="education">Educational Background</Label>
                    <Input
                      id="education"
                      {...register("education")}
                      placeholder="e.g., Secondary School, University, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Relevant Experience (if any)</Label>
                    <Textarea
                      id="experience"
                      {...register("experience")}
                      placeholder="Describe any relevant experience in technology, design, or related fields..."
                      rows={3}
                    />
                  </div>
                </div>

                {/* Motivation & Availability */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="motivation">Why do you want to join Ilum Stars? *</Label>
                    <Textarea
                      id="motivation"
                      {...register("motivation", { required: "Please share your motivation" })}
                      placeholder="Tell us about your goals, aspirations, and how this program fits into your future plans..."
                      rows={4}
                      className={errors.motivation ? "border-destructive" : ""}
                    />
                    {errors.motivation && (
                      <p className="text-destructive text-sm mt-1">{errors.motivation.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability Confirmation *</Label>
                    <Select onValueChange={(value) => setValue("availability", value)}>
                      <SelectTrigger className={errors.availability ? "border-destructive" : ""}>
                        <SelectValue placeholder="Can you commit to the 3-month program?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-full-time">Yes, I can attend full-time</SelectItem>
                        <SelectItem value="yes-part-time">Yes, but I prefer part-time schedule</SelectItem>
                        <SelectItem value="unsure">I'm unsure about my availability</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.availability && (
                      <p className="text-destructive text-sm mt-1">Please confirm your availability</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-hover text-gold-foreground font-semibold py-3 text-lg shadow-gold"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    By submitting this form, you agree to be contacted by Ilum Stars regarding your application.
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
              Application Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what happens after you submit your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gold">1</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Application Review</h3>
              <p className="text-muted-foreground text-sm">
                Our team reviews your application within 24-48 hours
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
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">Confirmation</h3>
              <p className="text-muted-foreground text-sm">
                Final acceptance and program onboarding details
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;