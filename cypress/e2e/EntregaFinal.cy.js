/// <reference types="cypress" />

import { ProductPage } from "../support/pages/productPage";
import { ShoppingCart } from "../support/pages/shoppingCartPage";
import { HomePage } from "../support/pages/homePage";
import { CheckOut } from "../support/pages/checkOutPage";
import { Recipt } from "../support/pages/reciptPage";

describe("Entrega Final - QA Automation", () => {
  
  let data;  
  const productPage = new ProductPage();
  const shoppingCart = new ShoppingCart();
  const homePage = new HomePage();
  const checkOut = new CheckOut();
  const recipt = new Recipt();

  const username = "maxi" + Math.floor(Math.random() * 1000);
  const password = "123456!";
  const gender = "Male";
  const day = "23";
  const month = "Julio";
  const year = "1993"; 

  before("Before", () => {
    cy.fixture("fixture").then((datos) => {
      data = datos;
    });
  });

  it('Entrega Final', () => {
  
    //Command Registro de usuario
    cy.registerUser(username,password,gender,day,month,year);
    //Command Inicio de sesión
    cy.logInUser(username,password);

    cy.visit("/");
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
    shoppingCart.irCheckout();
    checkOut.nameCard(data.tarjeta.nombre);
    checkOut.lastNameCard(data.tarjeta.apellido);
    checkOut.cardNumber(data.tarjeta.numero);
    checkOut.irPurchase();
    recipt.verificarFullName().should('be.visible').should('include.text', data.tarjeta.nombre +" "+ data.tarjeta.apellido);
    recipt.verificarProducto(data.productos.gorra.nombre);
    recipt.verificarProducto(data.productos.zapas.nombre);
    recipt.verifiNumTarjeta().should('have.text', data.tarjeta.numero);
    recipt.verificarPrecioTotal().should('have.text', `You have spent $${data.productos.gorra.precio + data.productos.zapas.precio}`);
    
  });

  after("Eliminar usuario creado",()=>{
    //Command Eliminar usuario
    cy.deleteUser(username);
  });
});
