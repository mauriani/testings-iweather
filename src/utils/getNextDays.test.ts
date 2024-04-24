import { getNextDays } from './getNextDays'

// IT ALIAS PARA TEST

// describe agrupa os testes

describe('Grupo de testes', () => {
  test('should be return the next fire fixe days', () => {
    const days = getNextDays()
    expect(days.length).toBe(5)
  })

})
