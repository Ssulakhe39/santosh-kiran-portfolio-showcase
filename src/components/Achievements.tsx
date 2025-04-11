
import { Award, CheckCircle } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 card-shadow animate-fade-in-right">
            <div className="flex items-start">
              <div className="bg-portfolio-purple/10 rounded-full p-3 mr-4 mt-1">
                <Award className="w-6 h-6 text-portfolio-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart India Hackathon 2022</h3>
                <p className="text-gray-700">
                  Runner up for Smart India Hackathon 2022 - among the top 5 teams all over India for 
                  DR-720 problem statement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 card-shadow animate-fade-in-left">
            <div className="flex items-start">
              <div className="bg-portfolio-purple/10 rounded-full p-3 mr-4 mt-1">
                <CheckCircle className="w-6 h-6 text-portfolio-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vedic Mathematics</h3>
                <p className="text-gray-700">
                  Completed three levels of Vedic Mathematics, demonstrating advanced computational 
                  and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
