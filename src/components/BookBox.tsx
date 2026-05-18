import { Button } from "./ui/button"

type BookBoxProps = {
    book: {
        id: number
        title: string
        image: string
        link: string
    }
}

export default function BookBox({ book }: BookBoxProps) {
    return (
        <div className="group relative w-full h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden dark:bg-card dark:border-border">
            {/* Image */}
            <div className="w-full aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-muted relative">
                <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 text-center">
                <h3 className="font-bold text-lg text-slate-900 dark:text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-4">
                    {book.title}
                </h3>

                {/* CTA */}
                <div className="mt-auto">
                    <Button
                        variant="outline"
                        onClick={() => window.open(book.link, "_blank")}
                        className="w-full gap-2 transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                        View Book
                    </Button>
                </div>
            </div>
        </div>
    )
}
