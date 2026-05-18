import Footer from "@/components/Footer/Footer"
import { READ_BOOKS, BOOKS_TO_READ } from "@/constants"
import BookBox from "@/components/BookBox"
import Navbar from "@/components/Navbar"

const WannaKnowMore = () => {
    return (
        <div className="font-sora container mx-auto max-w-7xl xl:px-0 sm:px-4 px-2.5 min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto flex-1 py-16 px-4 md:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text inline-block pb-2">
                        Wanna Know More
                    </h1>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                        A glimpse into the books I've read and the ones on my reading list.
                    </p>
                </div>

                {/* Read Books Section */}
                <div className="mb-24">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <span className="w-12 h-[2px] bg-primary/30"></span>
                        <h2 className="text-3xl font-semibold text-center text-slate-800 dark:text-slate-200">
                            Read Books
                        </h2>
                        <span className="w-12 h-[2px] bg-primary/30"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {READ_BOOKS.map((book) => (
                            <BookBox key={book.id} book={book} />
                        ))}
                    </div>
                </div>

                {/* Books to Read Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <span className="w-12 h-[2px] bg-primary/30"></span>
                        <h2 className="text-3xl font-semibold text-center text-slate-800 dark:text-slate-200">
                            Books to Read
                        </h2>
                        <span className="w-12 h-[2px] bg-primary/30"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {BOOKS_TO_READ.map((book) => (
                            <BookBox key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default WannaKnowMore