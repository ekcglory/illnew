import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Users, Handshake, DollarSign, ArrowRight, CheckCircle, Gift, Building, UserCheck } from "lucide-react";

const GetInvolved = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const volunteerOpportunities = [
    {
      title: "Mentorship",
      description: "Guide and inspire young minds through their learning journey",
      requirements: ["Professional experience in tech/creative fields", "Passion for youth development", "2-3 hours per week commitment"],
      icon: UserCheck
    },
    {
      title: "Technical Training",
      description: "Lead training sessions in your area of expertise",
      requirements: ["Expert-level skills in relevant technologies", "Teaching or training experience", "Weekend availability"],
      icon: Users
    },
    {
      title: "Career Guidance",
      description: "Help students prepare for job interviews and career planning",
      requirements: ["HR or recruitment experience", "Industry knowledge", "Flexible schedule"],
      icon: Building
    }
  ];

  const partnershipLevels = [
    {
      level: "Community Partner",
      investment: "In-kind support",
      benefits: [
        "Co-branding opportunities",
        "Access to trained talent pool",
        "Community impact recognition",
        "Newsletter mentions"
      ]
    },
    {
      level: "Program Partner",
      investment: "₦500,000 - ₦2,000,000",
      benefits: [
        "Program naming rights",
        "Logo placement on materials",
        "Direct access to graduates",
        "Quarterly impact reports",
        "Advisory board seat"
      ]
    },
    {
      level: "Founding Partner",
      investment: "₦2,000,000+",
      benefits: [
        "Major co-branding opportunities",
        "First access to top graduates",
        "Custom training programs",
        "Board representation",
        "Annual recognition events"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Get <span className="text-gold">Involved</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join us in illuminating young stars and empowering the next generation. 
            Together, we can create lasting change in our communities.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <Card className="text-center border-2 hover:border-gold/30 transition-all duration-300 hover:shadow-large">
              <CardHeader>
                <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-gold" />
                </div>
                <CardTitle className="font-heading text-2xl">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Share your expertise and passion by mentoring, training, or supporting our programs.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                  <a href="#volunteer">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            {/* Partner */}
            <Card className="text-center border-2 hover:border-gold/30 transition-all duration-300 hover:shadow-large">
              <CardHeader>
                <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-10 w-10 text-gold" />
                </div>
                <CardTitle className="font-heading text-2xl">Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Collaborate with us as an organization to amplify our impact and reach more young people.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                  <a href="#partner">Partner With Us</a>
                </Button>
              </CardContent>
            </Card>

            {/* Donate */}
            <Card className="text-center border-2 hover:border-gold/30 transition-all duration-300 hover:shadow-large">
              <CardHeader>
                <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-10 w-10 text-gold" />
                </div>
                <CardTitle className="font-heading text-2xl">Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Support our mission with financial contributions to help us reach more young stars.
                </p>
                <Dialog open={isDonateModalOpen} onOpenChange={setIsDonateModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gold hover:bg-gold-hover text-gold-foreground">
                      Donate Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl text-center">
                        Support Ilum Stars
                      </DialogTitle>
                    </DialogHeader>
                    <div className="text-center py-6">
                      <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="h-8 w-8 text-gold" />
                      </div>
                      <p className="text-muted-foreground mb-6">
                        Our payment gateway integration is coming soon! In the meantime, 
                        you can support us through direct bank transfer or contact us for other donation methods.
                      </p>
                      <div className="bg-accent rounded-lg p-4 mb-6">
                        <p className="text-sm text-muted-foreground">
                          <strong>Contact us for donations:</strong><br />
                          Email: hello@ilumstars.org<br />
                          WhatsApp: +234 812 345 6789
                        </p>
                      </div>
                      <Button onClick={() => setIsDonateModalOpen(false)} className="w-full">
                        Contact Us
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use your skills and experience to make a direct impact on young lives. 
              Every contribution matters in shaping the future of our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="border-2 hover:border-gold/30 transition-colors">
                <CardHeader>
                  <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <opportunity.icon className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="font-heading text-xl">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle className="h-4 w-4 text-gold mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover px-8">
              Apply to Volunteer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partner" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us as a partner organization and help us scale our impact. 
              Together, we can reach more communities and transform more lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {partnershipLevels.map((level, index) => (
              <Card key={index} className={`border-2 transition-all duration-300 ${
                index === 1 ? 'border-gold/50 shadow-large scale-105' : 'hover:border-gold/30'
              }`}>
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-xl">{level.level}</CardTitle>
                  <p className="text-lg font-semibold text-gold">{level.investment}</p>
                  {index === 1 && (
                    <span className="bg-gold text-gold-foreground text-xs px-2 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gold hover:bg-gold-hover text-gold-foreground px-8">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-inspiration-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
            Your Impact Matters
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Every volunteer hour, every partnership, and every donation directly translates 
            into opportunities for young people to discover their potential and build sustainable futures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">1:10</div>
              <div className="text-primary-foreground/80">Mentor to Student Ratio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-primary-foreground/80">Free Training for All</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Community Support</div>
            </div>
          </div>

          <div className="mt-12">
            <Button 
              size="lg" 
              asChild 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg"
            >
              <a href="/contact">
                Start Your Journey With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;