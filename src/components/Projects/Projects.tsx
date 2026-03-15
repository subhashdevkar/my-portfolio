import { WORKS_DATA } from "@/constants"
import HeaderTitle from "../HeaderTitle"
import ProjectBox from "./ProjectBox"

const Projects = () => {
    return (
        <div className="px-4 py-10 sm:px-20 bg-black sm:py-[60px]">
            <HeaderTitle title="My" boldTitle="Projects" bgBlack={true} />
            {WORKS_DATA.map((p, i) => (
                <ProjectBox key={i} project={p} />
            ))}
        </div>
    )
}

export default Projects