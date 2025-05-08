
import { Card, CardContent } from "@/components/ui/card";
import { SkillsVisualization } from "./SkillsVisualization";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">My Skills</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Technical expertise I've developed through continuous learning and project implementation
          </p>
          <div className="w-16 h-1 mx-auto bg-primary rounded"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <SkillsVisualization />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
