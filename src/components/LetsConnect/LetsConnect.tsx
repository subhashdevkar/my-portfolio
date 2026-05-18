import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/constants'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { FaTwitter } from 'react-icons/fa'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'

const LetsConnect = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [message, setMessage] = useState('')

    const [errors, setErrors] = useState<{
        name?: string
        email?: string
        message?: string
    }>({})

    const validateAndSetErrors = () => {
        const nextErrors: { name?: string; email?: string; message?: string } = {}

        if (!name.trim()) nextErrors.name = 'Please enter your name.'
        if (!email.trim()) nextErrors.email = 'Please enter your email.'
        if (!message.trim()) nextErrors.message = 'Please enter your message.'

        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateAndSetErrors()) return

        console.log(name, email, website, message)
        emailjs
            .send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                { name, email, website, message },
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            )
            .then(() => toast.success('Thank you! I will get back to you soon.'))
            .catch(() => toast.error('Something went wrong, try again'))
    }

    return (
        <div
            id="contact"
            className="flex flex-col gap-5 py-[40px] px-[16px] md:flex-row md:justify-between lg:py-[60px] lg:px-[80px] xl:gap-24 scroll-mt-20"
        >
            <div className="space-y-5 sm:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <Input
                            className={`py-7 px-6 border-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-black/15 ${errors.name ? 'border-red-500' : 'border-black'}`}
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500">{errors.name}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Input
                            type="email"
                            className={`py-7 px-6 border-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-black/15 ${errors.email ? 'border-red-500' : 'border-black'}`}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">{errors.email}</p>
                        )}
                    </div>

                    <Input
                        className={`py-7 px-6 border-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-black/15 ${errors.email ? 'border-black' : 'border-black'}`}
                        placeholder="Your Website (if exists)"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />

                    <div className="space-y-2">
                        <Textarea
                            className={`py-7 px-6 border-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-black/15 ${errors.message ? 'border-red-500' : 'border-black'}`}
                            placeholder="How can i help you?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {errors.message && (
                            <p className="text-sm text-red-500">{errors.message}</p>
                        )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-0.5 lg:gap-6">
                        <Button
                            className="text-xl font-extrabold border border-black p-6 bg-white text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-black hover:text-white"
                            type="submit"
                        >
                            Get In Touch
                        </Button>
                        <Button
                            type="button"
                            className="group p-6 bg-white transition-transform duration-200 hover:scale-105 active:scale-100 hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() =>
                                window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')
                            }
                        >
                            <FaLinkedinIn className="mx-1 size-5 text-current transition-colors" />
                        </Button>
                        <Button
                            type="button"
                            className="group p-6 bg-white transition-transform duration-200 hover:scale-105 active:scale-100 hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() =>
                                window.open(TWITTER_URL, '_blank', 'noopener,noreferrer')
                            }
                        >
                            <FaTwitter className="mx-1 size-5 text-current transition-colors" />
                        </Button>
                        <Button
                            type="button"
                            className="group p-6 bg-white transition-transform duration-200 hover:scale-105 active:scale-100 hover:bg-black active:bg-black border border-black text-black hover:text-white"
                            onClick={() =>
                                window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')
                            }
                        >
                            <FiGithub className="mx-1 size-5 text-current transition-colors" />
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
                    <p>
                        I aim to combine creativity and technology to build engaging,
                        user-friendly, and impactful digital experiences that leave a
                        lasting impression.
                    </p>
                </div>
                <p className="text-xl lg:text-3xl font-semibold">
                    subhashsdevkar@gmail.com
                </p>
            </div>
        </div>
    )
}

export default LetsConnect
