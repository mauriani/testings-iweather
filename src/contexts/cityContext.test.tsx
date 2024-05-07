import { act, renderHook, waitFor } from '@testing-library/react-native'


import { useCity } from '@hooks/useCity'
import { CityProvider } from '@contexts/CityContext'

describe('Context: cityContext', () => {
  it('should be change selected city', async () => {
    // wrapper adiona o provider do contexto
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

    // aguardar a resposta waitFor - tendo uma acao act
    await waitFor(() => act(() => result.current.handleChanceCity({
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
    })))

    expect(result.current.city?.name).toBe('São Paulo')
  })
})