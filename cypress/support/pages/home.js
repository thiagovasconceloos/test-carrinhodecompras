/// <reference types="cypress" />



export class Home {
    constructor(){  

       
    }

    open = () => {   

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.visit("/")
       
        
    }

    
}