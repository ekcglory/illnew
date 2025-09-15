import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Heart, ArrowRight, Calendar } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-primary-foreground py-20 lg:py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Illuminating Stars,<br />
              <span className="text-gold">Empowering Futures</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              We believe every young person is a star waiting to shine. Join us in empowering the next generation through mentorship, digital skills training, and life-changing opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild 
                className="bg-gold hover:bg-gold-hover text-gold-foreground font-semibold px-8 py-3 text-lg shadow-gold"
              >
                <Link to="/enrollment">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg"
              >
                <Link to="/get-involved">Partner With Us</Link>
              </Button>
            </div>
            
            {/* Cohort 1 Announcement */}
            <div className="mt-12 bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gold mb-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Cohort 1 Starting</span>
              </div>
              <p className="text-primary-foreground/90 font-medium">Starting 2025</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Limited spots available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ilum Stars is a Christian-inspired NGO dedicated to illuminating young talents in Orlu and beyond. 
              We provide mentorship, digital skills training, and empowerment opportunities that transform lives 
              and build sustainable futures for the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Expected Enrollments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Skill Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Month Duration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Free Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Our Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training programs designed to equip young minds with the skills they need to thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="group animate-scale-hover animate-fade-in-up border-2 hover:border-gold/30" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-6">
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors animate-pulse-glow">
                  <Star className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Digital Skills</h3>
                <p className="text-muted-foreground mb-4">
                  Software Development, Robotics, and Embedded Systems training to prepare students for the tech industry.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Web Development</li>
                  <li>• Mobile App Development</li>
                  <li>• IoT & Embedded Systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group animate-scale-hover animate-fade-in-up border-2 hover:border-gold/30" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6">
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Creative Skills</h3>
                <p className="text-muted-foreground mb-4">
                  Design, Digital Marketing, and Content Creation to unleash creative potential and build modern skills.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Graphic Design</li>
                  <li>• Digital Marketing</li>
                  <li>• Content Creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group animate-scale-hover animate-fade-in-up border-2 hover:border-gold/30" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-6">
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">Mentorship</h3>
                <p className="text-muted-foreground mb-4">
                  Personal development, moral guidance, and career mentorship to build character and purpose.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• One-on-One Mentoring</li>
                  <li>• Character Development</li>
                  <li>• Career Guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover">
              <Link to="/programs">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-inspiration-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
            Ready to Illuminate Your Future?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join Cohort 1 and be part of the first generation of Ilum Stars. Limited spots available for our flagship program starting in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild 
              className="bg-gold hover:bg-gold-hover text-gold-foreground font-semibold px-8 py-3 text-lg shadow-gold"
            >
              <Link to="/enrollment">
                Enroll for Cohort 1
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;