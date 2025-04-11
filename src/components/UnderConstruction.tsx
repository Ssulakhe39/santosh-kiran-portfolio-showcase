
import { Construction, Rocket, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 via-blue-300/20 to-purple-300/20 dark:from-portfolio-purple/10 dark:via-blue-800/10 dark:to-purple-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl px-6 py-16 mx-auto text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-portfolio-purple bg-opacity-10 backdrop-blur-sm border border-portfolio-purple/20">
            <Construction className="text-portfolio-purple w-16 h-16" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Under Construction</h1>
        
        <div className="h-1 w-32 bg-gradient-to-r from-portfolio-purple to-blue-400 mx-auto my-6 rounded-full"></div>
        
        <p className="text-lg mb-10 max-w-lg mx-auto text-gray-700 dark:text-gray-300">
          We're working hard to bring you something amazing. This page is currently under construction and will be available soon!
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button 
            onClick={() => navigate("/")} 
            className="flex items-center space-x-2 px-6 py-3 rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 text-portfolio-purple group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Home</span>
          </button>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-purple to-blue-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
            <button 
              onClick={() => window.location.reload()}
              className="relative flex items-center space-x-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 z-10"
            >
              <span>Try Again</span>
              <Rocket className="w-5 h-5 text-portfolio-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
