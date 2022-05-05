/// <reference types="cypress" />

export class Produto {
    constructor(){
      this.buscarproduto = '#txtBuscaProd'
        this.click_buscar = '#btnPesquisa'
        this.valida_produto = '.componentcard__link--product'
        this.produto = 'Chromecast 3 Google CX 1 UN'
    }

   buscarProduto = () => cy.get(this.buscarproduto).type(this.produto);
    clickBuscar = () => cy.get(this.click_buscar).click();
    clickProduto = () => cy.contains(this.produto).click();
    validaProduto = () => cy.get(this.valida_produto).invoke('text').should('include', this.produto);

}