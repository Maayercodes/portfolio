import { ExternalLink, Github, Images } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import portfolioImg from "@/assets/portfolio_image.png";
import titanicImg from "@/assets/titanic_ship.jpg";
import hadithBotImg from "@/assets/hadith_chatbot.png";
import phishGuardImg from "@/assets/phish_guard.jpg";

const projects = [
{
  title: "ML Prediction Pipeline",
  desc: "End-to-end ML pipeline on the Titanic dataset classification and regression tasks with data cleaning, feature engineering, and model evaluation. Best results: SVM 81.6% accuracy, Random Forest 73.4% R².",
  tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  gradient: "from-teal-900 to-emerald-800",
  image: titanicImg,
  github: "https://github.com/Maayercodes/Ml-prediction-pipeline",
},
 
{
  title: "Portfolio Website",
  desc: "Personal developer portfolio built with React, TypeScript and Tailwind CSS showcasing ML projects, skills and experience. Deployed on Vercel.",
  tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
  gradient: "from-emerald-900 to-amber-800",
  image: portfolioImg,
  github: "https://github.com/Maayercodes/Maayer-Portfolio",
  
},
{
  title: "Hadith Chatbot",
  desc: "A Flask-based chatbot trained on Hadith data takes a prompt and retrieves relevant Hadiths based on the topic or keyword. Built with a custom-trained model for intelligent Islamic text search.",
  tags: ["Python", "Flask", "NLP", "Machine Learning", "Chatbot"],
  gradient: "from-emerald-900 to-teal-800",
  image: hadithBotImg,
  github: "https://github.com/Maayercodes/Hadith_Chatbot",
},
{
  title: "Phish Guard",
  desc: "ML-based phishing detection system that classifies URLs as Safe or Phishing. Trained on 10,000+ real URLs from OpenPhish and PhishTank using Random Forest Classifier deployed as a Flask web app.",
  tags: ["Python", "Flask", "Scikit-learn", "Random Forest", "Pandas", "Joblib"],
  gradient: "from-red-900 to-emerald-800",
  image: phishGuardImg,
  github: "https://github.com/Maayercodes/Phish_Guard",
},
];

export const Projects = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="py-28 relative">
      <div className="container">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-accent uppercase font-medium">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight">
            Featured <span className="text-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of Python, data, and ML projects that showcase my learning journey and
            freelance work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ p, delay }: any) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative rounded-3xl overflow-hidden glass hover:-translate-y-2 transition-all duration-700 hover:shadow-emerald"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
        {p.image && (
          <img
            src={p.image}
            alt={p.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
          />
        )}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl group-hover:scale-150 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((t: string) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <a
            href={p.github || "https://github.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-4 h-4" /> Code
          </a>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
