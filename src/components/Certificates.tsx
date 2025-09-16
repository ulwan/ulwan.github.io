import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-MLS-2023-001234",
      verificationUrl: "https://aws.amazon.com/verification",
      logo: "🟠", // In real app, replace with actual logos
      description: "Validates expertise in building, training, tuning, and deploying machine learning models on AWS.",
      skills: ["ML Engineering", "SageMaker", "Model Deployment", "Data Engineering"]
    },
    {
      name: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud Platform",
      date: "January 2023",
      credentialId: "GCP-PMLE-2023-567890",
      verificationUrl: "https://cloud.google.com/certification/verification",
      logo: "🟦",
      description: "Demonstrates ability to design, build, and productionize ML models to solve business challenges.",
      skills: ["TensorFlow", "Vertex AI", "BigQuery ML", "AutoML"]
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera (deeplearning.ai)",
      date: "June 2021",
      credentialId: "COURSERA-DL-2021-112233",
      verificationUrl: "https://coursera.org/verify",
      logo: "🟣",
      description: "Comprehensive program covering neural networks, CNNs, RNNs, and practical deep learning.",
      skills: ["Neural Networks", "CNN", "RNN", "Sequence Models"]
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "September 2022",
      credentialId: "CKA-2022-445566",
      verificationUrl: "https://www.cncf.io/certification/verify",
      logo: "⚙️",
      description: "Validates skills in cluster administration, troubleshooting, and managing Kubernetes environments.",
      skills: ["Container Orchestration", "DevOps", "Cloud Native", "Microservices"]
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "TensorFlow (Google)",
      date: "April 2022",
      credentialId: "TF-DEV-2022-778899",
      verificationUrl: "https://www.tensorflow.org/certificate",
      logo: "🧡",
      description: "Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems.",
      skills: ["TensorFlow", "Model Building", "Computer Vision", "NLP"]
    },
    {
      name: "Azure AI Engineer Associate",
      issuer: "Microsoft Azure",
      date: "August 2022",
      credentialId: "AZ-AI-2022-334455",
      verificationUrl: "https://docs.microsoft.com/certifications",
      logo: "🔵",
      description: "Validates ability to use Cognitive Services, ML, and knowledge mining to architect AI solutions.",
      skills: ["Azure ML", "Cognitive Services", "AI Services", "Computer Vision"]
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Certificates & Credentials
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Continuously expanding expertise through industry-recognized certifications
              and specialized training programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-6 hover-lift fade-in-up h-full flex flex-col" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.logo}</div>
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </Badge>
                </div>
                
                {/* Certificate Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {cert.name}
                  </h3>
                  <div className="flex items-center text-primary font-medium mb-3">
                    <Building className="w-4 h-4 mr-2" />
                    {cert.issuer}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      ID: {cert.credentialId}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => window.open(cert.verificationUrl, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Verify Certificate
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">
                  Commitment to Learning
                </h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I maintain active certifications and continuously pursue new learning opportunities 
                to stay at the forefront of AI and machine learning technologies. Currently working 
                towards MLOps Engineer certification and Advanced NLP specializations.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;