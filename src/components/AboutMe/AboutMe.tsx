import aboutMeBoy from '../../assets/about-me-boy.png'
import HeaderTitle from '../HeaderTitle'
const AboutMe = () => {
    return (
        <div
            id="about"
            className="grid grid-cols-1 place-items-center gap-5 py-[40px] px-[16px] sm:gap-20 lg:grid-cols-2 lg:py-[60px] lg:px-[80px] scroll-mt-20"
        >
            <div className="overflow-hidden rounded-2xl border-2 border-black shadow-[0_12px_40px_-12px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out motion-safe:hover:scale-[1.02]">
                <img src={aboutMeBoy} alt="" className="block w-full" />
            </div>
            <div>
                <HeaderTitle bgBlack={false} boldTitle="Me" title="About" />
                <div className="space-y-4">
                    <p>
                        I’m a passionate and self-driven MERN stack developer who enjoys
                        building full-stack web applications using modern technologies like
                        React.js, Node.js, Express, and MongoDB. I focus on creating clean,
                        scalable, and user-friendly solutions while paying attention to
                        performance and code quality. For me, development is not just about
                        writing code—it’s about solving real problems and continuously
                        improving with every project I build..
                    </p>
                    <p>
                        I started my journey into web development with a strong curiosity to
                        understand how things work behind the scenes. Since then, I’ve been
                        consistently learning, practicing, and building projects to sharpen
                        my skills. I’m currently focused on mastering full-stack development
                        and exploring advanced concepts to create more efficient and
                        impactful applications.
                    </p>
                    <p>
                        When I’m not coding, I spend time learning new technologies,
                        improving my problem-solving skills, or exploring ideas that can be
                        turned into real-world applications. I believe in continuous growth
                        and pushing myself every day to become a better developer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
