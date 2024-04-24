import { render, screen } from '@testing-library/react-native'

import { Input } from '@components/Input'

describe('Component: Input', () => {
  it('should be render whithout activity indicator if isLoading prop is undefined.', () => {
    render(<Input />)

    // quando utilizamos o get, no nosso caso usando getByTestId ele/eles retornam uma exceção
    //  const activityIndicator = screen.getByTestId('activity-indicator')
    //   por isso vamos usar o queryByTestId
    const activityIndicator = screen.queryByTestId('activity-indicator')

    expect(activityIndicator).toBeNull()
  })
})

/*
// O TESTE EXECUTA EM ORDEM ALFABETICA
Component: // assim na exibicao dos test aparece todos os test de component 
Screens:
*/
