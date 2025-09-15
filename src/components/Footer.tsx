import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoLightTrans from "@/assets/LG_light_trans.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src={logoLightTrans} 
              alt="Ilum Stars NGO" 
              className="h-25 w-28 mb-4"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Illuminating young talents through mentorship, digital skills training, and empowerment opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/enrollment" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Enrollment
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/get-involved#volunteer" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/get-involved#partner" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/get-involved#donate" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:hello@ilumstars.org" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  hello@ilumstars.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <a href="https://wa.me/2348123456789" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                  +234 812 345 6789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-primary-foreground/80 text-sm">
                  Orlu, Imo State, Nigeria
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Ilum Stars NGO. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;