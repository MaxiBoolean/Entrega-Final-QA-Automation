export class ProductPage {
  constructor() {
    this.modalButton = "#closeModal";
    this.goShoppingCartButton = "#goShoppingCart";
  }

  agregarProducto(producto) {
    cy.contains("p", producto).siblings("button").click();
  }

  goShopingCartButton() {
    cy.get(this.goShoppingCartButton).click();
  }

  cerrarModal() {
    cy.get(this.modalButton).click();
  }
}
