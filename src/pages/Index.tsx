import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        {/* <Certificates /> */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 AI Engineer Portfolio. Built with passion for artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
