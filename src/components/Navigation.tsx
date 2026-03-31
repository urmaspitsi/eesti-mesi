import { useState } from "react";

const navItems = [
  { label: "Mesilased", href: "#mesilased" },
  { label: "Lamavtaru", href: "#lamavtaru" },
  { label: "Mee kogumine", href: "#mee-kogumine" },
  { label: "Meeliigid", href: "#meeliigid" },
  { label: "Eesti tõud", href: "#eesti-mesilased" },
  { label: "Haigused", href: "#haigused" },
  { label: "Kalender", href: "#kalender" },
  { label: "Apiteraapia", href: "#apiteraapia" },
  { label: "Retseptid", href: "#retseptid" },
  { label: "Viited", href: "#viited" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-sm">
      <div className="container mx-auto section-padding flex items-center justify-between h-14">
        <a href="#" className="font-serif font-bold text-lg text-primary-foreground tracking-tight">
          🐝 Mesindus
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/70 hover:text-honey font-sans text-sm font-medium transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground p-1"
          aria-label="Menüü"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/95 border-t border-primary-foreground/10 pb-4">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-2.5 text-primary-foreground/80 hover:text-honey font-sans text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
