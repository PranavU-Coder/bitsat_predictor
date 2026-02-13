import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t-4 border-black dark:border-white bg-[var(--brutal-bg)] mt-auto py-12">
      <div className="brutal-container flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="brutal-heading-sm mb-2">BITSAT PREDICTOR</h3>
          <p className="brutal-text-sm max-w-xs">
            Helping students make informed choices with data-driven predictions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="https://github.com/PranavU-Coder"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border-2 border-[var(--brutal-border)] hover:bg-[var(--brutal-accent)] hover:text-white transition-all shadow-[2px_2px_0_var(--brutal-shadow)] hover:shadow-[1px_1px_0_var(--brutal-shadow)] hover:translate-x-[1px] hover:translate-y-[1px]"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <div className="text-center md:text-right">
            <p className="brutal-text-sm font-bold">
              &copy; {new Date().getFullYear()} PREDICTOR
            </p>
            <p className="brutal-text-sm text-[var(--brutal-text-muted)]">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
