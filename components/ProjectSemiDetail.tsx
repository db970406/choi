
interface IProjectSemiDetailComponent {
    projectName: string;
    duration?: string;
}

const ProjectSemiDetail = ({ projectName, duration }: IProjectSemiDetailComponent) => {
    return (
        <div
            className="flex flex-col items-center justify-center space-y-2 absolute font-semibold aspect-square"
        >
            <h1>{projectName}</h1>
            <a
                className="
                    flex items-center text-base space-x-2
                "
            >
                {duration ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>{duration}</p>
                    </>
                ) : null}
            </a>
        </div>
    );
};

export default ProjectSemiDetail;