/// <reference types="cypress" />

context("main page", () => {
  it("displays the site", () => {
    cy.visit("/");
    cy.get(".header-item__text span").should("be.visible");
  });
});
