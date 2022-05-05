/// <reference types="cypress" />

export class Carrinho {
    constructor(){
        this.click_comprar = 'button[name=btnYrMlTPPfc0]'
        
        
    }

 
    clickComprar = () => cy.get(this.click_comprar).click()
  
}