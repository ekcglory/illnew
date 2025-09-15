import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Heart, Star, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            About <span className="text-gold">Ilum Stars</span>
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            We believe that every young person is a star with the potential to illuminate their world. 
            Our mission is to provide the guidance, skills, and opportunities they need to shine.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-8 text-center text-foreground">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Ilum Stars was born from a vision to see young talents in Orlu and beyond rise to their full potential. 
                In a world where opportunities can seem limited, we recognized the need for a platform that not only 
                provides technical skills but also builds character, instills values, and creates pathways to success.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our Christian-inspired approach combines practical training with moral guidance, ensuring that our 
                beneficiaries don't just develop professional skills, but also become leaders of integrity who can 
                positively impact their communities.
              </p>
              <p className="text-lg leading-relaxed">
                Starting with our first cohort in September 2024, we're building a movement of empowered young people 
                who will illuminate their world through innovation, creativity, and service to others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="text-center border-2 hover:border-gold/30 transition-colors">
              <CardContent className="p-8">
                <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-10 w-10 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading platform for youth empowerment in Nigeria, creating a generation of skilled, 
                  values-driven young leaders who transform their communities and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="text-center border-2 hover:border-gold/30 transition-colors">
              <CardContent className="p-8">
                <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To illuminate young talents through comprehensive mentorship, digital skills training, and 
                  empowerment opportunities, building a foundation for sustainable success and positive impact.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center border-2 hover:border-gold/30 transition-colors">
              <CardContent className="p-8">
                <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, Excellence, Compassion, Innovation, and Faith. These values guide everything we do 
                  and shape the character of every young person we mentor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6 text-foreground">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines technical excellence with character development, 
              creating well-rounded individuals ready to make a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                Holistic Development
              </h3>
              <p className="text-muted-foreground">
                We don't just teach technical skills; we develop character, instill values, 
                and provide mentorship for complete personal growth.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
                Community Focus
              </h3>
              <p className="text-muted-foreground">
                Our programs are designed to not just benefit individuals, but to create 
                positive ripple effects throughout the community.
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
                We maintain the highest standards in our training programs, ensuring our 
                graduates are competitive in global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 bg-inspiration-gradient text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Our Impact Goals
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Measurable outcomes that drive our mission forward and create lasting change in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">1000+</div>
              <div className="text-primary-foreground/80">Youth Trained by 2027</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">80%</div>
              <div className="text-primary-foreground/80">Employment Rate Goal</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">10+</div>
              <div className="text-primary-foreground/80">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">5</div>
              <div className="text-primary-foreground/80">Cities Expanded To</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;