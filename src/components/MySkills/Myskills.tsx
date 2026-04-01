import { TECH_STACKS } from "@/constants"
import HeaderTitle from "../HeaderTitle"
import SkillBox from "./SkillBox"

const Myskills = () => {
    return (
        <div id="skills" className="space-y-16 scroll-mt-20">
            <HeaderTitle title="My" boldTitle="Skills" bgBlack={false} />
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
                {TECH_STACKS.map((s) => (
                    <SkillBox key={s.id} icon={s.icon} title={s.name} />
                ))}
            </div>
        </div>
    )
}

export default Myskills