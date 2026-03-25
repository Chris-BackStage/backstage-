// Simple in-memory rate limiter for API routes
// For production, replace with Redis-backed solution (e.g. Upstash)

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetAt: number;
}

export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 5, windowMs: 60_000 }
): RateLimitResult {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || entry.resetAt < now) {
    // New window
    store.set(identifier, { count: 1, resetAt: now + config.windowMs });
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetAt: now + config.windowMs,
    };
  }

  if (entry.count >= config.maxRequests) {
    return {
      success: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  entry.count++;
  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetAt: entry.resetAt,
  };
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}
