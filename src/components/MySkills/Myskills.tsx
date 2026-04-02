import { TECH_STACKS } from "@/constants"
import HeaderTitle from "../HeaderTitle"
import SkillBox from "./SkillBox"

const Myskills = () => {
    return (
        <div id="skills" className="space-y-16 scroll-mt-20 py-[40px] px-[16px] lg:py-[60px] lg:px-[80px]">
            <HeaderTitle title="My" boldTitle="Skills" bgBlack={false} />
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-6 md:grid-cols-3 md:gap-x-10 md:gap-y-8 lg:grid-cols-4 lg:gap-x-12 xl:gap-x-16">
                {TECH_STACKS.map((s) => (
                    <SkillBox key={s.id} icon={s.icon} title={s.name} />
                ))}
            </div>
        </div>
    )
}

export default Myskills