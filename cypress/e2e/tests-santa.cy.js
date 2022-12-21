/// <reference types="cypress" />

context("example to enter the site", () => {
  //it("visit site", () => {
  //cy.visit("https://staging.lpitko.ru");
  //});

  it("displays the site", () => {
    cy.visit("https://staging.lpitko.ru");
    cy.get(".header-item__text span").should("be.visible");
  });
});

//describe('empty spec', () => {
// it('passes', () => {
// cy.visit('https://example.cypress.io')
//})
//})
