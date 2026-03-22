import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "@/constants"
import HeroImage from "../../assets/main-image.png"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


import { Button } from "../ui/button"
const HeroSection = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 className="text-5xl">
                        <span>Hello I'am </span><span className="font-extrabold">Subhash Devkar.</span><br />
                        <span className="font-extrabold">Mern Stack </span><span>Developer</span><br />
                        <span>Based In </span><span className="font-extrabold">India.</span>
                    </h1>
                    <h2 className="text-[#71717A]">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                    </h2>
                    <div className="flex gap-8">
                        <Button
                            className="p-6 bg-white hover:bg-black active:bg-black border border-black"
                            onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FaLinkedin className="size-5 mx-1 bg-black hover:bg-white" />
                        </Button>
                        <Button className="p-6 bg-white hover:bg-black active:bg-black border border-black"
                            onClick={() => window.open(TWITTER_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FaTwitter className="size-5 mx-1 bg-black hover:bg-white" />
                        </Button>
                        <Button className="p-6 bg-white hover:bg-black active:bg-black border border-black"
                            onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FiGithub className="size-5 mx-1 bg-black hover:bg-white" />
                        </Button>
                    </div>
                </div>
            </div>
            <div><img src={HeroImage} alt="" /></div>
        </div>
    )
}

export default HeroSection