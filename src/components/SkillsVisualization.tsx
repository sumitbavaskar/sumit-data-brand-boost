
import { useState } from "react";
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'data' | 'tools';
  color?: string;
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: 'programming', color: "#3572A5" },
  { name: "SQL", level: 85, category: 'programming', color: "#e38c00" },
  { name: "Pandas", level: 80, category: 'data', color: "#150458" },
  { name: "NumPy", level: 75, category: 'data', color: "#4CABCF" },
  { name: "Matplotlib/Seaborn", level: 80, category: 'data', color: "#11557c" },
  { name: "Scikit-learn", level: 70, category: 'data', color: "#F89939" },
  { name: "TensorFlow/PyTorch", level: 65, category: 'data', color: "#FF6F00" },
  { name: "OpenCV", level: 75, category: 'tools', color: "#5C3EE8" },
  { name: "Git/GitHub", level: 85, category: 'tools', color: "#F05032" },
  { name: "Tkinter", level: 80, category: 'tools', color: "#3B88C3" },
  { name: "Flask/Django", level: 70, category: 'tools', color: "#092E20" }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-2 rounded shadow-sm">
        <p className="font-medium">{`${payload[0].payload.name}`}</p>
        <p className="text-sm text-muted-foreground">{`Proficiency: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export function SkillsVisualization() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'programming' | 'data' | 'tools'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const filteredSkills = selectedCategory === 'all' 
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);
    
  const sortedSkills = [...filteredSkills].sort((a, b) => b.level - a.level);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        <Button 
          variant={selectedCategory === 'all' ? "default" : "outline"}
          onClick={() => setSelectedCategory('all')}
          className="text-sm"
        >
          All Skills
        </Button>
        <Button 
          variant={selectedCategory === 'programming' ? "default" : "outline"}
          onClick={() => setSelectedCategory('programming')}
          className="text-sm"
        >
          Programming
        </Button>
        <Button 
          variant={selectedCategory === 'data' ? "default" : "outline"}
          onClick={() => setSelectedCategory('data')}
          className="text-sm"
        >
          Data Science
        </Button>
        <Button 
          variant={selectedCategory === 'tools' ? "default" : "outline"}
          onClick={() => setSelectedCategory('tools')}
          className="text-sm"
        >
          Tools & Frameworks
        </Button>
      </div>
      
      <Card className="p-4">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={sortedSkills}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 100]} />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={120}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="level" 
              radius={[0, 4, 4, 0]}
              onMouseEnter={(data) => setHoveredSkill(data.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {sortedSkills.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color || "#3b82f6"} 
                  fillOpacity={hoveredSkill === entry.name ? 1 : 0.75}
                  className="transition-opacity duration-300"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-6">
        {sortedSkills.map((skill) => (
          <div 
            key={skill.name}
            className="flex items-center gap-2 p-2 border border-border rounded-md bg-background/50 hover:bg-accent/20 transition-colors"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: skill.color || "#3b82f6" }}
            />
            <span className="text-sm font-medium truncate">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
