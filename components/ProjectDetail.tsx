import Image from 'next/image';
import Link from 'next/link';

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

}
const ProjectDetail = ({ id, skills, link, projectName, description, whatILearned, duration }: IProjectDetail) => {
    return (
        <div className="w-full">
            <div className='flex items-end space-x-4'>
                <Link
                    href={link}
                >
                    <a
                        target="_blank"
                    >
                        <h1
                            className="text-4xl"
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
                    <div>
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
            <div>
                설명 : {description}
            </div>
        </div>
    );
};

export default ProjectDetail;