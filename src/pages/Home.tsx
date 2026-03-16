// import AboutMe from "@/components/AboutMe"
// import Experience from "@/components/Experience"
// import Main from "@/components/Main"
import AboutMe from "@/components/AboutMe/AboutMe"
import LetsConnect from "@/components/LetsConnect/LetsConnect"
import MyExperience from "@/components/MyExperience/MyExperience"
import Myskills from "@/components/MySkills/Myskills"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects/Projects"
// import TechStacks from "@/components/TechStacks"
// import Works from "@/components/Works"

const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto">
                {/* <Main /> */}
                <Myskills />
                <MyExperience />
                <AboutMe />
                <Projects />
                <LetsConnect />
                {/* <TechStacks /> */}
                {/* <Works /> */}
                {/* <Experience /> */}
                {/* <AboutMe /> */}
            </div>
        </div>
    )
}

export default Home