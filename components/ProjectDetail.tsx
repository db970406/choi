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
        <div className="w-full flex ">
            <div
                className="w-full space-y-8"
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
                <p>
                    설명 : {description}
                </p>
            </div>

        </div>
    );
};

export default ProjectDetail;