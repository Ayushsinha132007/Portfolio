import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full bg-secondary/10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ scale: isDark ? 0 : 1, opacity: isDark ? 0 : 1, rotate: isDark ? -90 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ scale: isDark ? 1 : 0, opacity: isDark ? 1 : 0, rotate: isDark ? 0 : 90 }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="w-5 h-5" />
      </motion.div>
    </button>
  );
}
