type SkillBoxProp = {
    icon: string
    title: string
}
const SkillBox = ({ icon, title }: SkillBoxProp) => {
    return (
        <div className="flex aspect-square w-full max-w-44 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-black p-2 sm:gap-6 sm:p-3">
            <div className="size-10 shrink-0 sm:size-14">
                <img src={icon} className="mx-auto max-h-full w-auto object-contain" alt={title} />
            </div>
            <div className="line-clamp-2 text-center text-xs font-bold leading-tight sm:text-base md:text-xl">
                {title}
            </div>
        </div>
    )
}

export default SkillBox