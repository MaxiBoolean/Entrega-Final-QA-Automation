/// <reference types="cypress" />

import { LoginPage } from "../support/pages/loginPage";
import { ProductPage } from "../support/pages/productPage";
import { ShoppingCart } from "../support/pages/shoppingCardPage";

describe("Desafío 3", () => {
  
  let data;
  const timeout = 10000;
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const shoppingCart = new ShoppingCart();

  before("Before", () => {
    cy.fixture("fixture").then((datos) => {
      data = datos;
    });
  });

  it('Desafío 3', () => {
    cy.visit("/");
    cy.get("#registertoggle").dblclick();
    loginPage.escribirUsername(data.login.username); 
    loginPage.escribirPassword(data.login.password); 
    loginPage.login();
    cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`, {timeout: timeout}).should("exist");
    cy.xpath('/html/body/div[1]/div/div[2]/div[5]/p/a').click();    
    productPage.agregarProducto(data.productos.gorra.nombre);
    cy.get('#closeModal').should('be.visible').click();    
    productPage.agregarProducto(data.productos.zapas.nombre);
    cy.get('#closeModal').should('be.visible').click();        
    cy.contains('Go to shopping cart').click();
    shoppingCart.verificarProducto(data.productos.gorra.nombre).should('have.text', data.productos.gorra.nombre);
    shoppingCart.verificarPrecio(data.productos.gorra.nombre).should('have.text',`$${data.productos.gorra.precio}`);
    shoppingCart.verificarProducto(data.productos.zapas.nombre).should('have.text', data.productos.zapas.nombre);
    shoppingCart.verificarPrecio(data.productos.zapas.nombre).should('have.text',`$${data.productos.zapas.precio}`);
    cy.xpath('//*[@id="root"]/div/div[2]/div[2]/button').click();
    cy.xpath('//*[@id="price"]/b').should('be.visible').should('have.text', data.productos.gorra.precio + data.productos.zapas.precio);
  });
});
