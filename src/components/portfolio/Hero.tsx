import { useEffect, useState } from "react";
import { ArrowDown, Linkedin, Sparkles } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import maayerPhoto from "@/assets/maayer-photo.jpeg";

const roles = [
  "BS Artificial Intelligence Student",
  "Machine Learning Engineer",
  "AI Developer",
  "Python Developer",
  "Data Pipeline Builder",
];

export const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text === current) setTimeout(() => setDeleting(true), 1600);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text === "") {
            setDeleting(false);
            setRoleIdx((roleIdx + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 85
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-hero" />
        <ParticleBackground />
      </div>

      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground/80">
                Open to Freelance Opportunities
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6 animate-fade-in-up">
              <span className="text-emerald-gradient">Maayer</span>
             {" "}
              <span
                className="text-gold inline-block"
                style={{ backgroundSize: "200% 200%", animation: "gradient-shift 6s ease infinite" }}
              >
                Hassan
              </span>
            </h1>

            <div
              className="h-10 flex items-center justify-center lg:justify-start mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              <span className="font-display text-xl sm:text-2xl text-muted-foreground">
                I am a{" "}
                <span className="text-primary font-semibold border-r-2 border-accent pr-1">
                  {text}
                </span>
              </span>
            </div>

           <p
            className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
>
             BS Artificial Intelligence student at{" "}
            <span className="text-foreground font-semibold">Superior University Lahore</span>.
            I build end-to-end ML pipelines and intelligent systems using Python, Scikit-learn,
            Pandas, NumPy and Flask  turning real-world data into meaningful solutions.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              >
                View My Work
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/maayerhassan786"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border-accent/30 hover:border-accent text-foreground font-semibold transition-all duration-500 hover:-translate-y-1"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div
                className="absolute -inset-6 rounded-full opacity-70"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(43 75% 48%), hsl(45 90% 70%), hsl(158 70% 30%), hsl(43 75% 48%))",
                  animation: "spin-slow 12s linear infinite",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(43 75% 48%), hsl(45 90% 70%), hsl(158 70% 30%), hsl(43 75% 48%))",
                  animation: "spin-slow 8s linear infinite",
                }}
              />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-background ring-4 ring-background shadow-elegant">
                <img
                  src={maayerPhoto}
                  alt="Maayer Hassan — Python Developer & AI Student"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="absolute -top-4 -right-4 glass-gold rounded-2xl px-4 py-2 shadow-gold animate-float">
                <div className="text-xs text-muted-foreground">Freelancing</div>
                <div className="font-display font-bold text-primary">Since 2023</div>
              </div>
              <div
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2 shadow-elegant animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-xs text-muted-foreground">Based in</div>
                <div className="font-display font-bold text-primary">Lahore, PK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};
