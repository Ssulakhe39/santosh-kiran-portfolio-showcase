
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="mt-12">
          <div className="bg-white rounded-lg p-6 card-shadow animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="bg-portfolio-purple/10 rounded-full p-6 flex justify-center items-center">
                  <Briefcase size={32} className="text-portfolio-purple" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">Application Developer</h3>
                <h4 className="text-xl text-portfolio-purple font-medium">Ananth Technologies</h4>
                
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Feb 2025 - Present (3 months)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Hyderabad, Telangana, India (On-site)</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h5 className="text-lg font-medium mb-2">Responsibilities & Achievements:</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Developing and maintaining enterprise applications</li>
                    <li>Collaborating with cross-functional teams for software implementation</li>
                    <li>Working with various technologies including React, Node.js, and SQL databases</li>
                    <li>Participating in the full software development lifecycle from design to deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
