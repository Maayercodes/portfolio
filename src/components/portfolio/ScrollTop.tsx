import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const up = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={up}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-gold text-accent-foreground shadow-gold flex items-center justify-center transition-all duration-500 hover:shadow-glow hover:-translate-y-1 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
