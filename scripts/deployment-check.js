
const fs = require('fs')
const path = require('path')

function checkDeploymentReadiness() {
  const errors = []
  
  // Check for required files
  const requiredFiles = [
    'next.config.js',
    'package.json',
    'tsconfig.json'
  ]
  
  requiredFiles.forEach(file => {
    if (!fs.existsSync(path.join(process.cwd(), file))) {
      errors.push(`Missing required file: ${file}`)
    }
  })
  
  // Check package.json
  const packageJson = require('../package.json')
  if (!packageJson.scripts?.build) {
    errors.push('Missing build script in package.json')
  }
  if (!packageJson.scripts?.start) {
    errors.push('Missing start script in package.json')
  }
  
  // Output results
  if (errors.length > 0) {
    console.error('❌ Deployment checks failed:')
    errors.forEach(error => console.error(`  - ${error}`))
    process.exit(1)
  } else {
    console.log('✅ All deployment checks passed!')
  }
}

checkDeploymentReadiness()
