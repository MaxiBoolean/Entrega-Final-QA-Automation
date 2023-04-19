export class LoginPage {
  constructor() {
    this.usuarioInput = "#user";
    this.contraseñaInput = "#pass";
    this.loginButton = "Log in";
    this.irLoginButton = "#registertoggle";
    this.userNameH2 = "//h2[starts-with(@id,'user_pushingit')]";
    this.onlineShopButton = "/html/body/div[1]/div/div[2]/div[5]/p/a";
  }

  escribirUsername(texto) {
    return cy.get(this.usuarioInput).type(texto);
  }

  escribirPassword(password) {
    return cy.get(this.contraseñaInput).type(password);
  }

  login() {
    return cy.contains(this.loginButton).dblclick();
  }

  verificarUsername() {
    return cy.xpath(this.userNameH2);
  }

  botonClick(button) {
    return cy.xpath(button).click();
  }

  botonDblclick(button) {
    return cy.get(button).dblclick();
  }
}
