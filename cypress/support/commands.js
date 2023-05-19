// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Comando Registro de usuario
Cypress.Commands.add("registerUser", (usuario, contraseña, genero, dia, mes, año) => {
    cy.request({
      url: "https://pushing-it.onrender.com/api/register",
      method: "POST",
      body: {
        username: usuario,
        password: contraseña,
        gender: genero,
        day: dia,
        month: mes,
        year: año,
      },
    }).then((respuesta) => {
      cy.log(respuesta);
      expect(respuesta.body);
      expect(respuesta.status).to.be.equal(200);
      expect(respuesta.body.newUser.username).to.be.equal(usuario);
      expect(respuesta.body.newUser.gender).to.be.equal(genero);
      expect(respuesta.body.newUser.day).to.be.equal(dia);
      expect(respuesta.body.newUser.month).to.be.equal(mes);
      expect(respuesta.body.newUser.year).to.be.equal(año);
    });
  }
);

//Comando Inicio de sesión de usuario
Cypress.Commands.add("logInUser", (usuario, contraseña) => {
  cy.request({
    url: "https://pushing-it.onrender.com/api/login",
    method: "POST",
    body: {
      username: usuario,
      password: contraseña,
    },
  }).then((respuesta) => {
    cy.log(respuesta);
    window.localStorage.setItem("token", respuesta.body.token);
    window.localStorage.setItem("user", respuesta.body.user.username);
    expect(respuesta.status).to.be.equal(200);
  });
});

//Comando Eliminar usuario
Cypress.Commands.add("deleteUser", (usuario) => {
  cy.request({
    url: `https://pushing-it.onrender.com/api/deleteuser/${usuario}`,
    method: "DELETE",
  }).then((respuesta) => {
    expect(respuesta.status).to.be.equal(200);
  });
});
