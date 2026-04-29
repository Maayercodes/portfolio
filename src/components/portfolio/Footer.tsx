import { Globe, Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/maayerhassan786";
const PERSONAL_SITE =
  "https://68a3f6123be877f3bb6a0e64--incredible-creponne-3410c8.netlify.app/";

export const Footer = () => (
  <footer className="border-t border-border py-10 relative">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center font-display font-bold text-accent-foreground text-sm shadow-gold">
          M
        </span>
        <span className="font-display font-semibold">
          Maayer Hassan<span className="text-gold">.</span>
        </span>
      </div>


      <p className="text-sm text-muted-foreground text-center sm:text-right">
        © {new Date().getFullYear()} Maayer Hassan · Crafted in Lahore with{" "}
        <span className="text-accent">precision</span>
      </p>
    </div>
  </footer>
);
