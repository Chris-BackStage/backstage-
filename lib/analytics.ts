// Analytics abstraction — supports Plausible, GA4, or none
// Controlled by NEXT_PUBLIC_ANALYTICS_PROVIDER env var

type AnalyticsEvent = {
  name: string;
  props?: Record<string, string | number | boolean>;
};

export function trackEvent({ name, props }: AnalyticsEvent): void {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "none";

  if (provider === "plausible" && typeof window !== "undefined") {
    // @ts-expect-error — Plausible global
    if (typeof window.plausible === "function") {
      // @ts-expect-error
      window.plausible(name, { props });
    }
    return;
  }

  if (provider === "ga4" && typeof window !== "undefined") {
    // @ts-expect-error — GA4 global
    if (typeof window.gtag === "function") {
      // @ts-expect-error
      window.gtag("event", name, props);
    }
    return;
  }
}

export function trackPageView(url?: string): void {
  trackEvent({ name: "pageview", props: { url: url ?? window.location.pathname } });
}

export function trackContactForm(budget?: string): void {
  trackEvent({ name: "contact_form_submit", props: { budget: budget ?? "unknown" } });
}

export function trackNewsletterSignup(): void {
  trackEvent({ name: "newsletter_signup" });
}
