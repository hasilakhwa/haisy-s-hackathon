
export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isStaging: process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging',
  stripePublicKey: process.env.NEXT_PUBLIC_STRIPE_KEY || '',
  imageStorageUrl: process.env.NEXT_PUBLIC_IMAGE_STORAGE_URL || '',
  analyticsKey: process.env.NEXT_PUBLIC_ANALYTICS_KEY || ''
}

export const getApiUrl = (path: string) => `${config.apiUrl}/${path}`.replace(/\/+/g, '/')
