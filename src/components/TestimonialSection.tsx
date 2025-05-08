
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Data Science Lead",
    company: "TechAnalytica",
    content: "Sumit's Python skills and data analytics expertise were instrumental in our project's success. His ability to translate complex data into actionable insights is truly remarkable.",
    avatar: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Rahul Mehta",
    role: "CTO",
    company: "InnovateTech",
    content: "Working with Sumit was a pleasure. His problem-solving approach and dedication to delivering high-quality code made our collaboration smooth and productive.",
    avatar: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Project Manager",
    company: "DataViz Solutions",
    content: "Sumit's voice assistant project exceeded our expectations. His attention to detail and innovative thinking brought an extra dimension to the solution.",
    avatar: "/placeholder.svg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Feedback from clients and collaborators
          </p>
          <div className="w-16 h-1 mx-auto bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-background border border-border">
              <CardContent className="p-6">
                <QuoteIcon size={36} className="text-primary/20 mb-4" />
                <p className="mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
