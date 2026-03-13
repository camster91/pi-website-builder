// Simple in-memory rate limiter (5 requests per 60 seconds per user)
// For production scale, swap this for @upstash/ratelimit with Redis

const requests = new Map<string, number[]>()

export const ratelimit = {
  async limit(identifier: string): Promise<{ success: boolean }> {
    const now = Date.now()
    const windowMs = 60_000
    const maxRequests = 5

    const timestamps = (requests.get(identifier) || []).filter(t => now - t < windowMs)
    if (timestamps.length >= maxRequests) {
      return { success: false }
    }

    timestamps.push(now)
    requests.set(identifier, timestamps)
    return { success: true }
  }
}
