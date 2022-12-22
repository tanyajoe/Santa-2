/// <reference types="cypress" />

context("main page", () => {
  //it("visit site", () => {
  //cy.visit("https://staging.lpitko.ru");
  //});

  it("displays the site", () => {
    cy.visit('/');
    cy.get(".header-item__text span").should("be.visible");
  });

  
});

//describe('empty spec', () => {
// it('passes', () => {
// cy.visit('https://example.cypress.io')
//})
//})
