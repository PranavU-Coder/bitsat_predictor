import { NavLink } from "react-router-dom";

function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `brutal-nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="w-full border-b-4 border-black dark:border-white bg-[var(--brutal-bg)] sticky top-0 z-50">
      <div className="brutal-container h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[var(--brutal-accent)] border-2 border-[var(--brutal-border)]"></div>
          <h1 className="brutal-heading-sm hidden md:block">
            BITSAT // PREDICTOR
          </h1>
          <h1 className="brutal-heading-sm md:hidden">BITSAT // P</h1>
        </div>

        <nav className="flex items-center gap-2 md:gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/working" className={navLinkClass}>
            Working
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
