const request = require('supertest')
const app = require('../../app')

describe('/', () => {
  it('GET /', async () => {
    const response = await request(app).get('/')

    expect(response.type).toBe('application/json')
    expect(response.body).toBeDefined()
    expect(response.statusCode).toBe(200)
  })
})
