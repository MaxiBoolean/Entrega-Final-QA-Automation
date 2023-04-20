export class HomePage {
  constructor() {
    this.onlineShopButton = "/html/body/div[1]/div/div[2]/div[5]/p/a";
  }

  goOnlineShopButton() {
    cy.xpath(this.onlineShopButton).click();
  }
}
