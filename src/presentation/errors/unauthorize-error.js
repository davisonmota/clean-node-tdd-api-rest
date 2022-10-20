module.exports = class UnauthorizeError extends Error {
  constructor () {
    super('Unauthorized')
    this.name = 'UnauthorizeError'
  }
}
