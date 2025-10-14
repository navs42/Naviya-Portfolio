import { Card } from "../components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "naviya194@gmail.com",
      link: "mailto:naviya194@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/naviya-m-6a10011bb/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      link: "https://github.com/navs42",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`animate-on-scroll ${headerVisible ? "visible" : ""}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12" />
          </div>

          <div
            ref={contentRef}
            className={`animate-on-scroll ${contentVisible ? "visible" : ""}`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary hover-lift transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
