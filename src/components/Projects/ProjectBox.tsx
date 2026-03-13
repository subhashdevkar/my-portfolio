import { LucideExternalLink } from "lucide-react"

const ProjectBox = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-10 py-5">
            <div className="sm:w-1/2"><img className="w-[343px] h-[397.73px] my-10 rounded-4xl sm:w-[530px]" src="./cookie-stuff.png" alt="" /></div>
            <div className="sm:w-1/2">
                <div className="space-y-7 text-white">
                    <p className="font-extrabold text-5xl">01</p>
                    <p className="font-bold text-3xl">Crypto Screener Application</p>
                    <p className="text-[#71717A]">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to specimen book.
                    </p>
                    <LucideExternalLink />
                </div>
            </div>
        </div>
    )
}

export default ProjectBox