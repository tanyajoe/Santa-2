/// <reference types="cypress" />

describe("User is authorized", () => {

  const username = "tanyajoooe@gmail.com";
  const password = "12345678";

  context("endpoints", () => {

    beforeEach(() => {
      cy.visit("/login");
      cy.get("input[name=email]").type(username);
      cy.get("input[name=password]").type(password);
      cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
      });

      it("check boxes", () => {
        cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(1) > div").click();
        cy.url().should("equal", "https://staging.lpitko.ru/account/boxes");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div.layout-column-center.align-center > div > div > div.base--clickable.toggle-menu-item.toggle-menu-item--active").should("be.visible");
      });

      it("create new box", () => {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(1)").click();
        cy.url().should("equal", "https://staging.lpitko.ru/box/new");
        cy.get("#root").should("be.visible");
      })

      it("fast selection", () => {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(2)").click();
        cy.url().should("equal", "https://staging.lpitko.ru/randomizer");
        cy.get("#root").should("be.visible");
      })

      it("Account", () => {
        cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(3) > div").click();
        cy.url().should("equal", "https://staging.lpitko.ru/account");
        cy.get("#root").should("be.visible");
      })

    });
  });

