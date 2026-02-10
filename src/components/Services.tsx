import { Card } from "../components/ui/card";
import { Smartphone, Brain ,WorkflowIcon} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const services = [
    {
      icon: Smartphone,
      title: "Mobile & Web App Development",
      description:
        "End-to-end solutions with React Native, React.js, Firebase, and Spring Boot. From concept to deployment, I build responsive, scalable applications tailored to your needs.",
      technologies: ["React Native", "React.js", "Firebase", "Spring Boot", "REST APIs"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description:
        "NLP, ML model development, deployment, and data-driven insights. I create intelligent systems that learn, adapt, and provide meaningful predictions for real-world problems.",
      technologies: ["Python", "TensorFlow", "NLP", "BERT"],
    },{
      icon:WorkflowIcon ,
      title: "n8n Automations",
      description:
        "Workflow automation, system integration, and process optimization. I design intelligent n8n workflows that connect apps, automate repetitive tasks, and streamline business operations with efficiency and precision.",
      technologies: ["n8n", "JavaScript", "WebHooks", "RestAPIs", "JSON/HTTP Requests"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={headerRef} className={`animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12" />
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className={`p-8 bg-background border-border hover:border-primary hover-lift hover-glow transition-all duration-300 group animate-on-scroll ${cardsVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
