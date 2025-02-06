
import { config } from './config'

export function logError(error: Error, context?: any) {
  if (config.isDev) {
    console.error('[DEV Error]:', error, context)
    return
  }

  // Log to your preferred error monitoring service
  console.error('[Production Error]:', {
    error: error.message,
    stack: error.stack,
    context,
    environment: config.environment
  })
}

export function initErrorMonitoring() {
  if (typeof window !== 'undefined') {
    window.onerror = (msg, url, lineNo, columnNo, error) => {
      logError(error || new Error(msg as string))
      return false
    }
  }
}
