import useAppSeo from "@/lib/hooks/useAppSeo";
import TeamMember from "@/components/ui/ProfileCard";
import { TEAM_MEMBERS } from "@/lib/utils";

const Team = () => {
  useAppSeo({
    title: "People Behind This Project",
    description: "Feel free to follow their profiles.",
  });

  return (
    <main className="min-h-screen bg-gray-950">
      <div className="text-white pt-24 px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center">
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
