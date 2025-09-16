import profilePhoto from "@/assets/profile-photo.jpg";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Ulwan - AI Engineer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>

            <div className="fade-in-right">
              <Card className="p-8 hover-lift border-0 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Passionate AI Engineer
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As an AI Engineer, I specialize in developing intelligent systems that solve real-world problems.
                    With expertise spanning machine learning, deep learning, and natural language processing,
                    I bridge the gap between cutting-edge research and practical applications.
                  </p>

                  <p>
                    My journey in AI began with a fascination for how machines can learn and adapt.
                    Today, I work with organizations to implement AI solutions that drive innovation,
                    improve efficiency, and create competitive advantages in their respective industries.
                  </p>

                  <p>
                    I believe in the transformative power of AI to enhance human capabilities and
                    am committed to developing ethical, responsible AI systems that benefit society.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-foreground">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      MLOps
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Machine Learning
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Deep Learning
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Computer Vision
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      LLM
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      AI Agents
                    </Badge>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">📧 ulwan.nashihun@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="font-medium">📍 Jakarta, Indonesia</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;