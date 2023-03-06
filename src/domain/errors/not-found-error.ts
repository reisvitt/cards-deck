export class NotFoundError extends Error {
  constructor() {
    super('Conteúdo não encontrado')
    this.name = 'NotFoundError'
  }
}
