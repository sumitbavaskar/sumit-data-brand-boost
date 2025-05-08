
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  impact: string;
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
    image: "/placeholder.svg",
    github: "#",
  },
  {
    id: "voice-assistant",
    title: "JARVIS Voice Assistant",
    description: "An AI-powered voice assistant that responds to voice commands and performs various tasks like web searches, setting reminders, and controlling smart devices.",
    tools: ["Python", "Speech Recognition", "Natural Language Processing", "APIs"],
    impact: "Enabled hands-free operation of computer systems and improved workflow efficiency.",
    image: "/placeholder.svg",
    github: "#",
  },
  {
    id: "data-visualization",
    title: "Interactive Data Visualization Dashboard",
    description: "A web-based dashboard that visualizes complex datasets through interactive charts, graphs, and maps for easier interpretation and analysis.",
    tools: ["Python", "Pandas", "Plotly", "Dash"],
    impact: "Transformed raw data into meaningful visual insights, helping stakeholders make data-driven decisions.",
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-6">
            A showcase of my technical work and problem-solving abilities
          </p>
          <div className="w-16 h-1 mx-auto bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
                
                <p className="text-sm">
                  <span className="font-semibold text-primary">Impact:</span> {project.impact}
                </p>
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
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
