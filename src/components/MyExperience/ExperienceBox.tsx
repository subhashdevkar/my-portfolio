import { LucideApple } from "lucide-react"

const ExperienceBox = () => {
    return (
        <div className="space-y-7 px-6 py-8 border border-[#71717A] bg-black text-white rounded-2xl">
            <div className="flex justify-between items-center">
                <div className="flex gap-8 items-center">
                    <LucideApple />
                    <div className="font-semibold text-2xl">Software engineer</div>
                </div>
                <div className="text-[#D4D4D8]">nov 2019-present</div>
            </div>
            <div className="text-[#D4D4D8]">
                As a Senior Software Engineer at Google,
                I played a pivotal role in developing innovative solutions
                for Google's core search algorithms. Collaborating with a dynamic team
                of engineers, I contributed to the enhancement of search accuracy and
                efficiency, optimizing user experiences for millions of users worldwide.
            </div>
        </div>
    )
}

export default ExperienceBox