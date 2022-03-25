import Image from 'next/image';
import Link from 'next/link';
import { IProjectDetail } from 'pages/project';
import OpenLinkButton from './OpenLinkButton';

const ProjectDetail = ({ skills, link, projectName, description, duration, github, velog }: IProjectDetail) => {
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
                            className="flex flex-col items-center"
                        >
                            <Image
                                src={`/${skill}.png`}
                                width={60}
                                height={60}
                                placeholder="blur"
                                blurDataURL={`/${skill}.png`}
                            />
                            <p className='text-xs'>{skill}</p>
                        </div>
                    )}
                </div>
                <p
                    className="break-words whitespace-pre-wrap"
                >
                    {description}
                </p>
                <div
                    className='flex space-x-4 items-center '
                >
                    <OpenLinkButton link={github} siteName="깃허브" />
                    <OpenLinkButton link={velog} siteName="벨로그" />
                    <div className='animate-bounce text-fuchsia-500'>
                        ⬅ 움짤과 함께 자세한 설명은 벨로그를 참고해주세요!
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetail;