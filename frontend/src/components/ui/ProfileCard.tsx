import githubLogo from '@/assets/logo/github.png';
import type { TeamMemberProps } from '@/lib/utils';

const TeamMember = ({ image, name, role, githubLink, description }: TeamMemberProps) => {
    const preventContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    return (
        <div className='cardbase w-[512px] h-[580px] flex flex-col'>
            <img
                src={image}
                alt={`${name}'s profile image`}
                onContextMenu={preventContextMenu}
                draggable={false}
                className="relative inset-0 w-full h-96 rounded-[46px] p-2 object-cover flex-shrink-0"
            />

            <div className='relative flex items-center mx-5 my-2 font-satoshi flex-shrink-0'>
                <div className=''>
                    <p className="text-xl font-semibold text-accent">{name}</p>
                    <p className="text-accent/60 font-geist-mono text-sm">{role}</p>
                </div>
                <button
                    onClick={() => window.open(githubLink, '_blank')}
                    className="flex justify-center items-center cursor-pointer ml-auto w-16 bg-primary/70 rounded-lg h-12"
                    aria-label="Open GitHub profile"
                >
                    <img
                        src={githubLogo}
                        alt="GitHub logo"
                        onContextMenu={preventContextMenu}
                        draggable={false}
                        className="w-8 rounded-xl"
                    />
                </button>
            </div>
            <p className='text-white/70 text-[14px] px-5 tracking-tight pt-2 pb-4 font-outfit flex-grow overflow-y-auto'>
                {description}
            </p>
        </div>
    );
}

export default TeamMember;
