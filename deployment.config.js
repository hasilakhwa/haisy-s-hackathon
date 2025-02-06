
module.exports = {
  staging: {
    url: 'https://staging.marketplace.repl.co',
    analyticsEnabled: true,
    featureFlags: {
      newCheckout: true,
      advancedSearch: true,
      recommendations: false
    }
  },
  production: {
    url: 'https://marketplace.repl.co',
    analyticsEnabled: true,
    featureFlags: {
      newCheckout: false,
      advancedSearch: true,
      recommendations: true
    }
  }
}
