type ExperienceBoxProps = {
    experience: {
        id: number
        companyLogo: string
        role: string,
        description: string
        companyName: string,
        link: string
        from: string,
        to: string
    }
}

const ExperienceBox = ({ experience }: ExperienceBoxProps) => {
    const even = experience.id % 2 === 0
    return (
        <div className={`space-y-7 px-6 py-8 border transition-[transform,box-shadow] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-xl motion-safe:hover:shadow-black/20 ${even ? "bg-[#27272A]" : "bg-black"} border-[#71717A] text-white rounded-2xl`}>
            <div className="md:flex space-y-8 md:space-y-0 md:justify-between md:items-center">
                <div className="flex gap-8 items-center">
                    <img className="size-8 cursor-pointer" onClick={() => window.open(experience.link, "_blank")} src={experience.companyLogo} alt="" />
                    <div className="font-semibold text-2xl">{experience.role} At {experience.companyName}</div>
                </div>
                <div className="text-[#D4D4D8]">{experience.from} - {experience.to}</div>
            </div>
            <div className="text-[#D4D4D8] space-y-2">
                {/* <p className="text-lg font-bold cursor-pointer" onClick={() => window.open(experience.link, "_blank")}>{experience.companyName}</p> */}
                <p>{experience.description}</p>
            </div>
        </div>
    )
}

export default ExperienceBox