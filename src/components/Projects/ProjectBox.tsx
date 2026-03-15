import { LucideExternalLink } from "lucide-react"
type ProjectBoxProps = {
    project: {
        id: number
        title: string
        description: string
        image: string
        link: string
    }
}
const ProjectBox = ({ project }: ProjectBoxProps) => {
    const isEven = project.id % 2 === 0;

    return (
        <div
            className={`flex flex-col sm:flex-row ${isEven ? "sm:flex-row-reverse" : ""} justify-between items-center gap-4 sm:gap-20 py-5`}
        >
            {/* Image first for mobile; order alternates on larger screens via flex-row / flex-row-reverse */}
            <div className="sm:w-1/2">
                <img
                    className="w-[343px] h-[397.73px] my-10 rounded-4xl sm:w-[530px]"
                    src={project.image}
                    alt=""
                />
            </div>

            {/* Text second for mobile; position swaps on larger screens when flex is reversed */}
            <div className="sm:w-1/2">
                <div className="space-y-7 text-white">
                    <p className="font-extrabold text-5xl">0{project.id}</p>
                    <p className="font-bold text-3xl">{project.title}</p>
                    <p className="text-[#71717A]">{project.description}</p>
                    <LucideExternalLink
                        onClick={() => window.open(project.link, "_blank")}
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectBox