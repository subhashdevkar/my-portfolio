import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { RESUME_URL } from "@/constants"
import { cn } from "@/lib/utils"

import { Button } from "./ui/button"
import { RxDownload } from "react-icons/rx";


const NAV_LINKS = [
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Contact me", href: "#contact" },
] as const

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  const linkClass =
    "text-sm font-medium text-foreground transition-colors hover:text-black md:text-[15px]"

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b-2 border-black bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/85"
      aria-label="Main navigation"
    >
      <div className="container mx-auto grid h-14 max-w-7xl grid-cols-2 items-center gap-2 px-2.5 sm:h-16 sm:px-4 md:grid-cols-[1fr_auto_1fr] md:gap-3 xl:px-0">
        <div className="flex min-w-0 justify-start">
          <a
            href="#home"
            className="truncate text-lg font-normal text-foreground sm:text-xl"
            onClick={() => setOpen(false)}
          >
            <span>Subhash </span>
            <span className="font-extrabold">Devkar</span>
          </a>
        </div>

        <div className="hidden items-center justify-center gap-4 whitespace-nowrap md:flex lg:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3 md:min-w-0">
          <Button
            asChild
            className="hidden rounded-md font-semibold px-4 md:inline-flex"
          >
            <a href={RESUME_URL} download target="_blank" rel="noopener noreferrer">
              Resume
              <RxDownload className="size-4" />
            </a>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn(
              "shrink-0 border border-black bg-white text-black hover:bg-black hover:text-white md:hidden"
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t-2 border-black bg-background md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="container mx-auto flex max-w-7xl flex-col gap-1 px-2.5 py-3 sm:px-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button
            asChild
            className="mt-2 w-full rounded-md font-semibold "
          >
            <a href={RESUME_URL} download target="_blank" rel="noopener noreferrer">
              Download resume
              <RxDownload className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
