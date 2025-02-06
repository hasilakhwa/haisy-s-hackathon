
import { config as deployConfig } from '../deployment.config'

export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://0.0.0.0:3000/api',
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
  stripeKey: process.env.NEXT_PUBLIC_STRIPE_KEY,
  analytics: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  isStaging: process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging'
}

export const getFeatureFlags = () => {
  const env = config.environment
  return deployConfig[env]?.featureFlags || deployConfig.development.featureFlags
}
