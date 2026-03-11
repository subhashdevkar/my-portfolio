import { WORK_EXPERIENCE } from "../constants";
import { Badge } from "./ui/badge";

const Experience = () => {
    return (
        <section id="experience" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Work Experience
            </h2>

            <div className="space-y-12">
                {WORK_EXPERIENCE.map((experience, index) => (
                    <div
                        key={experience.id}
                        className="flex flex-col md:flex-row gap-8 items-center bg-card/50 p-8 rounded-xl border shadow-sm"
                    >
                        {/* Details Section - Alternates order */}
                        <div className={`w-full md:w-1/2 space-y-4 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                            <div className="space-y-2">
                                <h3 className="font-bold text-2xl">
                                    {experience.role}
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">
                                        {experience.companyName}
                                    </span>
                                    <span>•</span>
                                    <span>
                                        {experience.from} - {experience.to}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {experience.workOnTech.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="w-full md:w-1/2">
                            <p className="text-muted-foreground leading-relaxed">
                                {experience.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience