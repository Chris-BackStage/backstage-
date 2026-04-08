"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type SubmitStatus = "idle" | "loading" | "success" | "error"

// ---------------------------------------------------------------------------
// Field-level error message helper
// ---------------------------------------------------------------------------

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-sans">
      <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

// ---------------------------------------------------------------------------
// Budget options
// ---------------------------------------------------------------------------

const BUDGET_OPTIONS = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "unsure", label: "Not sure yet" },
] as const

// ---------------------------------------------------------------------------
// Timeline options
// ---------------------------------------------------------------------------

const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "exploring", label: "Just exploring" },
] as const

// ---------------------------------------------------------------------------
// ContactForm component
// ---------------------------------------------------------------------------

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      useCase: "",
      _honey: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check — silently reject bots
    if (data._honey) {
      setStatus("success")
      return
    }

    setStatus("loading")
    setServerError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        throw new Error(
          payload?.message ?? "Something went wrong. Please try again."
        )
      }

      setStatus("success")
      reset()

      // Track conversion event if analytics are loaded
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "contact_form_submit", {
          event_category: "engagement",
          event_label: "contact_page",
        })
      }
    } catch (err) {
      setStatus("error")
      setServerError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or email us directly."
      )
    }
  }

  // -------------------------------------------------------------------------
  // Success state
  // -------------------------------------------------------------------------

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-olive/30 bg-olive/5 px-8 py-16 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-olive/10">
          <CheckCircle2 className="h-7 w-7 text-olive" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
          Message received.
        </h3>
        <p className="text-sm font-sans text-charcoal-400 leading-relaxed max-w-sm">
          Thanks for reaching out. We&apos;ll review your details and get back
          to you within one business day — usually the same afternoon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-sans font-medium text-aegean hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegean rounded"
        >
          Send another message
        </button>
      </div>
    )
  }

  // -------------------------------------------------------------------------
  // Form
  // -------------------------------------------------------------------------

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-labelledby="contact-heading"
      noValidate
      className="space-y-6"
    >
      {/* Honeypot — hidden from real users, catches bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="backstage-website">Website</label>
        <input
          id="backstage-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("_honey")}
        />
      </div>

      {/* Name + Email — two columns on wider screens */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="font-sans text-sm font-medium text-charcoal mb-1.5 block">
            Full name <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jordan Rivera"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(
              "font-sans",
              errors.name && "border-red-400 focus-visible:ring-red-400"
            )}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor="email" className="font-sans text-sm font-medium text-charcoal mb-1.5 block">
            Work email <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jordan@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(
              "font-sans",
              errors.email && "border-red-400 focus-visible:ring-red-400"
            )}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      {/* Company */}
      <div>
        <Label htmlFor="company" className="font-sans text-sm font-medium text-charcoal mb-1.5 block">
          Company / Organisation
        </Label>
        <Input
          id="company"
          type="text"
          autoComplete="organization"
          placeholder="Acme Co."
          className="font-sans"
          {...register("company")}
        />
        <FieldError message={errors.company?.message} />
      </div>

      {/* Use case */}
      <div>
        <Label htmlFor="useCase" className="font-sans text-sm font-medium text-charcoal mb-1.5 block">
          Tell us about your project{" "}
          <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="useCase"
          rows={5}
          placeholder="Describe what you're trying to automate or build. The more context, the better we can prepare for our first call."
          aria-invalid={!!errors.useCase}
          aria-describedby={errors.useCase ? "useCase-error" : undefined}
          className={cn(
            "font-sans resize-none",
            errors.useCase && "border-red-400 focus-visible:ring-red-400"
          )}
          {...register("useCase")}
        />
        <FieldError message={errors.useCase?.message} />
      </div>

      {/* Budget + Timeline — two columns */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Budget */}
        <div>
          <Label htmlFor="budget" className="font-sans text-sm font-medium text-charcoal mb-1.5 block">
            Approximate budget{" "}
            <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="budget"
                  aria-invalid={!!errors.budget}
                  className={cn(
                    "font-sans",
                    errors.budget && "border-red-400 focus-visible:ring-red-400"
                  )}
                >
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {BUDGET_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value} className="font-sans">
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.budget?.message} />
        </div>

        {/* Timeline */}
        <div>
          <Label htmlFor="timeline" className="font-sans text-sm font-medium text-charcoal mb-1.5 block">
            Desired timeline{" "}
            <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Controller
            name="timeline"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="timeline"
                  aria-invalid={!!errors.timeline}
                  className={cn(
                    "font-sans",
                    errors.timeline && "border-red-400 focus-visible:ring-red-400"
                  )}
                >
                  <SelectValue placeholder="Select a timeline" />
                </SelectTrigger>
                <SelectContent>
                  {TIMELINE_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value} className="font-sans">
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={errors.timeline?.message} />
        </div>
      </div>

      {/* Server error banner */}
      {status === "error" && serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
        >
          <AlertCircle
            className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600"
            aria-hidden="true"
          />
          <p className="text-sm font-sans text-red-700">{serverError}</p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting || status === "loading"}
        aria-busy={isSubmitting || status === "loading"}
      >
        {isSubmitting || status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>

      {/* Compliance note */}
      <p className="text-center text-xs font-sans text-charcoal-300 leading-relaxed">
        By submitting this form you agree to our{" "}
        <a
          href="/legal/privacy"
          className="underline underline-offset-2 hover:text-charcoal transition-colors"
        >
          Privacy Policy
        </a>
        . We will never sell or share your information. You can unsubscribe at
        any time.
      </p>
    </form>
  )
}
