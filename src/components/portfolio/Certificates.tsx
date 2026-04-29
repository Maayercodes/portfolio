import { BookOpen, Target } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const tracks = [
  {
    title: "Machine Learning",
    focus: "Supervised learning, classification, regression, model evaluation",
    status: "Ongoing",
  },
  {
    title: "Python & Scikit-learn",
    focus: "Core language, OOP, ML pipelines, clean code",
    status: "Ongoing",
  },
  {
    title: "Data Engineering",
    focus: "Pandas, NumPy, feature engineering, data preprocessing",
    status: "Ongoing",
  },
  {
    title: "Model Deployment",
    focus: "Flask, Joblib, REST APIs, lightweight web apps",
    status: "Practiced",
  },
  {
    title: "Computer Vision",
    focus: "Image processing, CV fundamentals, applied AI",
    status: "In Progress",
  },
  {
    title: "BS Artificial Intelligence",
    focus: "Superior University Lahore — 2023 to 2027",
    status: "Active Student",
  },
];

export const Certificates = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="certificates" className="py-28 relative">
      <div className="container">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-accent uppercase font-medium">
            Always Learning
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight">
            Learning <span className="text-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          What I'm actively building and learning grounded in real projects and continuous growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((t, i) => (
            <TrackCard key={t.title} t={t} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrackCard = ({ t, delay }: any) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group glass rounded-2xl p-6 hover:-translate-y-2 hover:shadow-gold transition-all duration-500 relative overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors duration-700" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:rotate-12 transition-transform duration-500">
            <BookOpen className="w-6 h-6 text-accent-foreground" />
          </div>
          <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 font-semibold">
            {t.status}
          </span>
        </div>
        <h3 className="font-display text-base font-semibold mb-2 group-hover:text-accent transition-colors leading-snug">
          {t.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{t.focus}</p>
        <div className="flex items-center gap-2 text-xs text-accent">
          <Target className="w-4 h-4" />
          <span>Actively pursuing</span>
        </div>
      </div>
    </div>
  );
};
