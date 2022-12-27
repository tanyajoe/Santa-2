/// <reference types="cypress" />

describe("User is authorized", () => {
  context("endpoints", () => {
    beforeEach(() => {
      cy.login(
        "input[name=email]",
        "input[name=password]",
        "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div",
        Cypress.env("email"),
        Cypress.env("pass")
      );
    });

    afterEach(() => {
      cy.visit("/");
    });

    it("check boxes", () => {
      cy.goToEndpoint(
        "#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(1) > div"
      );
      cy.urlContains("/account/boxes");
      cy.elementIsVisible("#root");
    });

    it("create new box", () => {
      cy.goToEndpoint(
        "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(1)"
      );
      cy.urlContains("/box/new");
      cy.elementIsVisible("#root");
    });

    it("fast selection", () => {
      cy.goToEndpoint(
        "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(2)"
      );
      cy.urlContains("/randomizer");
      cy.elementIsVisible("#root");
    });

    it("Account", () => {
      cy.goToEndpoint(
        "#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(3) > div"
      );
      cy.urlContains("/account");
      cy.elementIsVisible("#root");
    });
  });
});
