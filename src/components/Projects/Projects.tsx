import { WORKS_DATA } from "@/constants"
import HeaderTitle from "../HeaderTitle"
import ProjectBox from "./ProjectBox"

const Projects = () => {
    return (
        <div id="projects" className="bg-black py-[40px] px-[16px] lg:py-[60px] lg:px-[80px] scroll-mt-20">
            <HeaderTitle title="My" boldTitle="Projects" bgBlack={true} />
            {WORKS_DATA.map((p, i) => (
                <ProjectBox key={i} project={p} />
            ))}
        </div>
    )
}

export default Projects