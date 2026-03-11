type SkillBoxProp = {
    icon: string
    title: string
}
const SkillBox = ({ icon, title }: SkillBoxProp) => {
    return (
        <div className="size-44 border-2 border-black rounded-2xl flex flex-col justify-center items-center gap-8">
            <div className="size-14">
                <img src={icon} className="mx-auto" alt={title} />
            </div>
            <div className="text-xl font-bold">{title}</div>
        </div>
    )
}

export default SkillBox