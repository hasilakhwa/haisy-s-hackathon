
import { createMockProduct, mockProducts } from '../../utils/testUtils'
import handler from '../../pages/api/products'
import { ApiError } from '../../utils/errorHandler'

describe('Products API', () => {
  const mockReq = {
    method: 'GET'
  } as any

  const mockRes = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  } as any

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return products on GET request', async () => {
    await handler(mockReq, mockRes)
    expect(mockRes.status).toHaveBeenCalledWith(200)
    expect(mockRes.json).toHaveBeenCalled()
  })

  it('should create product on valid POST request', async () => {
    const newProduct = createMockProduct()
    const mockPostReq = {
      method: 'POST',
      body: newProduct
    } as any

    await handler(mockPostReq, mockRes)
    expect(mockRes.status).toHaveBeenCalledWith(201)
    expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({
      name: newProduct.name
    }))
  })

  it('should handle invalid POST request', async () => {
    const mockPostReq = {
      method: 'POST',
      body: {}
    } as any

    await handler(mockPostReq, mockRes)
    expect(mockRes.status).toHaveBeenCalledWith(400)
  })
})
