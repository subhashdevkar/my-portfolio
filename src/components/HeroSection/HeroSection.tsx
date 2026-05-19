import { useEffect, useState } from 'react'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/constants'
import HeroImage from '../../assets/main-image.png'
import { FaTwitter } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa6'

import { Button } from '../ui/button'

const HERO_ROLES = [
    'Software Engineer',
    'MERN Stack Developer',
    'Full Stack Developer',
] as const

const ROLE_ROTATE_MS = 2800
const ROLE_SLOT_CLASS =
    'flex min-h-[2.75rem] shrink-0 items-center whitespace-nowrap leading-tight sm:min-h-[3.25rem] lg:min-h-[3.75rem]'

function RotatingRoles({
    activeIndex,
    reduceMotion,
}: {
    activeIndex: number
    reduceMotion: boolean
}) {
    const stepPercent = 100 / HERO_ROLES.length

    return (
        <span
            className="inline-block max-w-full align-bottom font-extrabold"
            aria-live="polite"
            aria-atomic="true"
        >
            <span className="relative block h-[2.75rem] overflow-hidden sm:h-[3.25rem] lg:h-[3.75rem] [perspective:500px]">
                <span
                    className={
                        reduceMotion
                            ? 'flex flex-col'
                            : 'flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none'
                    }
                    style={{
                        transform: `translate3d(0, -${activeIndex * stepPercent}%, 0)`,
                    }}
                >
                    {HERO_ROLES.map((role) => (
                        <span key={role} className={ROLE_SLOT_CLASS}>
                            {role}
                        </span>
                    ))}
                </span>
            </span>
        </span>
    )
}

const HeroSection = () => {
    const [roleIndex, setRoleIndex] = useState(0)
    const reduceMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

    useEffect(() => {
        const id = window.setInterval(() => {
            setRoleIndex((i) => (i + 1) % HERO_ROLES.length)
        }, ROLE_ROTATE_MS)
        return () => window.clearInterval(id)
    }, [])

    return (
        <div
            id="home"
            className="flex flex-col-reverse gap-12 py-[40px] px-[16px] md:gap-0 md:flex-row lg:gap-0 lg:py-[60px] lg:px-[80px] scroll-mt-20 border-2 border-b-none border-black shadow-xl"
        >
            <div className="md:w-1/2">
                <div>
                    <h1 className="text-2xl lg:text-4xl leading-relaxed">
                        <span>Hello I'am </span>
                        <span className="font-extrabold">Subhash Devkar.</span>
                        <br />
                        <RotatingRoles
                            activeIndex={roleIndex}
                            reduceMotion={reduceMotion}
                        />
                        <br />
                        <span>Based In </span>
                        <span className="font-extrabold">India.</span>
                    </h1>
                    <h2 className="text-[#71717A] mt-4 xl:mt-8 text-sm lg:text-base">
                        I’m a MERN stack developer passionate about building modern and
                        scalable web applications. I focus on writing clean, maintainable
                        code and creating seamless user experiences. I’m constantly learning
                        and pushing myself to improve, with the goal of building
                        high-quality digital products that make a real impact.
                    </h2>
                    <div className="flex gap-8 mt-6 xl:mt-18">
                        <Button
                            className="group p-6 bg-white transition-transform duration-200 hover:scale-105 active:scale-100 hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() =>
                                window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')
                            }
                        >
                            <FaLinkedinIn className="size-5 mx-1 text-current transition-colors" />
                        </Button>
                        <Button
                            className="group p-6 bg-white transition-transform duration-200 hover:scale-105 active:scale-100 hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() =>
                                window.open(TWITTER_URL, '_blank', 'noopener,noreferrer')
                            }
                        >
                            <FaTwitter className="size-5 mx-1 text-current transition-colors" />
                        </Button>
                        <Button
                            className="group p-6 bg-white transition-transform duration-200 hover:scale-105 active:scale-100 hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() =>
                                window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')
                            }
                        >
                            <FiGithub className="size-5 mx-1 text-current transition-colors" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
                <div className="overflow-hidden sm:border-none border-b-2 border-black">
                    <img
                        src={HeroImage}
                        className="block max-h-[min(70vh,520px)] w-full object-cover object-top"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
