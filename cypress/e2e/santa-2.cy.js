/// <reference types="cypress" />

describe("User is authorized", () => {


  context("endpoints", () => {

    beforeEach(() => {
      cy.visit("/login");
      cy.get("input[name=email]").type(Cypress.env('email'));
      cy.get("input[name=password]").type(Cypress.env('pass'));
      cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
      })
    
    
      it("check boxes", () => {
        cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(1) > div").click();
        cy.url().should('contain', Cypress.config("baseUrl") && "/account/boxes");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div.layout-column-center.align-center > div > div > div.base--clickable.toggle-menu-item.toggle-menu-item--active").should("be.visible");
      });


      it("create new box", () => {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(1)").click();
        //let eCreate = Cypress.config("baseUrl") + "/box/new";
        cy.url().should("contain", Cypress.config("baseUrl") && "/box/new");
        cy.get("#root").should("be.visible");
      })

      it("fast selection", () => {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(2)").click();
        cy.url().should("contain", Cypress.config("baseUrl") && "/randomizer");
        cy.get("#root").should("be.visible");
      })

      it("Account", () => {
        cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(3) > div").click();
        cy.url().should("contain", Cypress.config("baseUrl") &&  "/account");
        cy.get("#root").should("be.visible");
      })

    });
  });
