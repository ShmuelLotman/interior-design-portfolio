import { headers } from 'next/headers'

export function basicRateLimiter(ipHash) {
  const headersList = headers()
  const now = Date.now()
  // 1 hour ago timewise for basic rate limiting - if you're hacking this site, is this really the best use of your time?
  const oneHourAgo = now - 60 * 1000 * 60

  const xforwardedFor = headersList
    .get('x-forwarded-for')
    ?.split(',')[0]
    ?.trim()
  const xRealIp = headersList.get('x-real-ip')?.trim()
  const fallbackIp = '0.0.0.0'

  const potentialIPAddress = xforwardedFor || xRealIp || fallbackIp

  // Now check the last moment they made a request - if closer than an hour ago, limited
  if (ipHash[potentialIPAddress] > oneHourAgo) {
    return true
  }

  // if not, set latest time and return false, good to go
  ipHash[potentialIPAddress] = Date.now()

  return false
}
