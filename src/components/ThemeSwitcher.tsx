
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("flex items-center", className)}>
      <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value as "light" | "dark" | "desktop")}>
        <ToggleGroupItem value="light" aria-label="Light mode" className="h-9 px-3">
          <Sun className={`h-5 w-5 ${theme === "light" ? "text-portfolio-purple" : ""}`} />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Dark mode" className="h-9 px-3">
          <Moon className={`h-5 w-5 ${theme === "dark" ? "text-portfolio-purple" : ""}`} />
        </ToggleGroupItem>
        <ToggleGroupItem value="desktop" aria-label="Desktop mode" className="h-9 px-3">
          <Monitor className={`h-5 w-5 ${theme === "desktop" ? "text-portfolio-purple" : ""}`} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ThemeSwitcher;
