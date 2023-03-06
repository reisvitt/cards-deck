export class BadRequestError extends Error {
  constructor() {
    super('Falha na requisição')
    this.name = 'BadRequestError'
  }
}
