
module.exports = {
  development: {
    url: 'http://0.0.0.0:3000',
    featureFlags: {
      newUI: true,
      recommendations: true,
      analytics: false
    }
  },
  staging: {
    url: 'https://marketplace-staging.repl.co',
    featureFlags: {
      newUI: true,
      recommendations: true,
      analytics: true
    }
  },
  production: {
    url: 'https://marketplace.repl.co',
    featureFlags: {
      newUI: false,
      recommendations: true,
      analytics: true
    }
  }
}
