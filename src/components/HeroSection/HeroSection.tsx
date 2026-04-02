import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "@/constants"
import HeroImage from "../../assets/main-image.png"
import { FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";



import { Button } from "../ui/button"
const HeroSection = () => {
    return (
        <div id="home" className="flex flex-col-reverse gap-12 py-[40px] px-[16px] md:gap-0 md:flex-row lg:gap-0 lg:py-[60px] lg:px-[80px] scroll-mt-20">
            <div className="md:w-1/2">
                <div>
                    <h1 className="text-2xl lg:text-4xl leading-relaxed">
                        <span>Hello I'am </span><span className="font-extrabold">Subhash Devkar.</span><br />
                        <span className="font-extrabold">Mern Stack </span><span>Developer</span><br />
                        <span>Based In </span><span className="font-extrabold">India.</span>
                    </h1>
                    <h2 className="text-[#71717A] mt-4 xl:mt-8 text-sm lg:text-base">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                    </h2>
                    <div className="flex gap-8 mt-6 xl:mt-18">
                        <Button
                            className="group p-6 bg-white hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FaLinkedinIn className="size-5 mx-1 text-current transition-colors" />
                        </Button>
                        <Button className="group p-6 bg-white hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() => window.open(TWITTER_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FaTwitter className="size-5 mx-1 text-current transition-colors" />
                        </Button>
                        <Button className="group p-6 bg-white hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FiGithub className="size-5 mx-1 text-current transition-colors" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex items-center"><img src={HeroImage} className="border-b-2 border-black sm:border-none" alt="" /></div>
        </div>
    )
}

export default HeroSection