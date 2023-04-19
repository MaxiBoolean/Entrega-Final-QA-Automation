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
    loginPage.botonDblclick(loginPage.irLoginButton);
    loginPage.escribirUsername(data.login.username); 
    loginPage.escribirPassword(data.login.password); 
    loginPage.login();   
    loginPage.verificarUsername({timeout: timeout});
    loginPage.botonClick(loginPage.onlineShopButton);
    productPage.agregarProducto(data.productos.gorra.nombre);
    productPage.botonClick(productPage.modalButton);
    productPage.agregarProducto(data.productos.zapas.nombre);
    productPage.botonClick(productPage.modalButton); 
    productPage.botonClick(productPage.goShoppingCartButton); 
    shoppingCart.verificarProducto(data.productos.gorra.nombre).should('have.text', data.productos.gorra.nombre);
    shoppingCart.verificarPrecio(data.productos.gorra.nombre).should('have.text',`$${data.productos.gorra.precio}`);
    shoppingCart.verificarProducto(data.productos.zapas.nombre).should('have.text', data.productos.zapas.nombre);
    shoppingCart.verificarPrecio(data.productos.zapas.nombre).should('have.text',`$${data.productos.zapas.precio}`);
    shoppingCart.botonClick(shoppingCart.totalPriceButton);
    shoppingCart.verificarPrecioTotal(shoppingCart.totalPriceB).should('have.text', data.productos.gorra.precio + data.productos.zapas.precio);
  });
});
