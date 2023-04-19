export class ShoppingCart{

    constructor(){
        this.precioP = "#productPrice";
    }
    verificarProducto(producto){
        return cy.contains('p', producto);
    }

    verificarPrecio(producto){
        return cy.contains('p',producto).siblings(this.precioP);
    }
}