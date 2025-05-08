
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'data' | 'tools';
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: 'programming' },
  { name: "SQL", level: 85, category: 'programming' },
  { name: "Pandas", level: 80, category: 'data' },
  { name: "NumPy", level: 75, category: 'data' },
  { name: "Matplotlib/Seaborn", level: 80, category: 'data' },
  { name: "Scikit-learn", level: 70, category: 'data' },
  { name: "TensorFlow/PyTorch", level: 65, category: 'data' },
  { name: "OpenCV", level: 75, category: 'tools' },
  { name: "Git/GitHub", level: 85, category: 'tools' },
  { name: "Tkinter", level: 80, category: 'tools' },
  { name: "Flask/Django", level: 70, category: 'tools' },
];

const SkillsSection = () => {
  const programming = skills.filter(skill => skill.category === 'programming');
  const dataScience = skills.filter(skill => skill.category === 'data');
  const tools = skills.filter(skill => skill.category === 'tools');

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

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-bold mb-6 text-center">Programming Languages</h3>
              <div className="space-y-6">
                {programming.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-bold mb-6 text-center">Data Science</h3>
              <div className="space-y-6">
                {dataScience.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-bold mb-6 text-center">Tools & Frameworks</h3>
              <div className="space-y-6">
                {tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
