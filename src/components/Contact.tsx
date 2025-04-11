
import { useState } from 'react';
import { Mail, MapPin, ExternalLink, GitHub, Linkedin } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat 
              about technology and development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-portfolio-purple/10 rounded-full p-3 mr-4">
                  <Mail className="w-5 h-5 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a 
                    href="mailto:santoshsulakhe39@gmail.com" 
                    className="text-portfolio-purple hover:underline"
                  >
                    santoshsulakhe39@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-purple/10 rounded-full p-3 mr-4">
                  <MapPin className="w-5 h-5 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-700">Hyderabad, Telangana, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-purple/10 rounded-full p-3 mr-4">
                  <Linkedin className="w-5 h-5 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/santosh-kiran-sulake-891a10132" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-purple hover:underline flex items-center"
                  >
                    Santosh Kiran Sulake
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-purple/10 rounded-full p-3 mr-4">
                  <GitHub className="w-5 h-5 text-portfolio-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/Ssulakhe39" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-purple hover:underline flex items-center"
                  >
                    Ssulakhe39
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-left">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-purple"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full py-3 rounded-md ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
