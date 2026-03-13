import HeaderTitle from "../HeaderTitle"
import ProjectBox from "./ProjectBox"

const Projects = () => {
    return (
        <div className="px-4 py-10 sm:px-20 bg-black sm:py-[60px]">
            <HeaderTitle title="My" boldTitle="Projects" bgBlack={true} />
            <ProjectBox />
        </div>
    )
}

export default Projects