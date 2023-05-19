export class CheckOut {
  constructor() {
    this.firstNameInput = "#FirstName";
    this.lastNameInput = "#lastName";
    this.cardNumberInput = "#cardNumber";
    this.purchaseButton = "Purchase";
  }

  nameCard(name) {
    cy.get(this.firstNameInput).type(name);
  }

  lastNameCard(apellido) {
    cy.get(this.lastNameInput).type(apellido);
  }

  cardNumber(numero) {
    cy.get(this.cardNumberInput).type(numero);
  }

  irPurchase() {
    cy.contains(this.purchaseButton).click();
  }
}
