class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }
    
    buscarProduto(nomeProduto) {
       cy.get('[name="s"]').eq(1).type(nomeProduto)
       cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto) {
        cy.get(' .product-block')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto(nomeProduto) {
        //cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho() {
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
    }
}
 
export default new ProdutosPage()