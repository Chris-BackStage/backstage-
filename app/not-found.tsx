import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold tracking-widest uppercase text-gold font-sans mb-4">
        404
      </p>
      <h1 className="font-heading text-display-lg font-semibold text-charcoal mb-4 tracking-tight">
        Nothing here.
      </h1>
      <p className="max-w-md text-base font-sans text-charcoal-400 leading-relaxed mb-8">
        The page you&apos;re looking for has moved, doesn&apos;t exist, or was automated out of existence.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild variant="primary" size="lg">
          <Link href="/">Back to homepage</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </div>
  )
}
