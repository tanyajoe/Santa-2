/// <reference types="cypress" />

const regData = require("../fixtures/forRegistration.json");

describe("Registration form", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  context("Positive tests", () => {
    it("Registrate with true name and email", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[0].name);
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[0].email);
      cy.positiveRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorTrueReg")
      );
    });

    it("Registrate with 63 symbols true name", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[1].name);
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[1].email);
      cy.positiveRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorTrueReg")
      );
    });

    it("Registrate with 64 symbols true name", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[2].name);
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[2].email);
      cy.positiveRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorTrueReg")
      );
    });

    it("Registrate with 2 symbols true name", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[3].name);
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[3].email);
      cy.positiveRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorTrueReg")
      );
    });
  });

  context("Negative tests", () => {
    it("Registrate with empty fields", () => {
      cy.negativeRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorFalseReg")
      );
    });

    it("Registrate with email without @", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[4].name);
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[4].email);
      cy.negativeRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorFalseReg")
      );
    });

    it("Registrate with registrated email", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[5].name);
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[5].email);
      cy.negativeRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorFalseReg")
      );
    });

    it("Registrate with empty field for name", () => {
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[6].email);
      cy.negativeRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorFalseReg")
      );
    });

    it("Registrate with empty field for email", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[7].name);
      cy.negativeRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorFalseReg")
      );
    });

    it("Registrate with name with 1 symbol", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[8].name);
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[8].email);
      cy.negativeRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorFalseReg")
      );
    });

    it("Registrate with name with 65 symbol", () => {
      cy.inputName(Cypress.env("selectorRegName"), regData[9].name);
      cy.inputEmail(Cypress.env("selectorRegEmail"), regData[9].email);
      cy.negativeRegistrate(
        Cypress.env("selectorButtonToReg"),
        Cypress.env("selectorFalseReg")
      );
    });
  });
});
