"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full divide-y divide-bone-400", className)}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-none">
          <AccordionTrigger className="text-base font-medium font-sans text-charcoal py-5 hover:text-aegean">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-charcoal-500 text-sm leading-relaxed pb-6">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
