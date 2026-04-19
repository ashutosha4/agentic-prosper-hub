import { Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="container-narrow py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md gradient-hero flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
              AA
            </div>
            <div>
              <div className="font-display font-semibold text-sm">Ashutosh A</div>
              <div className="text-[11px] text-muted-foreground font-mono">AI Product Manager</div>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground mt-4 max-w-xs">
            Building AI-powered products that turn complex enterprise workflows into intelligent, scalable systems.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#about" className="hover:text-foreground transition-colors">About</a></li>
            <li><a href="/#work" className="hover:text-foreground transition-colors">Case Studies</a></li>
            <li><a href="/#experience" className="hover:text-foreground transition-colors">Experience</a></li>
            <li><a href="/#skills" className="hover:text-foreground transition-colors">Skills</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={14} /><a href="mailto:aashutosha4@gmail.com" className="hover:text-foreground">aashutosha4@gmail.com</a></li>
            <li className="flex items-center gap-2"><Linkedin size={14} /><a href="https://linkedin.com/in/ashutosh-ashutosh-95053395" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></li>
            <li className="flex items-center gap-2"><MapPin size={14} />Bengaluru, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-narrow py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ashutosh A. All rights reserved.</p>
          <p className="font-mono">Built with intent · React · Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
