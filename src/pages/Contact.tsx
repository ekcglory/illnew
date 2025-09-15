import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Contact Form Data:", data);
      
      setIsSubmitted(true);
      reset();
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Have questions about our programs? Want to get involved? 
            We'd love to hear from you and help you on your journey.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-8 text-foreground">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're here to answer your questions, provide guidance, and help you 
                understand how you can be part of the Ilum Stars community.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@ilumstars.org</p>
                    <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">WhatsApp</h3>
                    <a 
                      href="https://wa.me/2348123456789" 
                      className="text-gold hover:text-gold-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +234 812 345 6789
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Quick responses during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">Location</h3>
                    <p className="text-muted-foreground">Orlu, Imo State, Nigeria</p>
                    <p className="text-sm text-muted-foreground mt-1">Training center address will be shared with enrolled students</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1 text-foreground">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">West Africa Time (WAT)</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 p-6 bg-accent rounded-lg">
                <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href="/enrollment">Apply for Cohort 1</a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="/get-involved">Volunteer/Partner</a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="/programs">View Programs</a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="/about">Learn About Us</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 shadow-large">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-foreground flex items-center">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-6 w-6 text-gold mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-6 w-6 text-gold mr-2" />
                        Send us a Message
                      </>
                    )}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {isSubmitted 
                      ? "Thank you for reaching out. We'll get back to you soon!"
                      : "Fill out the form below and we'll get back to you as soon as possible."
                    }
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your full name"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                        )}
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

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="What is this about?"
                        className={errors.subject ? "border-destructive" : ""}
                      />
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register("message", { required: "Message is required" })}
                        placeholder="Tell us more about your inquiry, questions, or how we can help you..."
                        rows={5}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-gold hover:bg-gold-hover text-gold-foreground font-semibold py-3 text-lg shadow-gold"
                    >
                      {isSubmitting ? "Sending Message..." : isSubmitted ? "Message Sent!" : "Send Message"}
                      {!isSubmitting && !isSubmitted && <Send className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our programs and organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                  Who can apply for the programs?
                </h3>
                <p className="text-muted-foreground">
                  Young people aged 16-35 who are passionate about learning and committed to personal growth. 
                  No prior experience is required - just enthusiasm and dedication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                  Is the training really free?
                </h3>
                <p className="text-muted-foreground">
                  Yes! All our core programs are completely free for accepted participants. 
                  We believe financial barriers shouldn't prevent anyone from accessing quality education.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                  What happens after completing the program?
                </h3>
                <p className="text-muted-foreground">
                  We provide job placement assistance, help with portfolio development, and connect graduates 
                  with our partner organizations and freelance opportunities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                  Can I volunteer if I'm not in Orlu?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We welcome remote volunteers and mentors. Many of our programs include 
                  virtual components, and we can work with your schedule and location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-inspiration-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Don't wait - Cohort 1 enrollment is open now. Join us in building a brighter future for young people in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild 
              className="bg-gold hover:bg-gold-hover text-gold-foreground font-semibold px-8 py-3 text-lg shadow-gold"
            >
              <a href="/enrollment">
                Enroll for Cohort 1
              </a>
            </Button>
            <Button 
              size="lg" 
              asChild 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg"
            >
              <a href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;