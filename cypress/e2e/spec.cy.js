/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.log('This should log and amperstand html entity: &amp;');
    cy.log('This should log plain ampersand: &');
  })
})
