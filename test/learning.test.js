test('should test the controll flow', () => {
  const hasCompleteReservation = true
  let shouldStoreReservation
  if (hasCompleteReservation) {
    // hasCompleteReservation == true
    shouldStoreReservation = true
  } else {
    // hasCompleteReservation == false
    shouldStoreReservation = false
  }
  expect(shouldStoreReservation).toBe(true)
})

test('should test correct function execution', () => {
  const hasCompleteReservation = true
  let shouldStoreReservation
  if (hasCompleteReservation) {
    shouldStoreReservation = executeUseCase('1a')
  } else {
    shouldStoreReservation = executeUseCase('1b')
  }
  expect(shouldStoreReservation).toBe(true)
})

function executeUseCase (name) {
  switch (name) {
    case '1a':
      return true
    case '1b':
      return false
    default:
      return null
  }
}

test('should rethrow exception and run finally', () => {
  try {
    expect(() => { throw new Error('what ever') }).toThrowError(Error)
  } catch (error) {
    console.log('catch')
    throw error
  } finally {
    expect(test).toThrow(Error)
    console.log('finally')
  }
})
