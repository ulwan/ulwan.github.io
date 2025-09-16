import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Sr. Machine Learning Engineer",
      company: "PT. Global Tiket Network  -  Tiket.com",
      location: "Jakarta, Indonesia",
      period: "11/2019 - Present",
      description: [
        "AI Agentic Tools Comparison. Conducted a comparative analysis of cutting-edge Agentic AI frameworks including Google's ADK (Agent Development Kit), Microsoft’s AutoGen, and LangGraph. Built an end-to-end AI assistant capable of vacation planning from inspiration to booking hotels and flights using each tool. Delivered actionable recommendations and best-practice documentation for future AI agent development.",
        "Explored and utilized N8N to design automated workflows, including a smart alerting system that monitors service logs in Kibana and sends real-time notifications to Slack. Additionally, developed an internal chatbot powered by MCP and integrated with N8N to provide employees with instant access to company policies, rules, benefits, and other resources.",
        "Itinerary Generation with RAG. Designed an itinerary generation system using a Retrieval-Augmented Generation (RAG) approach. Employed Milvus for vector storage of hotel and activity inventory, and deployed LLaMA 3.1-70B with GPU-powered self-hosted models for scalable, intelligent responses.",
        "Cross-Selling & Product Recommendations. Developed and deployed a cross-selling and product recommendation system integrated into the homepage, resulting in a double-digit improvement in conversion rate.",
        "Search Results Ranking & Recommendations. Improved SRP (Search Results Page) ranking by incorporating context-aware ranking for nearby locations, regions, areas, and cities. Also developed intercept-based recommendation logic, driving double-digit conversion growth.",
        "Deep Learning-Based Image Scoring. Developed a deep learning service for image evaluation, incorporating scene detection, OCR, NSFW, blur, and watermark classification. Achieved significant cost savings compared to legacy solutions.",
        "Internal Model Serving Engine. Built an internal low-code model serving tool using YAML-based configuration, enabling rapid API deployment. Reduced boilerplate code by ~47% and accelerated model deployment timelines.",
        "Smart Bot Detection System. Architected and implemented a smart bot detection system to manage millions of daily traffic events. Leveraged Google Dataflow for real-time streaming and windowing, with inference distributed via Pub/Sub. Achieved double-digit reductions in bot traffic.",
        "CPC Optimization for Google Hotel Ads. Built a CPC (Cost-Per-Click) Recommendation Pipeline to optimize bidding in Google Hotel Ads. This system led to a double-digit increase in conversion rates, improving ad spend efficiency.",
        "Inventory Merging. Developed ML APIs to detect and merge duplicate inventories listings, improving inventory quality and user experience across platforms.",
        "Search Not Purchase (SNP) Users Nudging System. Designed architecture and developed ML-based APIs to nudge users who search but do not purchase products bookings. Delivered double-digit conversion uplifts through personalized push notifications.",
        "Pre-Transaction Fraud Detection. Built a real-time fraud detection service to flag potentially fraudulent transactions before they are completed. Currently operating under shadow mode for validation.",
        "Dynamic Pricing Engine. Implemented a dynamic pricing pipeline that adjusts base fares and convenience fees based on user segmentation. Runs daily to optimize pricing strategies and user value perception.",
        "AI-Driven Content Generation. Designed and deployed a content generation pipeline for product descriptions using fine-tuned transformer models, enabling scalable and high-quality content creation.",
        "Review Scoring Pipeline. Developed a scalable review scoring pipeline featuring sentiment analysis, topic modeling, curse word detection, typo correction, and language identification. Successfully processed millions of user reviews.",
        "Search Autocomplete Enhancement. Integrated ML models with Elasticsearch using painless scripting, enhancing relevance and accuracy of search autocomplete results."
      ],
      technologies: []
    },
    {
      title: "Sr. Data Scientist",
      company: "PT. Bhinneka Mentari Dimensi  -  Bhinneka.com",
      location: "Jakarta, Indonesia",
      period: "10/2017 - 11/2019",
      description: [
        "Product Image search. Building image search system and vector database based on inventory. Fine tune Deeplearning model using our internal inventory and store the embedding in the database.",
        "E-commerce product scraping and mapping with internal products. Build e-commerce scraping pipeline to know popular / hot products to boost in marketing/ ads.",
        "Chatbot poC to handle common question like stock, order, product details etc, based on CS historical data",
        "Product Recommendation. Building product recommendations based on user preference."
      ],
      technologies: []
    },
    {
      title: "Data Scientist",
      company: "PT. Emerio Indonesia",
      location: "Jakarta, Indonesia",
      period: "02/2017 - 10/2017",
      description: [
        "Built an in-house AutoML framework by developing end-to-end scripts from scratch, covering multiple regression and classification methods, and integrated the solution with internal company tools."
      ],
      technologies: []
    },
    {
      title: "Data Analyst",
      company: "PT. Cheil Jedang Indonesia",
      location: "Jakarta, Indonesia",
      period: "10/2016 - 02/2017",
      description: [
        "Performed business and financial analytics, including daily sales reporting, store-level financial cash audits, and inventory taking  to ensure accuracy and operational efficiency.",
        "Developed market basket analysis models to identify customer purchasing patterns, enabling data-driven campaign strategies and optimized product bundling for promotions."
      ],
      technologies: []
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
              <div key={index} className={`relative flex items-center mb-12 fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
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
          {/* <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 hover-lift fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;