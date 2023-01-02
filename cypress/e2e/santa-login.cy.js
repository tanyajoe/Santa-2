/// <reference types="cypress" />

const loginData = require("../fixtures/forLogin.json");

describe("Login form", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  context("Positive tests", () => {
    it("Login with correct email and pass", () => {
      cy.inputEmail(Cypress.env("selectorLoginEmail"), loginData[0].email);
      cy.inputPass(Cypress.env("selectorLoginPass"), loginData[0].pass);
      cy.positiveLogin(
        Cypress.env("selectorButtonToLogin"),
        Cypress.env("selectorAccount")
      );
    });
  });

  context("Negative tests", () => {
    it("Login with emty fields", () => {
      cy.negativeLogin(
        Cypress.env("selectorButtonToLogin"),
        Cypress.env("selectorFalseLogin")
      );
    });

    it("Login with emty email", () => {
      cy.inputPass(Cypress.env("selectorLoginPass"), loginData[0].pass);
      cy.negativeLogin(
        Cypress.env("selectorButtonToLogin"),
        Cypress.env("selectorFalseLogin")
      );
    });

    it("Login with emty pass", () => {
      cy.inputEmail(Cypress.env("selectorLoginEmail"), loginData[0].email);
      cy.negativeLogin(
        Cypress.env("selectorButtonToLogin"),
        Cypress.env("selectorFalseLogin")
      );
    });

    it("Login with incorrect email", () => {
      cy.inputEmail(Cypress.env("selectorLoginEmail"), loginData[1].email);
      cy.inputPass(Cypress.env("selectorLoginPass"), loginData[1].pass);
      cy.negativeLogin(
        Cypress.env("selectorButtonToLogin"),
        Cypress.env("selectorFalseLogin")
      );
    });

    it("Login with incorrect pass", () => {
      cy.inputEmail(Cypress.env("selectorLoginEmail"), loginData[2].email);
      cy.inputPass(Cypress.env("selectorLoginPass"), loginData[2].pass);
      cy.negativeLogin(
        Cypress.env("selectorButtonToLogin"),
        Cypress.env("selectorFalseLogin")
      );
    });

    it("Login with spaces in input fields", () => {
      cy.inputEmail(Cypress.env("selectorLoginEmail"), loginData[3].email);
      cy.inputPass(Cypress.env("selectorLoginPass"), loginData[3].pass);
      cy.negativeLogin(
        Cypress.env("selectorButtonToLogin"),
        Cypress.env("selectorFalseLogin")
      );
    });
  });
});
