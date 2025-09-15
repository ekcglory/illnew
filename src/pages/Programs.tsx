import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Code, 
  Palette, 
  Heart, 
  Monitor, 
  Smartphone, 
  Cpu, 
  PenTool, 
  Camera, 
  Megaphone,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Calendar,
  Clock
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: "digital-skills",
      title: "Digital Skills Training",
      icon: Code,
      description: "Comprehensive training in modern technology and software development",
      duration: "3 months",
      level: "Beginner to Intermediate",
      skills: [
        { name: "Web Development", icon: Monitor, description: "HTML, CSS, JavaScript, React, Node.js" },
        { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, iOS/Android" },
        { name: "IoT & Embedded Systems", icon: Cpu, description: "Arduino, Raspberry Pi, IoT protocols" },
        { name: "AI for Creatives", icon: Code, description: "AI tools, prompt engineering, automation" },
        { name: "Data Analysis & Science", icon: Code, description: "Python, SQL, data visualization" }
      ],
      outcomes: [
        "Build real-world projects",
        "Industry-ready portfolio",
        "Certification of completion",
        "Job placement assistance"
      ]
    },
    {
      id: "creative-skills",
      title: "Creative Skills Development",
      icon: Palette,
      description: "Unleash your creative potential with modern design and marketing skills",
      duration: "3 months",
      level: "Beginner to Advanced",
      skills: [
        { name: "Graphic Design", icon: PenTool, description: "Photoshop, Illustrator, Figma, Canva" },
        { name: "Photography & Video", icon: Camera, description: "Digital photography, video editing, storytelling" },
        { name: "Digital Marketing", icon: Megaphone, description: "Social media, content strategy, SEO, analytics" },
        { name: "Content Writing", icon: PenTool, description: "Copywriting, blogging, technical writing" }
      ],
      outcomes: [
        "Professional portfolio",
        "Client project experience",
        "Brand identity creation",
        "Freelancing opportunities"
      ]
    },
    {
      id: "mentorship",
      title: "Leadership & Capacity Building",
      icon: Heart,
      description: "Leadership development, capacity building, and close mentorship guidance",
      duration: "Ongoing",
      level: "All Levels",
      skills: [
        { name: "One-on-One Mentoring", icon: Users, description: "Personal guidance and career counseling" },
        { name: "Character Building", icon: BookOpen, description: "Values, integrity, and ethical leadership" },
        { name: "Life Skills", icon: Award, description: "Communication, problem-solving, teamwork" },
        { name: "Project Management", icon: Award, description: "Agile, Scrum, team leadership (Youth & Adults)" },
        { name: "Modern Office Tools", icon: Monitor, description: "MS Office, Google Workspace, productivity tools (Youth & Adults)" }
      ],
      outcomes: [
        "Strong moral foundation",
        "Leadership capabilities",
        "Professional networking",
        "Life purpose clarity"
      ]
    }
  ];

  const upcomingPrograms = [
    {
      title: "Scholarship Portal",
      description: "Educational funding opportunities for outstanding graduates",
      status: "Coming Soon",
      estimated: "Q1 2025"
    },
    {
      title: "Startup Funding & Empowerment",
      description: "Support for young entrepreneurs to launch their businesses",
      status: "Coming Soon",
      estimated: "Q2 2025"
    },
    {
      title: "E-Learning Platform",
      description: "Online courses and digital learning resources",
      status: "In Development",
      estimated: "Q3 2025"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our <span className="text-gold">Programs</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Comprehensive training programs designed to equip young minds with the skills, 
            values, and opportunities they need to thrive in the digital age.
          </p>
          
          {/* Cohort 1 Info */}
          <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-lg p-6 max-w-lg mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gold mb-2">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Cohort 1 Enrollment Open</span>
            </div>
            <p className="text-primary-foreground/90 font-medium">Starting 2025</p>
            <p className="text-primary-foreground/70 text-sm mt-1">Limited spots - Apply now!</p>
            <Button asChild className="mt-4 bg-gold hover:bg-gold-hover text-gold-foreground">
              <Link to="/enrollment">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-12`}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <program.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-3xl text-foreground">{program.title}</h2>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{program.duration}</span>
                        </Badge>
                        <Badge variant="outline">{program.level}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Key Outcomes</h3>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="grid gap-4">
                    {program.skills.map((skill, skillIndex) => (
                      <Card key={skillIndex} className="border-2 hover:border-gold/30 transition-colors animate-scale-hover">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <div className="bg-gold/10 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                              <skill.icon className="h-5 w-5 text-gold" />
                            </div>
                            <h4 className="font-heading font-semibold text-lg text-foreground">{skill.name}</h4>
                          </div>
                          <p className="text-muted-foreground">{skill.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Program Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our 3-month intensive program combines hands-on training, mentorship, and real-world projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-gold/30 transition-colors animate-scale-hover animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <CardTitle className="font-heading">Foundation Month</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Basic concepts, tool introduction, and hands-on practice with mentorship support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-gold/30 transition-colors animate-scale-hover animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <CardTitle className="font-heading">Skill Building Month</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced techniques, project work, and specialized skill development with industry focus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-gold/30 transition-colors animate-scale-hover animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <CardTitle className="font-heading">Portfolio & Placement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Portfolio development, job preparation, and career guidance with placement assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're continuously expanding our programs to provide more opportunities for growth and empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingPrograms.map((program, index) => (
              <Card key={index} className="border-2 border-dashed border-muted hover:border-gold/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Badge variant="outline" className="mb-4">{program.status}</Badge>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <p className="text-sm text-gold font-medium">Expected: {program.estimated}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-inspiration-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join Cohort 1 and be among the first to experience our transformative programs. 
            Applications are now open for our 2025 start date.
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
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;