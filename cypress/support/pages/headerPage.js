export class HeaderPager {
  constructor() {
    this.userNameH2 = "//h2[starts-with(@id,'user_pushingit')]";
    this.timeout = 10000;
  }

  verificarUsername() {
    return cy.xpath(this.userNameH2, { timeout: this.timeout });
  }
}
