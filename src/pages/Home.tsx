// import AboutMe from "@/components/AboutMe"
// import Experience from "@/components/Experience"
// import Main from "@/components/Main"
import AboutMe from "@/components/AboutMe/AboutMe"
// import BooksSection from "@/components/BooksSection/BooksSection"
import Footer from "@/components/Footer/Footer"
import HeroSection from "@/components/HeroSection/HeroSection"
import LetsConnect from "@/components/LetsConnect/LetsConnect"
import MyExperience from "@/components/MyExperience/MyExperience"
import Myskills from "@/components/MySkills/Myskills"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects/Projects"
import { SectionReveal } from "@/components/SectionReveal"
// import TechStacks from "@/components/TechStacks"
// import Works from "@/components/Works"

const Home = () => {
    return (
        <div className=" font-sora container mx-auto max-w-7xl xl:px-0 sm:px-4 px-2.5 min-h-screen bg-background">
            <Navbar />
            <div className="container mx-auto">
                {/* <Main /> */}
                <SectionReveal>
                    <HeroSection />
                </SectionReveal>
                <SectionReveal delayMs={60}>
                    <Myskills />
                </SectionReveal>
                <SectionReveal delayMs={60}>
                    <MyExperience />
                </SectionReveal>
                <SectionReveal delayMs={60}>
                    <AboutMe />
                </SectionReveal>
                {/* <SectionReveal delayMs={60}><BooksSection /></SectionReveal> */}
                <SectionReveal delayMs={60}>
                    <Projects />
                </SectionReveal>
                <SectionReveal delayMs={60}>
                    <LetsConnect />
                </SectionReveal>
                <SectionReveal delayMs={60}>
                    <Footer />
                </SectionReveal>
                {/* <TechStacks /> */}
                {/* <Works /> */}
                {/* <Experience /> */}
                {/* <AboutMe /> */}
            </div>
        </div>
    )
}

export default Home