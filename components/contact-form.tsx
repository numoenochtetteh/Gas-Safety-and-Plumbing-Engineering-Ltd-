"use client"

import { useState, type FormEvent } from "react"
import { Loader2, Send, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { services } from "@/lib/data"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
  company: string // honeypot
}

const initialState: FormState = { name: "", email: "", phone: "", service: "", message: "", company: "" }

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!values.name.trim()) next.name = "Please enter your name."
    if (!values.email.trim()) next.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address."
    if (!values.phone.trim()) next.phone = "Please enter a phone number so we can call you back."
    if (!values.message.trim() || values.message.trim().length < 10)
      next.message = "Tell us a little more about the job (at least 10 characters)."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (values.company) return // honeypot triggered, silently ignore
    if (!validate()) {
      toast.error("Please check the highlighted fields.")
      return
    }

    setStatus("submitting")

    const serviceLabel = services.find((s) => s.slug === values.service)?.title ?? "General enquiry"
    const subject = `New enquiry: ${serviceLabel} — ${values.name}`
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Service: ${serviceLabel}`,
      "",
      values.message,
    ].join("\n")

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.setTimeout(() => {
      window.location.href = mailto
      setStatus("success")
      toast.success("Your email app is opening with your enquiry ready to send.")
    }, 600)
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-border bg-white p-10">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-700">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-brand-blue-950">Almost done</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm leading-relaxed">
          We've opened your email app with your enquiry pre-filled — just hit send. Prefer to talk now? Call us on{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-blue-700">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full bg-transparent"
          onClick={() => {
            setValues(initialState)
            setStatus("idle")
          }}
        >
          Send another enquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-white p-6 sm:p-8 space-y-5">
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={(e) => update("company", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Smith"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="07xxx xxxxxx"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="service">Service needed</Label>
          <Select value={values.service} onValueChange={(v) => update("service", v)}>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.shortTitle}
                </SelectItem>
              ))}
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us what's going on, your postcode, and the best time to reach you..."
          rows={5}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-blue-700 hover:bg-brand-blue-800"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send enquiry
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Prefer not to wait? Call us directly on{" "}
        <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-blue-700">
          {siteConfig.phoneDisplay}
        </a>
      </p>
    </form>
  )
}
