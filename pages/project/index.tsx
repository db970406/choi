import ImageHover from '@components/ImageHover';
import MainLayout from '@components/MainLayout';
import ProjectSemiDetail from '@components/ProjectSemiDetail';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import myProjects from "myProjects.json";
import ProjectDetail from '@components/ProjectDetail';

const Project: NextPage = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <MainLayout title="프로젝트">
            {selectedProject ? (
                <div className="flex flex-col">
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
                                    setSelectedProject={setSelectedProject}
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
                    {selectedProject !== null ? (
                        <ProjectDetail
                            {...myProjects[selectedProject - 1]}
                        />
                    ) : null}
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
                                    setSelectedProject={setSelectedProject}
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
            )
            }
        </MainLayout >
    );
};

export default Project;