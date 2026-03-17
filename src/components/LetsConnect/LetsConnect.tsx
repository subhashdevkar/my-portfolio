import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const LetsConnect = () => {
    return (
        <div className="py-[60px] px-20 flex flex-col md:gap-24 md:flex-row md:justify-between">
            <div>
                <form action="" className="space-y-5">
                    <Input className="py-6 px-6 border-black border-2" placeholder="Your Name" />
                    <Input className="py-6 px-6 border-black border-2" placeholder="Email" />
                    <Input className="py-6 px-6 border-black border-2" placeholder="Your Website (if exists)" />
                    <Textarea className="py-6 px-6 border-black border-2" placeholder="How can i help you?" />
                </form>
                <div>
                    <Button>Get In Touch</Button>
                    <Button>

                    </Button>
                </div>
            </div>
            <div className="space-y-10">
                <div className="space-y-5">
                    <div className="text-5xl font-extrabold">
                        Let's <span className="">talk</span> for <br />
                        Something special
                    </div>
                    <p>I seek to push the limits of creativity to create high-engaging, user-friendly,
                        and memorable interactive experiences.
                    </p>
                </div>
                <p className="text-3xl font-semibold">subhashsdevkar@gmail.com</p>
            </div>
        </div>
    )
}

export default LetsConnect