export class ShoppingCart {
  constructor() {
    this.precioP = "#productPrice";
    this.totalPriceButton = "//*[@id='root']/div/div[2]/div[2]/button";
    this.totalPriceB = '//*[@id="price"]/b';
  }
  verificarProducto(producto) {
    return cy.contains("p", producto);
  }

  verificarPrecio(producto) {
    return cy.contains("p", producto).siblings(this.precioP);
  }

  verPrecioTotal() {
    cy.xpath(this.totalPriceButton).should("be.visible").click();
  }

  verificarPrecioTotal(button) {
    return cy.xpath(button).should("be.visible");
  }
}
