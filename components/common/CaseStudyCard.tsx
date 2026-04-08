"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CaseStudyCardProps {
  slug: string
  title: string
  category: string
  client: string
  summary: string
  image?: string | null
  className?: string
}

export function CaseStudyCard({
  slug,
  title,
  category,
  client,
  summary,
  image,
  className,
}: CaseStudyCardProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setRotate({ x: -y * 10, y: x * 10 })
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.a
        ref={ref}
        href={`/work/${slug}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: hovered ? 1.03 : 1,
          boxShadow: hovered
            ? "0 30px 60px -12px rgba(15,19,23,0.3), 0 0 0 1px rgba(194,166,96,0.2)"
            : "0 4px 16px -4px rgba(15,19,23,0.1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={cn(
          "group relative flex flex-col rounded-2xl border border-bone-400 bg-white overflow-hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegean focus-visible:ring-offset-2",
          "block",
          className
        )}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Image area */}
        <div
          className="relative h-56 overflow-hidden"
          style={{ transform: "translateZ(20px)" }}
        >
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-bone-300 to-bone-400">
              <span className="text-4xl font-heading font-light text-charcoal-300 tracking-tight">
                {title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <Badge variant="bone" className="absolute bottom-4 left-4 text-xs">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div
          className="flex flex-1 flex-col gap-3 p-6"
          style={{ transform: "translateZ(10px)" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-300 font-sans">
            {client}
          </p>
          <h3 className="font-heading text-lg font-semibold text-charcoal leading-snug group-hover:text-aegean transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm font-sans text-charcoal-400 leading-relaxed flex-1">{summary}</p>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-aegean font-sans mt-2">
            View case study
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Gold shimmer on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          animate={{
            background: hovered
              ? "linear-gradient(135deg, rgba(194,166,96,0.06) 0%, transparent 60%)"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </div>
  )
}
