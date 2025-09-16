import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Cloud, Code, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 80 }
      ]
    },
    {
      title: "ML/DL Frameworks",
      icon: Brain,
      skills: [
        { name: "PyTorch", level: 95 },
        { name: "TensorFlow/Keras", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "Hugging Face", level: 85 },
        { name: "Agentic AI: ADK, AutoGen, LangGraph", level: 85 },
        { name: "NVIDIA-Merlin", level: 98 }
      ]
    },
    {
      title: "Cloud & MLOps",
      icon: Cloud,
      skills: [
        { name: "Google Cloud Platform", level: 90 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "MLflow, ML Server", level: 80 },
        { name: "CI/CD", level: 85 }
      ]
    },
    {
      title: "Data & Databases",
      icon: Wrench,
      skills: [
        { name: "MongoDB", level: 95 },
        { name: "MySQL/PostgreSQL", level: 90 },
        { name: "Redis", level: 85 },
        { name: "Milvus", level: 85 },
        { name: "Elasticsearch", level: 80 },
        { name: "BigQuery", level: 85 }
      ]
    }
  ];

  const technicalExpertise = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Large Language Models",
    "Time Series Analysis",
    "Agentic AI",
    "MLOps & Model Deployment",
    "Statistics & Probability",
    "Architecture Design",
    "Business Intelligence"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Technical Skills with Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover-lift fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Areas of Expertise */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Areas of Expertise
            </h3>
            <Card className="p-8 text-center">
              <div className="flex flex-wrap justify-center gap-3">
                {technicalExpertise.map((expertise, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {expertise}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;