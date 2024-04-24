import { render, screen } from '@testing-library/react-native'

import { Input } from '@components/Input'

describe('Component: Input', () => {
  it('should be render whithout activity indicator if isLoading prop is undefined.', () => {
    render(<Input isLoading />)

    const activityIndicator = screen.getByTestId('activity-indicator')

    console.log(activityIndicator)
  })
})

/*
// O TESTE EXECUTA EM ORDEM ALFABETICA
Component: // assim na exibicao dos test aparece todos os test de component 
Screens:
*/
