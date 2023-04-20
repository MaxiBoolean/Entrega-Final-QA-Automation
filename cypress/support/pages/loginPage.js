export class LoginPage {
  constructor() {
    this.usuarioInput = "#user";
    this.contraseñaInput = "#pass";
    this.loginButton = "Log in";
    this.irLoginButton = "#registertoggle";
  }

  escribirUsername(texto) {
    cy.get(this.usuarioInput).type(texto);
  }

  escribirPassword(password) {
    cy.get(this.contraseñaInput).type(password);
  }

  login() {
    cy.contains(this.loginButton).click();
  }

  goLogginPage() {
    cy.get(this.irLoginButton).dblclick();
  }
};
