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
                                className="text-4xl text-gray-400 transition hover:text-fuchsia-500"
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
                    className='flex items-center space-x-4 '
                >
                    <OpenLinkButton link={github} siteName="?????????" />
                    <OpenLinkButton link={velog} siteName="?????????" />
                    <div className='animate-bounce text-fuchsia-500'>
                        ??? ????????? ?????? ????????? ????????? ???????????? ??????????????????!
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetail;