
import { mockCityApiResponse } from '@__tests__/mocks/mockCityApiResponse'
import { api } from './api'
import { getCityByNameService } from './getCityByNameService'
describe('API: getCityByNameService', () => {
  it('should return city details', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockCityApiResponse,
    })

    const response = await getCityByNameService('São Paulo')

    expect(response.length).toBeGreaterThan(0)
  })
})
