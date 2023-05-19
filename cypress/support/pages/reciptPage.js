export class Recipt {
  constructor() {
    this.fullNameP = "#name";
    this.creditCardP = "#creditCard";
    this.totalPriceP = "#totalPrice";
  }

  verificarFullName() {
    return cy.get(this.fullNameP);
  }

  verificarProducto(producto) {
    return cy.contains(`${producto}`);
  }

  verifiNumTarjeta() {
    return cy.get(this.creditCardP);
  }

  verificarPrecioTotal() {
    return cy.get(this.totalPriceP);
  }
}
