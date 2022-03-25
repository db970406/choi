import ImageHover from '@components/ImageHover';
import MainLayout from '@components/MainLayout';
import ProjectSemiDetail from '@components/ProjectSemiDetail';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import ProjectDetail from '@components/ProjectDetail';
import LayoutIdAnimation from '@components/LayoutIdAnimation';
import { readdirSync, readFileSync } from 'fs';
import matter from "gray-matter"

export interface IProjectDetail {
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

const Project: NextPage<{ myProjects: IProjectDetail[] }> = ({ myProjects }) => {
    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
    const [whatILearnedId, setWhatILearnedId] = useState<number | null>(null);

    const projectName = myProjects[selectedProjectId! - 1]?.projectName
    return (
        <MainLayout title={projectName ? projectName : "프로젝트"}>
            <div
                className="w-full"
            >
                {selectedProjectId ? (
                    <div className="flex flex-col space-y-7">
                        <div
                            className="w-full flex justify-around items-center space-x-10"
                        >
                            {myProjects?.map(project =>
                                <motion.div
                                    key={project.id}
                                    layoutId={project.projectName}
                                    className={`
                                        rounded-full
                                        ${selectedProjectId === project.id ? "ring-2 ring-fuchsia-500 ring-offset-4" : null}
                                    `}
                                >
                                    <ImageHover
                                        projectId={project.id}
                                        setSelectedProjectId={setSelectedProjectId}
                                        imgPath={`/${project.projectName}.png`}
                                        size={50}
                                    >
                                        <ProjectSemiDetail
                                            projectName={project.projectName}
                                        />
                                    </ImageHover>
                                </motion.div>
                            )}
                        </div>
                        <div className='flex flex-col md:flex-row space-y-7'>
                            {selectedProjectId !== null ? (
                                <ProjectDetail
                                    {...myProjects[selectedProjectId - 1]}
                                />
                            ) : null}

                            <div
                                className='flex flex-col w-full'
                            >
                                <h1
                                    className="text-center text-xl"
                                >
                                    프로젝트 특징 및 진행 시 이슈
                                </h1>
                                {myProjects[selectedProjectId - 1].whatILearned.map((learned) =>
                                    <motion.div
                                        key={learned.id}
                                        layoutId={String(learned.id)}
                                        className='
                                                w-full px-5 py-3
                                                flex justify-between
                                                group
                                                cursor-pointer
                                                text-gray-500 hover:text-fuchsia-500
                                            '
                                        onClick={() => setWhatILearnedId(learned.id)}
                                    >
                                        <h1
                                            className='group-hover:scale-105 transition'
                                        >
                                            {learned.title}
                                        </h1>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="
                                            h-6 w-6
                                            group-hover:scale-105 transition
                                        "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </motion.div>
                                )}
                                <LayoutIdAnimation
                                    id={whatILearnedId}
                                    setId={setWhatILearnedId}
                                    data={myProjects[selectedProjectId - 1].whatILearned}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className="w-full flex flex-col flex-wrap items-center text-2xl space-y-5"
                    >
                        <h1>보고 싶은 프로젝트를 선택해주세요!</h1>
                        <div
                            className="w-full flex justify-around items-center space-x-10"
                        >
                            {myProjects?.map(project =>
                                <motion.div
                                    key={project.id}
                                    layoutId={project.projectName}
                                >
                                    <ImageHover
                                        projectId={project.id}
                                        setSelectedProjectId={setSelectedProjectId}
                                        imgPath={`/${project.projectName}.png`}
                                        size={200}
                                    >
                                        <ProjectSemiDetail
                                            projectName={project.projectName}
                                            duration={project.duration}
                                        />
                                    </ImageHover>
                                </motion.div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </MainLayout >
    );
};

export async function getStaticProps() {
    const myProjects = readdirSync("./myProjects").map((file) => {
        const mdFile = readFileSync(`./myProjects/${file}`, 'utf-8')
        return matter(mdFile).data
    })
    return {
        props: {
            myProjects
        }
    }
}

export default Project;