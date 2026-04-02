import aboutMeBoy from "../../assets/about-me-boy.png"
import HeaderTitle from "../HeaderTitle"
const AboutMe = () => {
    return (
        <div id="about" className="grid grid-cols-1 place-items-center gap-5 py-[40px] px-[16px] sm:gap-20 lg:grid-cols-2 lg:py-[60px] lg:px-[80px] scroll-mt-20">
            <div>
                <img src={aboutMeBoy} alt="" />
            </div>
            <div>
                <HeaderTitle bgBlack={false} boldTitle="Me" title="About" />
                <div className="space-y-4">
                    <p>I'm a passionate, self-proclaimed designer who specializes in
                        full stack development (React.js & Node.js). I am very enthusiastic
                        about bringing the technical and visual aspects of digital products
                        to life. User experience, pixel perfect design, and writing clear,
                        readable, highly performant code matters to me.</p>
                    <p>I began my journey as a web developer in 2015, and since then, I've
                        continued to grow and evolve as a developer, taking on new challenges
                        and learning the latest technologies along the way. Now, in my early
                        thirties, 7 years after starting my web development journey, I'm building
                        cutting-edge web applications using modern technologies such as Next.js,
                        TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                    <p>When I'm not in full-on developer mode, you can find me hovering around on
                        twitter or on indie hacker, witnessing the journey of early startups or
                        enjoying some free time. You can follow me on Twitter where I share
                        tech-related bites and build in public, or you can follow me on GitHub.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe