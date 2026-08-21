import { faqs as allFaqs } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

export function FaqAccordion({ limit }: { limit?: number }) {
  const faqs = limit ? allFaqs.slice(0, limit) : allFaqs
  return (
    <Reveal>
      <Accordion type="single" collapsible className="rounded-2xl border border-border bg-white px-2 sm:px-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`item-${i}`}>
            <AccordionTrigger className="text-base font-semibold text-brand-blue-950 hover:no-underline px-2 sm:px-2">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed px-2 sm:px-2 text-[15px]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  )
}
