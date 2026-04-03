import HeaderTitle from "../HeaderTitle"

const BOOKS_COMPLETED = [
  "Rich Dad Poor Dad",
  "The Psychology of Money",
  "Atomic Habits",
  "Rich Dad's Cashflow Quadrant",
  "Rich Dad's Guide to Investing",
  "The 5 AM Club",
  "The Miracle Morning",
  "Who Moved My Cheese?",
] as const

const BOOKS_TO_READ = [
  "Shoe Dog",
  "Dhirubhaism",
  "Thinking, Fast and Slow",
  "Meditation",
  "The Hard Thing About Hard Things",
  "Grit",
] as const

const BooksSection = () => {
  return (
    <section
      id="books"
      className="scroll-mt-20 space-y-12 py-[40px] px-[16px] lg:space-y-16 lg:py-[60px] lg:px-[80px]"
      aria-label="Books I have completed and books I plan to read"
    >
      <HeaderTitle title="My" boldTitle="Bookshelf" bgBlack={false} />

      <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-center text-xl font-extrabold md:text-left">
            Completed reading
          </h2>
          <ul className="space-y-3">
            {BOOKS_COMPLETED.map((title) => (
              <li
                key={title}
                className="rounded-2xl border-2 border-black bg-background px-4 py-3 text-sm font-medium sm:px-5 sm:text-base"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-center text-xl font-extrabold md:text-left">
            Planning to read
          </h2>
          <ul className="space-y-3">
            {BOOKS_TO_READ.map((title) => (
              <li
                key={title}
                className="rounded-2xl border-2 border-dashed border-black bg-muted/40 px-4 py-3 text-sm font-medium text-foreground sm:px-5 sm:text-base"
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BooksSection
