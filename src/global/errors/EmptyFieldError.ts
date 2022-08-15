export class EmptyFieldError extends Error {
  constructor (field:string) {
    super();
    this.message = `Empty field: ${field}.`;
  }
}
