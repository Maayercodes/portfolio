import { Brain, Database, Sparkles, Terminal, Wrench } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const categories = [
  {
    icon: Terminal,
    title: "Programming & Tools",
    skills: ["Python", "HTML", "CSS", "Git", "GitHub", "Jupyter Notebook", "Google Colab"],
  },
  {
    icon: Database,
    title: "Data & Analysis",
    skills: ["Pandas", "NumPy", "Feature Engineering", "Data Cleaning", "Data Preprocessing"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Scikit-learn", "Supervised Learning", "Model Training & Evaluation", "Random Forest", "Classification", "Regression"],
  },
  {
    icon: Wrench,
    title: "Web & Deployment",
    skills: ["Flask", "Joblib", "REST APIs", "Model Deployment"],
  },
  {
    icon: Sparkles,
    title: "Core CS Foundations",
    skills: ["Object-Oriented Programming", "Data Structures & Algorithms", "Problem Solving"],
  },
];

const topSkills = ["Machine Learning", "Python", "Scikit-learn"];

export const Skills = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="py-28 relative">
      <div className="container">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-accent uppercase font-medium">
            Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight">
            Technical <span className="text-gold">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My core stack built around Python, powered by Machine Learning, and refined through real-world projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 reveal">
          <div className="glass-gold rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Core Strengths
                </div>
                <div className="font-display font-semibold text-foreground">Most used in projects</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end flex-1">
              {topSkills.map((s) => (
                <span
                  key={s}
                  className="text-sm px-4 py-1.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return <SkillCard key={cat.title} cat={cat} Icon={Icon} delay={i * 100} />;
          })}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ cat, Icon, delay }: any) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal glass rounded-3xl p-6 group hover:-translate-y-3 transition-all duration-700 hover:shadow-emerald glow-border relative"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 shadow-emerald group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="font-display text-lg font-semibold mb-4 text-foreground">{cat.title}</h3>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((s: string) => (
          <span
            key={s}
            className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground border border-border hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};