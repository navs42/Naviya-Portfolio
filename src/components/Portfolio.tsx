import React, { useState } from "react";

const projects = [
  {
    title: "MeetSync | AI Meeting Buddy",
    description:
      "Web app for automated meeting management with live transcription, AI-powered summarization, and intelligent task extraction. Streamlines meeting workflows and boosts productivity.",
    tech: ["Python", "React.js", "NLP", "REST APIs"],
    github: "https://github.com/navs42/AI-Meeting-Buddy.git",
    link: "",
  },
  {
    title: "Multi-Label Emotion Classification",
    description:
      "BERT-based NLP model for detecting multiple emotions simultaneously in text. Deployed with Flask API for real-time emotion analysis with high accuracy.",
    tech: ["ML", "Flask", "Python"],
    github: "https://github.com/navs42/Multi-Label-Emotion-Classification.git",
    link: "",
  },
  {
    title: "Reach+ | Gamification App for PwDs",
    description:
      "Mobile therapy app for cerebral palsy patients with gamified video modules, real-time Firebase sync, and automated email notifications via n8n. Focused on accessibility and user experience.",
    tech: ["React Native", "Firebase", "Figma", "n8n Automation"],
    github: "https://github.com/navs42/Gamification-App-for-Pwds.git",
    link: "",
  },
  {
    title: "SmartHire AI | AI-Powered Resume Screening & Shortlisting System using n8n",
    description:
      "AI-powered automation system using n8n that extracts resumes from emails, analyzes them against job descriptions, and logs evaluation results in Google Sheets.",
    tech: ["n8n","Gemini AI", "API"],
    github: "https://github.com/navs42/SmartHire-AI.git",
    link: "",
  },
  {
    title: "TidBit | Terms & Conditions Summarizer",
    description:
      "NLP-powered tool that summarizes lengthy legal documents and terms of service into digestible, easy-to-understand summaries using transformer models.",
    tech: ["ML","Flask", "Python", "NLP"],
    github: "https://github.com/navs42/TidBit-Terms-Conditions-Summarizer.git",
    link: "",
  },
  {
    title: "Yotube trend Analayzer using n8n",
    description: 
      "An automated workflow built with n8n that fetches YouTube videos for a given topic, filters the top trending ones, and saves them automatically to Google Sheets for easy analysis.",
    tech:["n8n","YouTube Data API", "Google Sheets API", "JavaScript (workflow scripting)"],
    github:"https://github.com/navs42/youtube-trend-analyzer-n8n.git"
  }
];

const allSkills = Array.from(
  new Set(projects.flatMap((project) => project.tech))
);

const Portfolio = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredProjects = selectedSkill
    ? projects.filter((project) => project.tech.includes(selectedSkill))
    : projects;

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              className={`px-4 py-2 rounded ${
                selectedSkill === null
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground"
              }`}
              onClick={() => setSelectedSkill(null)}
            >
              All
            </button>
            {allSkills.map((skill) => (
              <button
                key={skill}
                className={`px-4 py-2 rounded ${
                  selectedSkill === skill
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground"
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
          {/* Project Grid/List */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md flex flex-col gap-4"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2 justify-start">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-muted rounded text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.link && project.link !== "" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
