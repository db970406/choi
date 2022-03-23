import Image from 'next/image';
import Link from 'next/link';
import OpenLinkButton from './OpenLinkButton';

interface IProjectDetail {
    id: number;
    skills: string[];
    projectName: string;
    description: string;
    link: string;
    whatILearned: {
        id: number;
        title: string;
        content: string;
    }[];
    duration: string;
    velog: string;
    github: string;
}

const ProjectDetail = ({ id, skills, link, projectName, description, whatILearned, duration, github, velog }: IProjectDetail) => {
    return (
        <div className="w-full ">
            <div
                className="w-full space-y-8 md:px-16"
            >
                <div className='flex items-end space-x-4'>
                    <Link
                        href={link}
                    >
                        <a
                            target="_blank"
                        >
                            <h1
                                className="text-4xl text-gray-400 hover:text-fuchsia-500 transition"
                            >
                                {projectName}
                            </h1>
                        </a>
                    </Link>
                    <p>{duration}</p>
                </div>
                <div
                    className="flex space-x-4"
                >
                    {skills.map(skill =>
                        <div
                            key={skill}
                        >
                            <Image
                                src={`/${skill}.png`}
                                width={60}
                                height={60}
                                placeholder="blur"
                                blurDataURL={`/${skill}.png`}
                            />
                        </div>
                    )}
                </div>
                <p
                    className="break-words whitespace-pre-wrap"
                >
                    {description}
                </p>
                <div
                    className='flex space-x-4'
                >
                    <OpenLinkButton link={github} siteName="깃허브" />
                    <OpenLinkButton link={velog} siteName="벨로그" />
                </div>
            </div>

        </div>
    );
};

export default ProjectDetail;