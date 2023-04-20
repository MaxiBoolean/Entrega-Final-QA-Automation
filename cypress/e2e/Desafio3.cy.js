/// <reference types="cypress" />

import { LoginPage } from "../support/pages/loginPage";
import { ProductPage } from "../support/pages/productPage";
import { ShoppingCart } from "../support/pages/shoppingCardPage";
import { HomePage } from "../support/pages/homePage";
import { HeaderPager } from "../support/pages/headerPage";

describe("Desafío 3", () => {
  
  let data;
  const timeout = 10000;
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const shoppingCart = new ShoppingCart();
  const headerPage = new HeaderPager();
  const homePage = new HomePage();

  before("Before", () => {
    cy.fixture("fixture").then((datos) => {
      data = datos;
    });
  });

  it('Desafío 3', () => {
    cy.visit("/");    
    loginPage.goLogginPage();
    loginPage.escribirUsername(data.login.username); 
    loginPage.escribirPassword(data.login.password); 
    loginPage.login();   
    headerPage.verificarUsername({timeout: timeout});
    homePage.goOnlineShopButton();
    productPage.agregarProducto(data.productos.gorra.nombre);
    productPage.cerrarModal();
    productPage.agregarProducto(data.productos.zapas.nombre);
    productPage.cerrarModal();
    productPage.goShopingCartButton(); 
    shoppingCart.verificarProducto(data.productos.gorra.nombre).should('have.text', data.productos.gorra.nombre);
    shoppingCart.verificarPrecio(data.productos.gorra.nombre).should('have.text',`$${data.productos.gorra.precio}`);
    shoppingCart.verificarProducto(data.productos.zapas.nombre).should('have.text', data.productos.zapas.nombre);
    shoppingCart.verificarPrecio(data.productos.zapas.nombre).should('have.text',`$${data.productos.zapas.precio}`);
    shoppingCart.verPrecioTotal();
    shoppingCart.verificarPrecioTotal(shoppingCart.totalPriceB).should('have.text', data.productos.gorra.precio + data.productos.zapas.precio);
  });
});
