import { Card } from "../components/ui/card";
import { GraduationCap, Code, Brain, Cloud, Palette, Settings, WorkflowIcon } from "lucide-react";
import profileImg from "../assets/profile.jpg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation();
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const education = [
    {
      institution: "PSG Institute of Technology and Applied Research",
      degree: "B.Tech, Computer Science and Business Systems",
      period: "2023 – 2027",
    },
    {
      institution: "Maharishi Vidya Mandir Senior Secondary School",
      degree: "12th Grade",
      period: "2021 – 2023",
      score: "92.4%",
    },
    {
      institution: "The Titan School",
      degree: "10th Grade",
      period: "2021",
      score: "94.8%",
    },
  ];

  const skills = [
    { category: "Programming", icon: Code, items: ["Java", "Python", "SQL", "JavaScript"] },
    { category: "AI & ML", icon: Brain, items: ["Machine Learning", "CNNs", "NLP", "Sentiment Analysis"] },
    { category: "Development", icon: Settings, items: ["React Native", "Spring Boot", "Firebase", "Git"] },
    { category: "Cloud & Tools", icon: Cloud, items: ["Firebase", "REST APIs", "Automation (n8n)"] },
    { category: "Design", icon: Palette, items: ["Figma", "UI/UX", "Accessibility Design"] },
    { category: "Automation", icon: WorkflowIcon, items: ["n8n", "Google WorkSpace APIs", "WebHooks", "RestAPIs", "JSON/HTTP Requests"] },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={headerRef} className={`animate-on-scroll ${headerVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-12" />
          </div>

          <div ref={profileRef} className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className={`animate-on-scroll ${profileVisible ? 'visible' : ''}`}>
              <img
                src={profileImg}
                alt="Naviya M"
                className="rounded-2xl w-full max-w-md mx-auto shadow-lg border-4 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105"
              />
            </div>

            <div className={`animate-slide-in-left ${profileVisible ? 'visible' : ''}`}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am <span className="text-primary font-semibold">Naviya M</span>, a passionate and curious 
                third-year Computer Science and Business Systems student with a keen interest in software 
                development, AI applications, and cloud technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I enjoy building practical solutions that combine technology and creativity, with hands-on 
                experience in React Native, Firebase, and Java-based development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am driven by learning beyond the syllabus, tackling real-world problems, and contributing 
                to projects that make an impact.
              </p>
            </div>
          </div>

          {/* Education */}
          <div ref={eduRef} className="mb-16">
            <div className={`flex items-center gap-3 mb-8 animate-on-scroll ${eduVisible ? 'visible' : ''}`}>
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`p-6 bg-card border-border hover:border-primary/50 hover-lift hover-glow transition-all duration-300 animate-on-scroll ${eduVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">{edu.institution}</h4>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-medium">{edu.period}</p>
                      {edu.score && <p className="text-foreground font-semibold">{edu.score}</p>}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef}>
            <h3 className={`text-3xl font-bold text-foreground mb-8 text-center animate-on-scroll ${skillsVisible ? 'visible' : ''}`}>Skills & Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={index}
                    className={`p-6 bg-card border-border hover:border-primary/50 hover-lift hover-glow transition-all duration-300 group animate-on-scroll ${skillsVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
