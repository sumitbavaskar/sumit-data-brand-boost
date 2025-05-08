
import { Code, Database, Brain, BookOpenCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground mb-6">
            My journey into the world of data science and programming
          </p>
          <div className="w-16 h-1 mx-auto bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              <span className="font-semibold text-primary">Hello! I'm Sumit,</span> a passionate Python programmer and aspiring data scientist 
              with a deep curiosity for data science, automation, and artificial intelligence.
            </p>
            
            <p>
              My fascination with programming began when I realized the power of code to transform raw data into meaningful insights 
              and build intelligent systems that solve real-world problems. This realization set me on a path of continuous learning 
              and building projects that challenge and expand my technical abilities.
            </p>
            
            <p>
              Whether it's developing a face recognition-based student management system or crafting a JARVIS-like voice assistant, 
              I approach each project with enthusiasm and a commitment to excellence. I believe that technology, when thoughtfully 
              applied, can enhance our lives and make complex tasks more manageable.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic">
              "The only way to do great work is to love what you do. If you haven't found it yet, 
              keep looking. Don't settle." — This philosophy guides my journey in technology.
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-background border border-border">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Code size={24} />
                </div>
                <h3 className="font-display font-medium mb-1">Python Development</h3>
                <p className="text-sm text-muted-foreground">Building robust applications and automation tools</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Database size={24} />
                </div>
                <h3 className="font-display font-medium mb-1">Data Analysis</h3>
                <p className="text-sm text-muted-foreground">Transforming data into actionable insights</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="font-display font-medium mb-1">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Developing intelligent algorithms and models</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border border-border">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <BookOpenCheck size={24} />
                </div>
                <h3 className="font-display font-medium mb-1">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">Always exploring new technologies and techniques</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
