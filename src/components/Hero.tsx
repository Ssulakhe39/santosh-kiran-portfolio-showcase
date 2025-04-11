
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-portfolio-purple/5 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
          <span className="block">Hello, I'm</span>
          <span className="text-portfolio-purple">Santosh Kiran Sulake</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700">
          Application Developer with a passion for creating elegant solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="btn btn-primary px-6 py-3 rounded-lg"
          >
            Get In Touch
          </a>
          <a 
            href="#about" 
            className="btn bg-white border border-gray-200 hover:bg-gray-50 px-6 py-3 rounded-lg"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-block">
            <ArrowDown className="text-portfolio-purple" size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
