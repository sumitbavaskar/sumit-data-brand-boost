
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>Contact | Sumit's Portfolio</title>
        <meta name="description" content="Get in touch with Sumit for collaboration opportunities, project inquiries, or just to say hello." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <section className="py-8 mb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold font-display mb-6 text-center">Get In Touch</h1>
                <p className="text-xl text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
                  Have a project idea? Want to collaborate? Or just want to say hello? I'd love to hear from you.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 space-y-6">
                    <Card>
                      <CardContent className="p-6 flex items-start space-x-4">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <h3 className="font-display font-medium mb-1">Location</h3>
                          <p className="text-muted-foreground text-sm">Bengaluru, India</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6 flex items-start space-x-4">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                          <Mail size={20} />
                        </div>
                        <div>
                          <h3 className="font-display font-medium mb-1">Email</h3>
                          <p className="text-muted-foreground text-sm">sumit@example.com</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6 flex items-start space-x-4">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                          <Phone size={20} />
                        </div>
                        <div>
                          <h3 className="font-display font-medium mb-1">Phone</h3>
                          <p className="text-muted-foreground text-sm">+91 9XXXXXXXXX</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="p-6">
                      <h3 className="font-display font-medium mb-4">Connect With Me</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://github.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                        >
                          <Github size={18} />
                          <span className="sr-only">GitHub</span>
                        </a>
                        <a 
                          href="https://linkedin.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                        >
                          <Linkedin size={18} />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                        <a 
                          href="https://twitter.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                        >
                          <Twitter size={18} />
                          <span className="sr-only">Twitter</span>
                        </a>
                        <a 
                          href="mailto:contact@example.com" 
                          className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                        >
                          <Mail size={18} />
                          <span className="sr-only">Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <Card>
                      <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label htmlFor="name" className="text-sm font-medium">
                                Your Name
                              </label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                              />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">
                                Your Email
                              </label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                              Subject
                            </label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              placeholder="How can I help you?"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                              Message
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              placeholder="Your message here..."
                              rows={5}
                            />
                          </div>
                          
                          <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? (
                              <span className="flex items-center">Sending... <Send className="ml-2 h-4 w-4 animate-bounce" /></span>
                            ) : (
                              <span className="flex items-center">Send Message <Send className="ml-2 h-4 w-4" /></span>
                            )}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="mt-16 text-center">
                  <h2 className="text-2xl font-bold font-display mb-4">Open to Opportunities</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Currently seeking opportunities to work on challenging data science and AI projects. 
                    If you're looking for a dedicated developer with expertise in Python and data analysis, let's talk!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
