
import { Code, ExternalLink, Book } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Enhanced Learning Analytics Dashboard",
      description: "Developed an advanced E-Learning Management System (LMS) using Django and SQL-Lite, revolutionizing educational approaches by providing customized, flexible, and readily available learning experiences.",
      technologies: ["Django", "SQL-Lite", "AI", "Analytics"],
      link: "#",
    },
    {
      title: "SIH 2022 DR-720",
      description: "Analyzed educational databases utilizing various data analysis tools to uncover key trends and insights for SIH-Codinos. Contributed to developing an integrated platform linking school, higher, and technical education databases, enhancing data-driven decision-making.",
      technologies: ["Data Analysis", "Education", "Database Integration"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden card-shadow animate-fade-in bg-white border border-gray-100"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-portfolio-purple to-portfolio-blue flex items-center justify-center p-6">
                <Book size={80} className="text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="btn btn-primary px-4 py-2 rounded-md flex items-center"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                  <a 
                    href={project.link} 
                    className="btn bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
