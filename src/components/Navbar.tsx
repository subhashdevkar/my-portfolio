import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-2xl font-bold bg-linear-to-tr from-primary to-blue-600 bg-clip-text text-transparent">
          Subhash Devkar
        </div>
        <div className="flex items-center gap-4">
          {/* Navigation Links could go here */}
          <Button className="rounded-full font-medium">Contact Now</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar