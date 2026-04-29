import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const work = [
  {
    title: "AI & ML Developer",
    company: "Fiverr (Freelance)",
    period: "2023 – Present",
    location: "Remote",
    desc: "Delivering AI and Machine Learning solutions to clients including data preprocessing, ML model building, and Python-based automation. Focused on clean code, clear communication, and reliable delivery.",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Data Preprocessing"],
  },
  {
    title: "Python Developer",
    company: "Upwork (Freelance)",
    period: "2023 – Present",
    location: "Remote",
    desc: "Building Python-based solutions for international clients from data pipelines and feature engineering to Flask web tools. Emphasis on OOP principles and production-ready code.",
    tags: ["Python", "Flask", "Pandas", "OOP", "Feature Engineering", "Automation"],
  },
];

const education = [
  {
    degree: "BS in Artificial Intelligence",
    school: "Superior University Lahore",
    period: "Oct 2023 – Oct 2027",
    desc: "Studying AI fundamentals, Machine Learning, Computer Vision, Data Structures & Algorithms, and OOP with hands-on Python projects and real-world ML applications.",
    highlight: true,
  },
];

export const Experience = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="py-28 relative">
      <div className="container">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-accent uppercase font-medium">
            Career Path
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight">
            Professional <span className="text-gold">Experience</span>
          </h2>
            <p className="text-muted-foreground mt-4">
              Hands on freelancing since 2023 backed by a solid academic foundation in AI.
            </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-6 h-6 text-accent" />
            <h3 className="font-display text-2xl font-semibold">Work Experience</h3>
          </div>

          <div className="relative pl-8 sm:pl-16">
            <div className="absolute left-2 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent" />
            {work.map((w, i) => (
              <TimelineItem key={i} item={w} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="w-6 h-6 text-accent" />
            <h3 className="font-display text-2xl font-semibold">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((e, i) => (
              <EduCard key={i} item={e} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: any) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal relative mb-10 last:mb-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute -left-[26px] sm:-left-[42px] top-2 w-4 h-4 rounded-full bg-gradient-gold shadow-gold ring-4 ring-background animate-pulse-glow" />
      <div className="glass rounded-2xl p-6 hover:shadow-emerald hover:-translate-y-1 transition-all duration-500 group">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h4 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {item.title}
          </h4>
          <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
            {item.period}
          </span>
        </div>
        <p className="text-sm text-accent font-medium mb-1">{item.company}</p>
        {item.location && (
          <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
            <MapPin className="w-3 h-3" />
            {item.location}
          </p>
        )}
        <p className="text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t: string) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const EduCard = ({ item, delay }: any) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500 hover:shadow-gold relative overflow-hidden ${
        item.highlight ? "glass-gold glow-border" : "glass"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {item.highlight && (
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-gradient-gold text-accent-foreground px-2 py-0.5 rounded-full font-bold shadow-gold">
          Current
        </span>
      )}
      <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent inline-block mb-3">
        {item.period}
      </span>
      <h4 className="font-display text-lg font-semibold mb-1">{item.degree}</h4>
      <p className="text-sm text-accent mb-3">{item.school}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
    </div>
  );
};
