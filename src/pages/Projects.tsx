
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  impact: string;
  challenge: string;
  solution: string;
  category: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "face-recognition",
    title: "Face Recognition Student Management",
    description: "A system that uses facial recognition to automate student attendance tracking and manage student records.",
    tools: ["Python", "OpenCV", "MySQL", "Tkinter"],
    impact: "Reduced attendance-taking time by 80% and improved accuracy of student identification.",
    challenge: "Needed a reliable way to accurately identify students and track attendance without manual effort.",
    solution: "Implemented OpenCV for facial recognition and integrated with a MySQL database for seamless record management.",
    category: ["Machine Learning", "Desktop Application"],
    image: "/placeholder.svg",
    github: "#",
  },
  {
    id: "voice-assistant",
    title: "JARVIS Voice Assistant",
    description: "An AI-powered voice assistant that responds to voice commands and performs various tasks like web searches, setting reminders, and controlling smart devices.",
    tools: ["Python", "Speech Recognition", "Natural Language Processing", "APIs"],
    impact: "Enabled hands-free operation of computer systems and improved workflow efficiency.",
    challenge: "Creating a responsive voice interface that could accurately interpret and act on diverse commands.",
    solution: "Combined speech recognition with NLP models to process voice commands and execute appropriate actions.",
    category: ["AI", "Automation"],
    image: "/placeholder.svg",
    github: "#",
  },
  {
    id: "data-visualization",
    title: "Interactive Data Visualization Dashboard",
    description: "A web-based dashboard that visualizes complex datasets through interactive charts, graphs, and maps for easier interpretation and analysis.",
    tools: ["Python", "Pandas", "Plotly", "Dash"],
    impact: "Transformed raw data into meaningful visual insights, helping stakeholders make data-driven decisions.",
    challenge: "Presenting complex datasets in an accessible, interactive way for non-technical users.",
    solution: "Designed an intuitive dashboard with customizable visualizations that update dynamically based on user interactions.",
    category: ["Data Analysis", "Web Application"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    id: "stock-prediction",
    title: "Stock Price Prediction Model",
    description: "A machine learning model that predicts stock price movements based on historical data and market indicators.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    impact: "Provided investors with data-driven insights for making more informed trading decisions.",
    challenge: "Developing a model that could account for the high volatility and complexity of stock markets.",
    solution: "Combined multiple prediction algorithms with feature engineering to create a more robust forecasting system.",
    category: ["Machine Learning", "Finance"],
    image: "/placeholder.svg",
    github: "#",
  },
  {
    id: "image-classifier",
    title: "Image Classification System",
    description: "A deep learning model that classifies images into predefined categories with high accuracy.",
    tools: ["Python", "TensorFlow", "Keras", "Convolutional Neural Networks"],
    impact: "Achieved 95% accuracy in correctly categorizing images across multiple domains.",
    challenge: "Building a model that could generalize well across different types of images with minimal preprocessing.",
    solution: "Implemented a CNN architecture with data augmentation and transfer learning to improve performance.",
    category: ["Deep Learning", "Computer Vision"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
  {
    id: "recommendation-system",
    title: "Content Recommendation Engine",
    description: "A system that analyzes user behavior and preferences to suggest personalized content recommendations.",
    tools: ["Python", "Collaborative Filtering", "Matrix Factorization", "Flask"],
    impact: "Increased user engagement by 35% through more relevant content suggestions.",
    challenge: "Creating recommendations that balance user preferences with exploration of new content.",
    solution: "Developed a hybrid approach combining collaborative filtering with content-based recommendations.",
    category: ["Machine Learning", "Web Application"],
    image: "/placeholder.svg",
    github: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.category)))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));
    
  return (
    <>
      <Helmet>
        <title>Projects | Sumit's Portfolio</title>
        <meta name="description" content="Explore Sumit's data science and programming projects, including machine learning models, automation tools, and data visualization dashboards." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <section className="py-8 mb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold font-display mb-6 text-center">My Projects</h1>
              <p className="text-xl text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
                Explore my technical work — from machine learning models and data visualization dashboards to automation tools and intelligent systems.
              </p>
              
              <div className="flex justify-center flex-wrap gap-2 mb-12">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={filter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(category)}
                    className="mb-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="flex flex-col overflow-hidden border border-border group hover:border-primary/50 transition-colors">
                    <CardHeader className="p-0">
                      <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow p-6">
                      <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="secondary">{tool}</Badge>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-semibold text-primary">Impact:</span> {project.impact}
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold text-primary">Challenge:</span> {project.challenge}
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold text-primary">Solution:</span> {project.solution}
                        </p>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex gap-2 p-6 pt-0">
                      {project.github && (
                        <Button variant="outline" size="sm" className="gap-1">
                          <Github size={16} />
                          Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="gap-1">
                          Live Demo
                          <ArrowUpRight size={16} />
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No projects found in this category. Try another filter.</p>
                </div>
              )}
            </div>
          </section>
          
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-display mb-6">Interested in Collaborating?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to contribute to your vision.
                </p>
                <Button asChild size="lg">
                  <a href="/contact" className="flex items-center gap-2">
                    Get in Touch <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Projects;
