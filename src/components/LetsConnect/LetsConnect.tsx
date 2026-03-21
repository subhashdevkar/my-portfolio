import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "@/constants";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react"
import emailjs from "@emailjs/browser";
import { toast } from "sonner";


const LetsConnect = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")
    const [message, setMessage] = useState("")

    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

    const validateAndSetErrors = () => {
        const nextErrors: { name?: string; email?: string; message?: string } = {}

        if (!name.trim()) nextErrors.name = "Please enter your name."
        if (!email.trim()) nextErrors.email = "Please enter your email."
        if (!message.trim()) nextErrors.message = "Please enter your message."

        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        validateAndSetErrors()

        console.log(name, email, website, message)
        emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, { name, email, website, message }, import.meta.env.VITE_EMAIL_PUBLIC_KEY).then(() => toast.success("Thank you! I will get back to you soon.")).catch(() => toast.error("Something went wrong, try again"))
    }

    return (
        <div className="lg:py-[60px] lg:px-20 sm:px-7 flex flex-col gap-5 xl:gap-24 md:flex-row md:justify-between">
            <div className="space-y-5 sm:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <Input
                            className={`py-7 px-6 border-2 ${errors.name ? "border-red-500" : "border-black"}`}
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                        <Input
                            type="email"
                            className={`py-7 px-6 border-2 ${errors.email ? "border-red-500" : "border-black"}`}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <Input
                        className={`py-7 px-6 border-2 ${errors.email ? "border-black" : "border-black"}`}
                        placeholder="Your Website (if exists)"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />

                    <div className="space-y-2">
                        <Textarea
                            className={`py-7 px-6 border-2 ${errors.message ? "border-red-500" : "border-black"}`}
                            placeholder="How can i help you?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-0.5 lg:gap-6">
                        <Button className="text-xl font-extrabold p-6" type="submit">
                            Get In Touch
                        </Button>
                        <Button
                            className="p-6"
                            onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FaLinkedin className="mx-1" />
                        </Button>
                        <Button className="p-6"
                            onClick={() => window.open(TWITTER_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FaTwitter className="mx-1" />
                        </Button>
                        <Button className="p-6"
                            onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}
                        >
                            <FaGithub className="mx-1" />
                        </Button>
                    </div>
                </form>
                {/* <div className="flex items-center gap-6">
                    <Button onClick={() => handleSubmit()} className="text-xl font-extrabold p-6 ">Get In Touch</Button>
                    <Button
                        className="p-6"
                        onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer")}
                    >
                        <FaLinkedin className="mx-1" />
                    </Button>
                    <Button className="p-6"
                        onClick={() => window.open(TWITTER_URL, "_blank", "noopener,noreferrer")}
                    >
                        <FaTwitter className="mx-1" />
                    </Button>
                    <Button className="p-6"
                        onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}
                    >
                        <FaGithub className="mx-1" />
                    </Button>
                </div> */}
            </div>
            <div className="space-y-5 sm:space-y-10 sm:w-1/2">
                <div className="space-y-5">
                    <div className="text-5xl font-extrabold">
                        Let's <span className="">talk</span> for <br />
                        Something special
                    </div>
                    <p>I seek to push the limits of creativity to create high-engaging, user-friendly,
                        and memorable interactive experiences.
                    </p>
                </div>
                <p className="text-xl lg:text-3xl font-semibold">subhashsdevkar@gmail.com</p>
            </div>
        </div>
    )
}

export default LetsConnect