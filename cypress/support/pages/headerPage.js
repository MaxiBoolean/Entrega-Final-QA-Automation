export class HeaderPager {
  constructor() {
    this.userNameH2 = "//h2[starts-with(@id,'user_pushingit')]";
  }

  verificarUsername() {
    return cy.xpath(this.userNameH2);
  }
};
