import useAppSeo from "@/lib/hooks/useAppSeo";
import TeamMember from "@/components/ui/ProfileCard";
import { TEAM_MEMBERS } from "@/lib/utils";

const Team = () => {
  useAppSeo({
    title: "People Behind This Project",
    description: "Feel free to follow their profiles.",
  });

  return (
    <main className="min-h-screen bg-[var(--brutal-bg)] pb-24">
      <div className="brutal-container pt-12 md:pt-24">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border-2 border-[var(--brutal-border)] bg-[var(--brutal-accent)] text-white font-bold uppercase mb-4">
            The Architects
          </div>
          <h1 className="brutal-heading-lg mb-6">OUR TEAM</h1>
          <p className="brutal-text-lg max-w-2xl mx-auto">
            The minds behind the predictor. We build things that work.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {TEAM_MEMBERS.map((member) => (
            <TeamMember
              key={member.name}
              image={member.image}
              name={member.name}
              role={member.role}
              githubLink={member.githubLink}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;
