/// <reference types='cypress'/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get(' .product-block')
            //.first()
            //.last()
            //.eq(2)
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
            cy.get('#tab-title-additional_information > a').should('contain' , 'Informação adicional')
    });
});