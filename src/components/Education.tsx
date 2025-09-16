import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.9/4.0",
      achievements: [
        "Summa Cum Laude graduate",
        "Outstanding Research Award in AI",
        "Teaching Assistant for CS229 Machine Learning"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      specialization: "Software Systems & Mathematics Minor",
      school: "UC Berkeley",
      location: "Berkeley, CA", 
      period: "2013 - 2017",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's Honor List (6 semesters)",
        "ACM Programming Contest Finalist",
        "Undergraduate Research in Computer Vision"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-MLS-2023-001"
    },
    {
      name: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PMLE-2022-887"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera (Andrew Ng)",
      date: "2021",
      credentialId: "COURSERA-DL-2021"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-445"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Education */}
          <div className="mb-20">
            <div className="grid gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="p-8 hover-lift fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                          <h4 className="text-lg text-primary font-semibold">{edu.specialization}</h4>
                          <p className="text-muted-foreground">
                            {edu.school} • {edu.location}
                          </p>
                        </div>
                        <div className="text-right mt-4 md:mt-0">
                          <p className="font-semibold text-foreground">{edu.period}</p>
                          <p className="text-primary font-medium">GPA: {edu.gpa}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground flex items-center">
                          <Award className="w-4 h-4 mr-2 text-primary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-muted-foreground">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground flex items-center justify-center">
              <BookOpen className="w-8 h-8 mr-3 text-primary" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 hover-lift fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {cert.date}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Credential ID: {cert.credentialId}</p>
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

export default Education;