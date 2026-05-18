import { useEffect, useRef, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionRevealProps = {
  children: ReactNode
  className?: string
  /** Extra delay before the transition runs after the section enters the viewport (ms). */
  delayMs?: number
}

export function SectionReveal({ children, className, delayMs = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduceMotion) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduceMotion])

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:translate-y-0 motion-reduce:opacity-100",
        !reduceMotion && !visible && "translate-y-10 opacity-0",
        !reduceMotion && visible && "translate-y-0 opacity-100",
        !reduceMotion &&
        "transition-[opacity,transform] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        className
      )}
      style={
        reduceMotion || !visible
          ? undefined
          : { transitionDelay: `${delayMs}ms` }
      }
    >
      {children}
    </div>
  )
}
