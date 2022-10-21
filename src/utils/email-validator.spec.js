const validator = require('validator')
class EmailValidator {
  isValid (email) {
    return validator.isEmail(email)
  }
}

const maKeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = maKeSut()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Should return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = maKeSut()
    const isEmailValid = sut.isValid('invalid_email@mail.com')
    expect(isEmailValid).toBe(false)
  })

  test('Should call validator with correct email', () => {
    const sut = maKeSut()
    sut.isValid('any_email@mail.com')
    expect(validator.email).toBe('any_email@mail.com')
  })
})
