
import { FileCheck, Link } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Intermediate SQL",
      issuer: "DataCamp",
      date: "",
      credentialId: "",
    },
    {
      title: "Understanding Data Engineering",
      issuer: "DataCamp",
      date: "",
      credentialId: "",
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
      date: "Jul 2024",
      credentialId: "",
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      date: "Feb 2024",
      credentialId: "",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "Feb 2024",
      credentialId: "",
    },
    {
      title: "Grand Finalist- 2022 Smart India Hackathon",
      issuer: "",
      date: "Aug 2022",
      credentialId: "",
    },
    {
      title: "Programming in Java - NPTEL",
      issuer: "",
      date: "",
      credentialId: "NPTEL22CS102S53690665",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      issuer: "Coursera",
      date: "Jul 2023",
      credentialId: "8MXCMU7UQLG9",
    },
  ];

  return (
    <section id="certifications" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-100 p-5 card-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-3">
                <div className="bg-portfolio-purple/10 rounded-full p-2 mr-3">
                  <FileCheck className="w-5 h-5 text-portfolio-purple" />
                </div>
                <h3 className="font-semibold">{cert.title}</h3>
              </div>
              
              {cert.issuer && (
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <span className="font-medium mr-1">Issuer:</span> {cert.issuer}
                </div>
              )}
              
              {cert.date && (
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <span className="font-medium mr-1">Issued:</span> {cert.date}
                </div>
              )}
              
              {cert.credentialId && (
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="font-medium mr-1">Credential ID:</span> 
                  <span className="truncate">{cert.credentialId}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
