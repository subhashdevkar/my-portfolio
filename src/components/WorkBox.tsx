import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

type WorkBoxProps = {
    work: {
        id: number
        title: string
        description: string
        image: string
        link: string
        mainTechnologies: string[]
    }
}

export default function WorkBox({ work }: WorkBoxProps) {
    return (
        <div className="group relative w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden dark:bg-card dark:border-border">

            {/* Image */}
            <div className="w-full aspect-video overflow-hidden bg-slate-100 dark:bg-muted">
                <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                <h3 className="font-bold text-xl text-slate-900 dark:text-card-foreground group-hover:text-primary transition-colors">
                    {work.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-muted-foreground line-clamp-3">
                    {work.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {work.mainTechnologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-2 py-0.5 text-xs font-medium">
                            {tech}
                        </Badge>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-6">
                    <Button
                        variant="outline"
                        onClick={() => window.open(work.link, "_blank")}
                        className="w-full gap-2 transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                        View Project
                    </Button>
                </div>
            </div>
        </div>
    )
}
