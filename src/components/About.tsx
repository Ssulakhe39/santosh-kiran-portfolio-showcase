
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section py-20 bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="mt-12 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden card-shadow bg-gradient-to-br from-portfolio-purple/80 to-portfolio-blue p-1">
              <div className="bg-white rounded-xl p-4">
                <img 
                  src="https://via.placeholder.com/400x500" 
                  alt="Santosh Kiran Sulake" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-gray-700 mb-6">
              As a dynamic and inventive developer holding a degree in Computer Science, 
              I exhibit a resolute attitude and possess a diverse set of robust skills. 
              Skilled in leveraging a wide range of office technology programs, I am dedicated 
              to leveraging my proficiencies to advance an organization's goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="bg-portfolio-purple/10 p-2 rounded-lg mr-3">
                  <User className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Full Name</h3>
                  <p className="text-gray-600">Santosh Kiran Sulake</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-purple/10 p-2 rounded-lg mr-3">
                  <GraduationCap className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Education</h3>
                  <p className="text-gray-600">B.E. Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-purple/10 p-2 rounded-lg mr-3">
                  <Briefcase className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-gray-600">3 Months</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-purple/10 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-purple">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Connect</h3>
                  <a 
                    href="https://www.linkedin.com/in/santosh-kiran-sulake-891a10132" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-purple hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="btn btn-primary px-6 py-2.5 rounded-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
