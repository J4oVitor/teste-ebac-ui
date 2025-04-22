/// <reference types='cypress'/>

describe('Funcionalidade: detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('example.json').then(login => {
            cy.login(login.usuario , login.senha)
        })
        
    });


    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('joao' , 'vitor' , 'jaovitosr10')
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados')
    });
});