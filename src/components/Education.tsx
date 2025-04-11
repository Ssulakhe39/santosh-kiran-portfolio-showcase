
import { Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      institution: "Osmania University",
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      grade: "7.20 CGPA",
      period: "Dec 2020 - July 2024",
    },
    {
      institution: "Delhi School Of Excellence",
      degree: "Secondary",
      field: "High School",
      grade: "9.0 CGPA",
      period: "Passed out June 2017",
    }
  ];

  return (
    <section id="education" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="mt-12 space-y-8">
          {educationItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 card-shadow flex flex-col md:flex-row md:items-center gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-portfolio-purple/10 rounded-full p-4 md:p-6 flex justify-center items-center">
                <Calendar size={32} className="text-portfolio-purple" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.institution}</h3>
                <p className="text-lg text-gray-800 font-medium">{item.degree}, {item.field}</p>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mt-2">
                  <span className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {item.grade}
                  </span>
                  <span className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
