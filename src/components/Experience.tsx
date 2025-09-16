import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led development of computer vision models achieving 95% accuracy for autonomous systems",
        "Architected MLOps pipeline reducing model deployment time by 60%",
        "Mentored team of 5 junior engineers in machine learning best practices"
      ],
      technologies: ["Python", "PyTorch", "Kubernetes", "AWS", "MLflow"]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataSolutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Developed NLP models for sentiment analysis serving 10M+ daily requests",
        "Implemented real-time recommendation system increasing user engagement by 35%",
        "Optimized training pipelines reducing compute costs by 40%"
      ],
      technologies: ["TensorFlow", "Docker", "GCP", "Apache Spark", "MongoDB"]
    },
    {
      title: "AI Research Intern",
      company: "Innovation Labs",
      location: "Boston, MA",
      period: "2019 - 2020",
      description: [
        "Researched novel deep learning architectures for time series forecasting",
        "Published 2 papers in peer-reviewed conferences",
        "Developed prototype models achieving state-of-the-art performance"
      ],
      technologies: ["PyTorch", "Python", "Jupyter", "Git", "Linux"]
    }
  ];

  const projects = [
    {
      title: "Intelligent Document Processing System",
      description: "Built an end-to-end OCR and NLP pipeline for automated document analysis, processing over 100K documents monthly.",
      technologies: ["Computer Vision", "NLP", "FastAPI", "React"],
      link: "#"
    },
    {
      title: "Real-time Anomaly Detection Platform",
      description: "Developed ML-powered monitoring system detecting operational anomalies in industrial equipment with 99.2% accuracy.",
      technologies: ["Time Series Analysis", "AutoML", "Kafka", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Conversational AI Assistant",
      description: "Created multi-modal AI assistant integrating speech, text, and image understanding for customer service automation.",
      technologies: ["LLMs", "Speech Recognition", "Computer Vision", "APIs"],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Timeline */}
          <div className="relative mb-20">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-full ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
                  <Card className="p-6 hover-lift border-l-4 border-l-primary">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-primary">{exp.company}</h4>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 timeline-item"></div>
              </div>
            ))}
          </div>
          
          {/* Featured Projects */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 hover-lift fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;