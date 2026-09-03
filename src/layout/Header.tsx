import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const STORAGE_KEY = "sanjay-theme";

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light") return true;
  if (stored === "dark") return false;

  return !window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Header = () => {
  const [isLight, setIsLight] = useState<boolean>(getInitialTheme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !isLight);
    document.documentElement.classList.toggle("light", isLight);
    window.localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
  }, [isLight]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveRoute = (href: string) => location.pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span
            className="size-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]"
            aria-hidden
          />
          <span className="font-mono text-[16px] uppercase tracking-tight text-card-foreground">
            Sanjay.Dev
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.href}
              data-status={isActiveRoute(item.href) ? "active" : undefined}
              className="nav-link text-[12px]">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={
              isLight ? "Switch to dark theme" : "Switch to light theme"
            }
            onClick={() => setIsLight(value => !value)}
            className="inline-flex size-9 items-center justify-center rounded-sm text-muted-foreground ring-1 ring-border transition-colors hover:bg-secondary hover:text-accent">
            {isLight ? (
              <Moon className="size-4" aria-hidden />
            ) : (
              <Sun className="size-4" aria-hidden />
            )}
          </button>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(value => !value)}
            className="inline-flex size-9 items-center justify-center rounded-sm text-muted-foreground ring-1 ring-border md:hidden">
            {isMobileMenuOpen ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-hairline bg-panel px-6 py-4 md:hidden">
          <ul className="grid gap-1">
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-sm px-2 py-2.5 font-mono text-xs uppercase tracking-widest ${
                    isActiveRoute(item.href)
                      ? "text-accent"
                      : "text-muted-foreground hover:bg-secondary hover:text-accent"
                  }`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
