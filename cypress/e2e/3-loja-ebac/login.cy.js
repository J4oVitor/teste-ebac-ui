/// <reference types='cypress'/>

describe('Funcionalidade: login',  () => {

  it('Deve fazer login com sucesso',  () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('jaozikinha11@gmail.com')
    cy.get('#password').type('123Senha123@')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jaozikinha11 (não é jaozikinha11? Sair)')
})

})
