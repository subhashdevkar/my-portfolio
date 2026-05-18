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
            className={`group flex flex-col sm:flex-row ${isEven ? "sm:flex-row-reverse" : ""} justify-between items-center gap-4 sm:gap-20 py-5 transition-opacity duration-300`}
        >
            {/* Image first for mobile; order alternates on larger screens via flex-row / flex-row-reverse */}
            <div className="sm:w-1/2">
                <img
                    className="my-10 h-[397.73px] w-[343px] rounded-4xl object-cover transition-[transform,box-shadow] duration-500 ease-out motion-safe:group-hover:scale-[1.02] motion-safe:group-hover:shadow-2xl motion-safe:group-hover:shadow-black/30 sm:w-[530px]"
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
                        className="cursor-pointer transition-transform duration-200 motion-safe:hover:scale-110 motion-safe:hover:text-white"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectBox