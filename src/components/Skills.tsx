
import { Code, Database, Server, GitBranch, Monitor, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["React.js", "Vue.js", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Express.js", "Node.js", "Django REST Framework"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "Database Management System (DBMS)"],
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "Python", "Java", "C"],
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "Docker", "REST APIs", "Linux"],
    },
    {
      title: "Others",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["MERN Stack", "Scrum", "Prompt Engineering", "Selenium"],
    },
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 border border-gray-100 card-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-purple/10 rounded-full p-3 mr-3 text-portfolio-purple">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
