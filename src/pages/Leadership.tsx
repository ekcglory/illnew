import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Users, Award, Heart, Target } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Mr TRUSTGOD EWUZIEM",
      role: "Managing Director",
      description: "A visionary leader with over 15 years of experience in youth development and community empowerment. Rev. Dr. Okafor holds a Ph.D. in Educational Leadership and has dedicated his life to nurturing young talents.",
      expertise: ["Youth Development", "Educational Leadership", "Community Building"],
      image: "/api/placeholder/300/300", // Placeholder for now
      linkedin: "#",
      email: "emmanuel@ilumstars.org"
    },
    {
      name: "Mrs. PEACE KINGS",
      role: "Program Director",
      description: "With a background in Computer Science and 10+ years in tech education, Mrs. Uchenna oversees all training programs and ensures curriculum quality and industry relevance.",
      expertise: ["Tech Education", "Curriculum Development", "Industry Relations"],
      image: "/api/placeholder/300/300",
      linkedin: "#",
      email: "grace@ilumstars.org"
    },
    {
      name: "Mr. PROMISE KINGSELY",
      role: "Operations Manager",
      description: "A certified project manager with extensive experience in NGO operations and community outreach. Mr. Okwu ensures smooth day-to-day operations and strategic implementation.",
      expertise: ["Project Management", "Operations", "Community Outreach"],
      image: "/api/placeholder/300/300",
      linkedin: "#",
      email: "chidi@ilumstars.org"
    }
  ];

  const advisors = [
    {
      name: "Prof. Mary Nwosu",
      role: "Academic Advisor",
      organization: "University of Nigeria, Nsukka",
      expertise: "Educational Psychology"
    },
    {
      name: "Mr. Ikechukwu Eze",
      role: "Technology Advisor",
      organization: "Tech Industry Veteran",
      expertise: "Software Development & Innovation"
    },
    {
      name: "Dr. Patricia Obiora",
      role: "Community Relations Advisor",
      organization: "Community Development Expert",
      expertise: "Rural Development & Social Impact"
    }
  ];

  const boardMembers = [
    {
      name: "Chief Samuel Ogbuagu",
      role: "Board Chairman",
      background: "Business Leader & Philanthropist"
    },
    {
      name: "Mrs. Adaeze Nnamani",
      role: "Board Secretary",
      background: "Legal Expert & Human Rights Advocate"
    },
    {
      name: "Mr. Joseph Okoro",
      role: "Treasurer",
      background: "Financial Management & Accounting"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our <span className="text-gold">Leadership</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Meet the passionate individuals dedicated to illuminating young stars 
            and building a brighter future for our communities.
          </p>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                Compassionate Leadership
              </h3>
              <p className="text-muted-foreground">
                Leading with empathy, understanding, and a genuine heart for young people's success.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                Excellence Standard
              </h3>
              <p className="text-muted-foreground">
                Committed to the highest standards of integrity, professionalism, and service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                Vision-Driven
              </h3>
              <p className="text-muted-foreground">
                Focused on long-term impact and sustainable transformation in our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Leadership Team */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Core Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced leaders bring together diverse expertise in education, technology, 
              and community development to guide Ilum Stars' mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="border-2 hover:border-gold/30 transition-all duration-300 hover:shadow-large">
                <CardContent className="p-0">
                  {/* Placeholder for photo - would use actual photos in production */}
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-gold/5 flex items-center justify-center">
                    <Users className="h-24 w-24 text-gold/50" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-gold font-semibold mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {leader.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" asChild>
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`mailto:${leader.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Advisory Board
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Distinguished professionals who provide strategic guidance and ensure 
              our programs meet the highest standards of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center border-2 hover:border-gold/30 transition-colors">
                <CardContent className="p-6">
                  <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                    {advisor.name}
                  </h3>
                  <p className="text-gold font-medium mb-2">{advisor.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">{advisor.organization}</p>
                  <Badge variant="outline" className="text-xs">
                    {advisor.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Board of Trustees
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed community leaders who provide governance oversight 
              and ensure accountability in all our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="text-center border-2 hover:border-gold/30 transition-colors">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Leadership */}
      <section className="py-20 bg-inspiration-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
            Join Our Leadership Network
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            We're always looking for passionate, experienced professionals who share our vision 
            of empowering young people. Whether as advisors, mentors, or board members, 
            your expertise can make a lasting impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 text-gold mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Advisory Roles</h3>
              <p className="text-primary-foreground/80 text-sm">
                Provide strategic guidance and industry expertise
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <Heart className="h-8 w-8 text-gold mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Mentorship</h3>
              <p className="text-primary-foreground/80 text-sm">
                Guide and inspire the next generation of leaders
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <Award className="h-8 w-8 text-gold mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Governance</h3>
              <p className="text-primary-foreground/80 text-sm">
                Help shape organizational direction and policies
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild 
              className="bg-gold hover:bg-gold-hover text-gold-foreground font-semibold px-8 py-3 text-lg shadow-gold"
            >
              <a href="/contact">
                Express Interest
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg"
            >
              <a href="/get-involved">
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;