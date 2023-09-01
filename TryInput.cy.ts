let username = 'irfan';
let pass = 12345;
describe('template spec', () => {
  //open
  beforeEach(()=>{
    cy.visit('http://localhost:4200/');
  })
  
  it('Type', () => {
    
    cy.get('[data-cy="input-name"]').type(username);
    cy.get('[data-cy="input-password"]').type(pass);

  
  })
  it('login', () => {
    
    cy.get('[data-cy="input-name"]').type(username);
    cy.get('[data-cy="input-password"]').type(pass);
    cy.get('[data-cy="btn-login"]').click();
  
  })
  
  it('full work flow', () => {
    cy.get('[data-cy="input-name"]').type(username);
    cy.get('[data-cy="input-password"]').type(pass);
    cy.get('[data-cy="btn-login"]').click(); 
    cy.get('[data-cy="text-navbar-profile-name"]').contains(`Hi, ${username}`);
    cy.get('[data-cy="btn-add-menu-item-to-cart"]').each((El)=>{
      cy.get(El).click();
    })
    cy.get('[data-cy="btn-checkout"]').click();
    cy.get('[data-cy="alert-message"]').contains('Items Purchased');
    cy.get('[data-cy="btn-logout"]').click();
    cy.contains('[data-cy="text-title-login"]', 'Login').should('be.visible')
  })


})

