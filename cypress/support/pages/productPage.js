export class ProductPage {
  agregarProducto(producto) {
    return cy.contains('p', producto).siblings("button").click();
  }
}
