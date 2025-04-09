/// <reference types='cypress'/>

describe('Funcionalidade: login',  () => {

   beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });

   afterEach(() => {
    cy.screenshot()
   });

  it('Deve fazer login com sucesso',  () => {
    cy.get('#username').type('jaozikinha11@gmail.com')
    cy.get('#password').type('123Senha123@')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jaozikinha11 (não é jaozikinha11? Sair)')
})

  it('Deve exibir uma mensagem de erro ao inserir usúario inválido', () => {
    cy.get('#username').type('jaozkinha11@gmail.com')
    cy.get('#password').type('123Senha123@')
    cy.get('.woocommerce-form > .button').click()
    //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')
});
 it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
  cy.get('#username').type('jaozikinha11@gmail.com')
  cy.get('#password').type('123Senho123@')
  cy.get('.woocommerce-form > .button').click()
  cy.get('.woocommerce-error').should('contain' , 'Perdeu a senha?')
  cy.get('.woocommerce-error').should('exist')
 });

})
