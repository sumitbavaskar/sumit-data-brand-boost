
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Sumit | Python Developer & Data Scientist</title>
        <meta name="description" content="Learn more about Sumit's journey as a Python Developer and Data Scientist, his skills, experience, and passion for technology." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <section className="py-12 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold font-display mb-6">About Me</h1>
                  <p className="text-lg mb-4">
                    Hello! I'm <span className="font-semibold text-primary">Sumit</span>, a passionate Python programmer and aspiring data scientist 
                    based in Bengaluru, India.
                  </p>
                  
                  <div className="w-16 h-1 bg-primary rounded mb-6"></div>
                  
                  <p className="mb-4">
                    With a deep curiosity for data science, automation, and artificial intelligence, I'm constantly exploring 
                    new technologies and methodologies to expand my skillset and create impactful solutions.
                  </p>
                  
                  <p className="mb-4">
                    My journey into the world of programming started when I discovered how code could transform raw data 
                    into meaningful insights. Since then, I've been on a mission to master the tools and techniques needed 
                    to build intelligent systems that solve real-world problems.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 my-4">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Data Science</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Automation</Badge>
                    <Badge variant="secondary">AI</Badge>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Sumit" 
                    className="rounded-lg shadow-lg max-h-full" 
                  />
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold font-display mb-10 text-center">My Journey</h2>
              
              <div className="space-y-12">
                <div className="relative pl-8 md:pl-0">
                  <div className="hidden md:block w-2 h-2 rounded-full bg-primary absolute left-[-5px] top-5 transform -translate-x-1/2"></div>
                  <div className="border-l-2 md:border-l-0 border-dashed border-muted-foreground pl-6 md:grid md:grid-cols-5 md:gap-6">
                    <div className="mb-4 md:mb-0 md:text-right md:pr-6 md:border-r-2 md:border-dashed md:border-muted-foreground md:col-span-2">
                      <h3 className="text-xl font-display font-semibold">Early Programming Days</h3>
                      <p className="text-muted-foreground">2018 - 2019</p>
                    </div>
                    <div className="md:col-span-3">
                      <p>
                        Started my programming journey with Python, building small automation scripts and learning 
                        the fundamentals of programming logic, data structures, and algorithms.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-8 md:pl-0">
                  <div className="hidden md:block w-2 h-2 rounded-full bg-primary absolute left-[-5px] top-5 transform -translate-x-1/2"></div>
                  <div className="border-l-2 md:border-l-0 border-dashed border-muted-foreground pl-6 md:grid md:grid-cols-5 md:gap-6">
                    <div className="mb-4 md:mb-0 md:text-right md:pr-6 md:border-r-2 md:border-dashed md:border-muted-foreground md:col-span-2">
                      <h3 className="text-xl font-display font-semibold">Data Analysis Deep Dive</h3>
                      <p className="text-muted-foreground">2019 - 2021</p>
                    </div>
                    <div className="md:col-span-3">
                      <p>
                        Explored the world of data analysis using Pandas, NumPy, and visualization libraries. 
                        Developed skills in cleaning, manipulating, and extracting insights from various datasets.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-8 md:pl-0">
                  <div className="hidden md:block w-2 h-2 rounded-full bg-primary absolute left-[-5px] top-5 transform -translate-x-1/2"></div>
                  <div className="border-l-2 md:border-l-0 border-dashed border-muted-foreground pl-6 md:grid md:grid-cols-5 md:gap-6">
                    <div className="mb-4 md:mb-0 md:text-right md:pr-6 md:border-r-2 md:border-dashed md:border-muted-foreground md:col-span-2">
                      <h3 className="text-xl font-display font-semibold">Machine Learning Exploration</h3>
                      <p className="text-muted-foreground">2021 - 2023</p>
                    </div>
                    <div className="md:col-span-3">
                      <p>
                        Began studying machine learning algorithms and their applications. Started building predictive 
                        models and experimenting with different ML techniques to solve various problems.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pl-8 md:pl-0">
                  <div className="hidden md:block w-2 h-2 rounded-full bg-primary absolute left-[-5px] top-5 transform -translate-x-1/2"></div>
                  <div className="border-l-2 md:border-l-0 border-dashed border-muted-foreground pl-6 md:grid md:grid-cols-5 md:gap-6">
                    <div className="mb-4 md:mb-0 md:text-right md:pr-6 md:border-r-2 md:border-dashed md:border-muted-foreground md:col-span-2">
                      <h3 className="text-xl font-display font-semibold">Advanced Projects & Continuous Learning</h3>
                      <p className="text-muted-foreground">2023 - Present</p>
                    </div>
                    <div className="md:col-span-3">
                      <p>
                        Currently developing more complex projects like face recognition systems and AI assistants, 
                        while continuing to deepen my understanding of advanced data science and AI concepts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-display mb-6">My Philosophy</h2>
                
                <Card className="bg-background border border-border">
                  <CardContent className="p-8">
                    <blockquote className="text-xl italic mb-6">
                      "Data tells a story; my job is to be its interpreter, translator, and narrator."
                    </blockquote>
                    
                    <p className="mb-6">
                      I believe that in our data-rich world, the ability to extract meaningful insights and build intelligent 
                      solutions is more valuable than ever. My approach combines technical expertise with creative problem-solving 
                      to bridge the gap between raw data and actionable knowledge.
                    </p>
                    
                    <p>
                      Whether I'm analyzing datasets, automating workflows, or building AI applications, I'm driven by a 
                      commitment to excellence and a genuine curiosity about the possibilities that emerge when we ask the 
                      right questions of our data.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
