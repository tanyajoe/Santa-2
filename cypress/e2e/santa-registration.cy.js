/// <reference types="cypress" />

const regData = require("../fixtures/forRegistration.json");

describe("Registration form", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  context("Positive tests", () => {
    it("Registrate with true name and email", () => {
      cy.dataInputForRegistration(Cypress.env("selectorRegName"), regData[0].name, Cypress.env("selectorRegEmail"), regData[0].email, Cypress.env("selectorButtonToReg"));
      cy.checkTrueRegistrate();
    });

    it("Registrate with 63 symbols true name", () => {
      cy.dataInputForRegistration(Cypress.env("selectorRegName"), regData[1].name, Cypress.env("selectorRegEmail"), regData[1].email, Cypress.env("selectorButtonToReg"));
      cy.checkTrueRegistrate();

    });

    it("Registrate with 64 symbols true name", () => {
      cy.dataInputForRegistration(Cypress.env("selectorRegName"), regData[2].name, Cypress.env("selectorRegEmail"), regData[2].email, Cypress.env("selectorButtonToReg"));
      cy.checkTrueRegistrate();
    });

    it("Registrate with 2 symbols true name", () => {
      cy.dataInputForRegistration(Cypress.env("selectorRegName"), regData[3].name, Cypress.env("selectorRegEmail"), regData[3].email, Cypress.env("selectorButtonToReg"));
      cy.checkTrueRegistrate();
    });
  });

  context("Negative tests", () => {
    it("Registrate with empty fields", () => {
      cy.get(Cypress.env("selectorButtonToReg")).click();
      cy.checkFalseRegistrate(Cypress.env("selectorFalseReg"));
    });

    it("Registrate with email without @", () => {
      cy.dataInputForRegistration(Cypress.env("selectorRegName"), regData[4].name, Cypress.env("selectorRegEmail"), regData[4].email, Cypress.env("selectorButtonToReg"));
      cy.checkFalseRegistrate(Cypress.env("selectorFalseReg"));
    });

    it("Registrate with registrated email", () => {
      cy.dataInputForRegistration(Cypress.env("selectorRegName"), regData[5].name, Cypress.env("selectorRegEmail"), regData[5].email, Cypress.env("selectorButtonToReg"));
      cy.contains("Такой пользователь уже зарегистрирован. Войти?").should("exist");
    });

    it("Registrate with empty field for name", () => {
      cy.get(Cypress.env("selectorRegEmail")).type(regData[6].email);
      cy.get(Cypress.env("selectorButtonToReg")).click();
      cy.checkFalseRegistrate(Cypress.env("selectorFalseReg"));
    });

    it("Registrate with empty field for email", () => {
      cy.get(Cypress.env("selectorRegName")).type(regData[7].name)
      cy.get(Cypress.env("selectorButtonToReg")).click();
      cy.checkFalseRegistrate(Cypress.env("selectorFalseReg"));
    });

    it("Registrate with name with 1 symbol", () => {
      cy.dataInputForRegistration(Cypress.env("selectorRegName"), regData[8].name, Cypress.env("selectorRegEmail"), regData[8].email, Cypress.env("selectorButtonToReg"));
      cy.checkFalseRegistrate(Cypress.env("selectorFalseReg"));
    });

    it("Registrate with name with 65 symbol", () => {
      cy.dataInputForRegistration(Cypress.env("selectorRegName"), regData[9].name, Cypress.env("selectorRegEmail"), regData[9].email, Cypress.env("selectorButtonToReg"));
      cy.checkFalseRegistrate(Cypress.env("selectorFalseReg"));
    });
  });
});
