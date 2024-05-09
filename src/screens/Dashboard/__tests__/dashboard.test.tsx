import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"
import { render, screen, waitFor } from "@__tests__/utils/customRender"
import { api } from "@services/api"
import { Dashboard } from "@screens/Dashboard"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockCityApiResponse } from '@__tests__/mocks/api/mockCityApiResponse'

describe("Screen: Dashboard", () => {
  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));
    expect(cityName).toBeTruthy() 
  })

  it('should be show another selected weather city', async () =>{
    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)


    // 1 - Busca as informações do tempo/clima da cidade selecionada
    // 2 - Busca as informações da cidade.
    // 3 Busca as informações do tempo/clima da nova cidade selecionada
  
    // mockResolvedValueOnce -> simula várias requisições 
    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityApiResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
  })
})