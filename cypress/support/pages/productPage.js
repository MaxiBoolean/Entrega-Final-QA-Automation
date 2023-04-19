export class ProductPage {
  constructor() {
    this.modalButton = "#closeModal";
    this.goShoppingCartButton = "#goShoppingCart";
  }
  agregarProducto(producto) {
    return cy.contains("p", producto).siblings("button").click();
  }

  botonClick(button) {
    return cy.get(button).should("be.visible").click();
  }
}
