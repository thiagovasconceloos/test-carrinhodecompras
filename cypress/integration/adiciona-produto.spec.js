
import { Home } from '../support/pages/home'
import { Produto } from '../support/pages/produto'
import { Carrinho } from '../support/pages/carrinho'

const home = new Home()
const produto = new Produto()
const carrinho = new Carrinho()




describe('Valida produto no carrinho de Compras', () => {


 
    it('Dado que eu acesso o site ', () => {
     
      home.open();
    })
   

    it('E escrevo algo no searchbar ', () => {
     
        produto.buscarProduto();
      })

      it('E clico em buscar', () => {
        produto.clickBuscar();
      })
 
    

      it('Quando escolho um produto no resultado de busca', () => {
        produto.clickProduto();
      })

      it('E clico em comprar', () => {
         carrinho.clickComprar();
      })  
  
  
    
   
      
       it(`${produto.produto} está no carrinho`,()=>{
        produto.validaProduto();


       })
       
       })
      
  
       
     
  
  
  

  
     

