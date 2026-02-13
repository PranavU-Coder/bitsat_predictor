import React from "react";
import githubLogo from "@/assets/logo/github.png";
import type { TeamMemberProps } from "@/lib/utils";

const TeamMember = ({
  image,
  name,
  role,
  githubLink,
  description,
}: TeamMemberProps) => {
  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="brutal-card w-full max-w-sm flex flex-col bg-[var(--brutal-bg)]">
      <div className="relative mb-6 border-4 border-[var(--brutal-border)] overflow-hidden bg-[var(--brutal-bg-secondary)] aspect-square">
        <img
          src={image}
          alt={`${name}'s profile`}
          onContextMenu={preventContextMenu}
          draggable={false}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute bottom-0 left-0 bg-[var(--brutal-accent)] text-white px-3 py-1 font-bold text-xs uppercase border-t-4 border-r-4 border-[var(--brutal-border)]">
          {role}
        </div>
      </div>

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="brutal-heading-md mb-1">{name}</h3>
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-btn p-2 min-w-0"
          aria-label="GitHub Profile"
        >
          <img
            src={githubLogo}
            alt="GitHub"
            className="w-6 h-6 invert dark:invert-0"
          />
        </a>
      </div>

      <div className="brutal-line mb-4"></div>

      <p className="brutal-text text-[var(--brutal-text-secondary)]">
        {description}
      </p>
    </div>
  );
};

export default TeamMember;
