
import type { NextApiRequest, NextApiResponse } from 'next'
import { config } from '../../utils/config'

type HealthResponse = {
  status: string
  environment: string
  timestamp: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  res.status(200).json({
    status: 'healthy',
    environment: config.isProduction ? 'production' : config.isStaging ? 'staging' : 'development',
    timestamp: new Date().toISOString()
  })
}
