import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender"
import { api } from "@services/api"
import { Dashboard } from "@screens/Dashboard"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockCityApiResponse } from '@__tests__/mocks/api/mockCityApiResponse'

describe("Screen: Dashboard", () => {

  // O QUE FAZER ANTES DE EXECUTAR TODOS OS TESTES
  beforeAll(async () => {
    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)
  })


  // // EXECUTADO DEPOIS DE TODOS OS TESTES
  // afterAll(() => {

  // })
  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/rio do sul/i));
    expect(cityName).toBeTruthy() 
  })

  it('should be show another selected weather city', async () =>{

    // 1 - Busca as informações do tempo/clima da cidade selecionada
    // 2 - Busca as informações da cidade.
    // 3 Busca as informações do tempo/clima da nova cidade selecionada
  
    // mockResolvedValueOnce -> simula várias requisições 
    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityApiResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })


      const { debug } = render(<Dashboard />)

      // waitForElementToBeRemoved - verifica se o loading saiu da tela
      await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))
  
      // SIMULANDO A TROCA DE CIDADE
      const cityName = 'São Paulo'

      await waitFor(() => act(() => {
        // RECUPERA O INPUT
        const search = screen.getByTestId('search-input')
        // MUDANDO O TEXTO DO ONCHANGE
        fireEvent.changeText(search, cityName)
      }))
  
      // WAITFOR - AGURADA QUE A CONDIÇÃO SEJA ATENDIDA
      await waitFor(() => act(() => {
        // PRESSIONA E PROCURA PELO CITYNAME
        // exact: false significa que o texto nao precisa ser igual ao digitado
        fireEvent.press(screen.getByText(cityName, { exact: false }))
      }))
  
      expect(screen.getByText(cityName, { exact: false })).toBeTruthy()

  })
})