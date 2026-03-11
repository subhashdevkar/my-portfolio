import HeaderTitle from "../HeaderTitle"
import ExperienceBox from "./ExperienceBox"

const MyExperience = () => {
    return (
        <div className="space-y-16 bg-black py-[60px] sm:px-20 px-2.5">
            <HeaderTitle bgBlack={true} title="My" boldTitle="Experience" />
            <div className="space-y-8">
                <ExperienceBox />
                <ExperienceBox />
                <ExperienceBox />
            </div>
        </div>
    )
}

export default MyExperience