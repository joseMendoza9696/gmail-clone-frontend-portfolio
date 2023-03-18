/// <reference types="cypress" />

function logsIn() {
  cy.visit('http://localhost:3000');
  cy.url().should('include', '/login');
  cy.get('input[name="email"]').type('jose@gmail.com');
  cy.get('input[name="password"]').type('hellobaby');

  cy.contains('Login').click();
}

describe('Gmail tests', () => {
  it('Logs in', () => {
    logsIn();
    cy.get('#account').should('have.text', 'jose@gmail.com');
  });

  it('Lists emails in correct order', () => {
    logsIn();
    cy.get('#email')
      .get('div')
      .find('#subject-inbox')
      .first()
      .should('have.text', 'cypress2 -');
  });

  it('Composes an email', () => {
    const testNumber: number = Math.round(Math.random() * 100);
    logsIn();
    cy.get('#compose-button').click();
    cy.get('#to-compose').type('rodrigo@gmail.com');
    cy.get('#subject-compose').type(`${testNumber}-test`);
    cy.get('#body-compose').type('cypress testing');
    cy.get('#send-button').click();
    cy.get('#sent-section').click();
    cy.get('#email')
      .get('div')
      .find('#subject-sent')
      .first()
      .should('have.text', `${testNumber}-test -`);
  });
});
