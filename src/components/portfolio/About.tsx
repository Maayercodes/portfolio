import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  Braces,
  Brain,
  Code2,
  Database,
  GraduationCap,
  Quote,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
const journey = [
  {
    year: "2023",
    title: "BS Artificial Intelligence",
    desc: "Enrolled at Superior University Lahore for BS in AI.",
  },
  {
    year: "2023",
    title: "Started Freelancing",
    desc: "Joined Fiverr and began taking on real-world client work.",
  },
  {
    year: "2024",
    title: "Machine Learning Focus",
    desc: "Deep dive into Pandas, NumPy, Scikit-learn & Feature Engineering.",
  },
  {
    year: "2025",
    title: "Building Real-World AI Systems",
    desc: "Developing ML pipelines, Flask apps and data-driven solutions.",
  },
];
const expertise = [
  { icon: Brain, label: "Machine Learning" },
  { icon: Terminal, label: "Python & Scikit-learn" },
  { icon: Database, label: "Pandas & NumPy" },
  { icon: Code2, label: "Flask & Deployment" },
];

const stats = [
  { icon: Braces, value: 2, suffix: "+", label: "Years Freelancing" },
  { icon: BookOpen, value: 10, suffix: "+", label: "Core Technologies" },
  { icon: Award, value: 10, suffix: "+", label: "Projects Built" },
  { icon: GraduationCap, value: 4, suffix: "yr", label: "BS AI Program" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1800;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              setN(Math.floor(p * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

export const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-28 relative">
      <div className="container">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-accent uppercase font-medium">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight">
            My <span className="text-gold">Journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-6">
            <div className="glass rounded-3xl p-8 sm:p-10 reveal relative overflow-hidden">
              <Quote className="absolute -top-2 -right-2 w-24 h-24 text-accent/10" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  Who I Am
                </span>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                I'm <span className="text-foreground font-semibold">Maayer Hassan</span> an{" "}
                <span className="text-accent font-semibold">AI Developer</span> and Machine Learning
                enthusiast based in{" "}
                <span className="text-foreground font-semibold">Lahore, Pakistan</span>. I am
                pursuing a{" "}
                <span className="text-foreground font-semibold">
                BS in Artificial Intelligence
                </span>{" "}
                at <span className="text-accent font-semibold">Superior University Lahore</span>.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                My toolkit spans{" "}
                <span className="text-foreground font-semibold">Python, Scikit-learn, Pandas, NumPy</span>,{" "}
                <span className="text-foreground font-semibold">Flask</span>, and{" "}
                <span className="text-foreground font-semibold">Feature Engineering</span>
                . I build end-to-end ML pipelines and data driven solutions from raw data
                preprocessing to model deployment.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently deep-diving into{" "}
                <span className="text-accent font-semibold">Machine Learning</span>,{" "}
                <span className="text-foreground font-semibold">Data Structures & Algorithms</span>, and{" "}
                <span className="text-foreground font-semibold">Computer Vision</span>
                . I love solving real-world problems with clean, intelligent systems that actually work.
              </p>
              <div className="mt-7 pt-6 border-t border-border">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Core Expertise
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {expertise.map((e) => {
                    const Icon = e.icon;
                    return (
                      <div
                        key={e.label}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-secondary/60 border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 group cursor-default"
                      >
                        <Icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-foreground">{e.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="glass-gold rounded-3xl p-8 reveal">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-accent" />
                <h3 className="font-display text-lg font-semibold">Key Milestones</h3>
              </div>
              <div className="relative pl-6 sm:pl-8">
                <div className="absolute left-1.5 sm:left-2.5 top-1 bottom-1 w-px bg-gradient-to-b from-accent via-primary to-transparent" />
                {journey.map((j) => (
                  <div key={j.year} className="relative pb-5 last:pb-0">
                    <div className="absolute -left-[18px] sm:-left-[26px] top-1 w-3 h-3 rounded-full bg-gradient-gold ring-2 ring-background shadow-gold" />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-base font-bold text-emerald-gradient">
                        {j.year}
                      </span>
                      <span className="font-semibold text-foreground">{j.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{j.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="reveal glass-gold rounded-2xl p-6 text-center group hover:-translate-y-2 transition-all duration-500 hover:shadow-gold"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="font-display text-3xl font-bold text-gold">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
