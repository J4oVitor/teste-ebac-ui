/// <reference types='cypress'/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
            cy.get('#tab-title-additional_information > a').should('contain' , 'Informação adicional')
    });
    
    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Pierce Gym Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });
    
    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Sol Active Short')
        cy.get('.product_title').should('contain' , 'Sol Active Short')
    });

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho()
    });
});