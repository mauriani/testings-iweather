import { render, screen, fireEvent } from '@testing-library/react-native'
import { SelectList } from '@components/SelectList'

describe('Component: SelectList', () => {
  it('should be return city details selected', () => {
    const data = [
      {
        id: '1',
        name: 'Campinas',
        latitude: 123,
        longitude: 123,
      },
      {
        id: '2',
        name: 'Campo Grande',
        latitude: 789,
        longitude: 987,
      },
    ]

    // mock do onpress
    const onPress = jest.fn()

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />)

    const seletedCity = screen.getByText(/Campo/i)

    // evento de clicar
    fireEvent.press(seletedCity)

    // ESPERANDO QUE FOSSE CHAMADA UMA VEz
    expect(onPress).toHaveBeenCalledWith(data[1])
  })

  it('not should be show options when dara props in empty', () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />)

    const options = screen.getByTestId('options')

    
    expect(options.children).toHaveLength(0)
  })
})
