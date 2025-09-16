import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Statistics in Mathematics and Natural Sciences",
      specialization: "Business Industries",
      school: "Islamic University of Indonesia",
      location: "Yogyakarta, Indonesia",
      period: "08/2012 - 08/2016",
      gpa: "3.78/4.0",
      achievements: [
        "Top 10 Best Papers - 2nd East Java Economic Forum (EJAVEC) by Bank Indonesia & Airlangga University",
        "The winners of scientific writing competitions by Directorate of Libraries UII",
        "Teaching Assistant for Programming Algorithms, Database, Management Information System, Time Series Analysis, Statistical Computing, Applied Multivariate Statistics"
      ]
    }
  ];

  const certifications = [
    {
      name: "N8N Course`",
      issuer: "N8N",
      date: "2025",
      credentialId: "ac4d9b9790b60a122643b82afc03fedf"
    },
    {
      name: "Python Programmer Track",
      issuer: "DataCamp",
      date: "2019",
      credentialId: "#33,299"
    },
    {
      name: "Google Cloud Platform Fundamentals: Core Infrastructure",
      issuer: "Coursera",
      date: "2019",
      credentialId: "FUVMUCPBEYA8"
    },
    {
      name: "Building Chatbots in Python Course",
      issuer: "DataCamp",
      date: "2018",
      credentialId: "#7,360,706"
    },
    {
      name: "Deep Learning in Python Course",
      issuer: "DataCamp",
      date: "2017",
      credentialId: "#4,403,587"
    },
    {
      name: "Fundamentals of Cloud Computing",
      issuer: "Udemy",
      date: "2017",
      credentialId: "UC-PUQDUITF"
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
                <Card key={index} className="p-8 hover-lift fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
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
                <Card key={index} className="p-6 hover-lift fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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