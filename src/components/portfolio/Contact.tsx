import { useState } from "react";
import { Globe, Linkedin, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";

const LINKEDIN_URL = "https://www.linkedin.com/in/maayerhassan786";
const PERSONAL_SITE =
  "https://maayer-portfolio.vercel.app/";

export const Contact = () => {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Hi Maayer,\n\n${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `https://www.linkedin.com/messaging/compose/?recipient=maayerhassan786&subject=${subject}&body=${body}`;
    toast.success("Redirecting to LinkedIn messages — let's connect!");
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container max-w-6xl">
        <div ref={ref} className="reveal text-center mb-16">
          <span className="text-sm tracking-[0.3em] text-accent uppercase font-medium">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold mt-4 tracking-tight">
            Let's <span className="text-gold">Build Something</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Open to freelance projects and collaborations in Python, Machine Learning and AI. Drop a message I'll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard
              icon={Linkedin}
              label="LinkedIn"
              value="in/maayerhassan786"
              href={LINKEDIN_URL}
            />
            <InfoCard
              icon={Globe}
              label="Personal Site"
              value="https://maayer-portfolio.vercel.app/"
              href={PERSONAL_SITE}
            />
            <InfoCard icon={MapPin} label="Location" value="Lahore, Punjab, Pakistan" />

            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl glass-gold flex items-center justify-center hover:-translate-y-1 hover:shadow-gold transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
                <a
                  href={PERSONAL_SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personal Website"
                  className="w-11 h-11 rounded-xl glass-gold flex items-center justify-center hover:-translate-y-1 hover:shadow-gold transition-all duration-300 group"
                >
                  <Globe className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 glass rounded-3xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your name"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500 group"
            >
              Send via LinkedIn
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon: Icon, label, value, href }: any) => {
  const content = (
    <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-emerald hover:-translate-y-1 transition-all duration-500 group">
      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-emerald group-hover:rotate-6 transition-transform">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-foreground font-medium truncate">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const Field = ({ label, value, onChange, placeholder, type = "text" }: any) => (
  <div>
    <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder:text-muted-foreground transition-all duration-300"
    />
  </div>
);
