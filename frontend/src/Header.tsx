import { NavLink, useLocation } from "react-router-dom";

const map = {
  "/": "BITSAT-Predictor",
  "/working": "How It Works",
  "/about": "About",
  default: "BITSAT Branch Predictor",
} as const;

function Header() {
  const location = useLocation();
  const path = location.pathname in map ? location.pathname : "default";
  const title = map[path as keyof typeof map];

  const navButtonClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full transition ${
      isActive
        ? "bg-violet-700 text-white shadow-xl"
        : "bg-slate-950 text-cyan-300 hover:bg-slate-800"
    }`;

  return (
    <header className="w-full">
      <nav className="relative flex items-center justify-end p-4">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-blue-100 text-3xl font-semibold font-mono">
          {title}
        </h1>
        <div className="flex gap-2">
          <NavLink to="/" className={navButtonClass}>
            Home
          </NavLink>
          <NavLink to="/working" className={navButtonClass}>
            Working
          </NavLink>
          <NavLink to="/about" className={navButtonClass}>
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
