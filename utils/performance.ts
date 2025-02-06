
import { logError } from './errorMonitoring'

export interface PerformanceMetrics {
  ttfb: number
  fcp: number
  lcp: number
  cls: number
  fid: number
}

export function captureWebVitals() {
  if (typeof window !== 'undefined') {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const metric = {
            name: entry.name,
            value: entry.startTime,
            rating: getRating(entry)
          }
          console.log('[Performance]', metric)
          // Here you could send this to your analytics service
        })
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (error) {
      logError(error)
    }
  }
}

function getRating(entry: PerformanceEntry): 'good' | 'needs-improvement' | 'poor' {
  if (entry.name === 'CLS') {
    return entry.startTime < 0.1 ? 'good' : entry.startTime < 0.25 ? 'needs-improvement' : 'poor'
  }
  if (entry.name === 'FID') {
    return entry.startTime < 100 ? 'good' : entry.startTime < 300 ? 'needs-improvement' : 'poor'
  }
  if (entry.name === 'LCP') {
    return entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs-improvement' : 'poor'
  }
  return 'needs-improvement'
}
