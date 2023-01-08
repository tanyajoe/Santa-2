/// <reference types="cypress" />

const loginData = require("../fixtures/forLogin.json");

describe("Login form", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  context("Positive tests", () => {
    it("Login with correct email and pass", () => {
      cy.dataInputForLogin(Cypress.env("selectorLoginEmail"), loginData[0].email, Cypress.env("selectorLoginPass"), loginData[0].pass, Cypress.env("selectorButtonToLogin"));
      cy.checkTrueLogin();

    });
  });

  context("Negative tests", () => {
    it("Login with emty fields", () => {
      cy.get(Cypress.env("selectorButtonToLogin")).click();
      cy.checkFalseLogin();
    });

    it("Login with emty email", () => {
      cy.get(Cypress.env("selectorLoginPass")).type(loginData[0].pass);
      cy.get(Cypress.env("selectorButtonToLogin")).click();
      cy.checkFalseLogin();
    });

    it("Login with emty pass", () => {
      cy.get(Cypress.env("selectorLoginEmail")).type(loginData[0].email);
      cy.get(Cypress.env("selectorButtonToLogin")).click();
      cy.checkFalseLogin();
    });

    it("Login with incorrect email", () => {
      cy.dataInputForLogin(Cypress.env("selectorLoginEmail"), loginData[1].email, Cypress.env("selectorLoginPass"), loginData[1].pass, Cypress.env("selectorButtonToLogin"));
      cy.checkFalseLogin();
    });

    it("Login with incorrect pass", () => {
      cy.dataInputForLogin(Cypress.env("selectorLoginEmail"), loginData[2].email, Cypress.env("selectorLoginPass"), loginData[2].pass, Cypress.env("selectorButtonToLogin"));
      cy.contains("Неверное имя пользователя или пароль").should("exist")
      cy.checkFalseLogin();
    });

    it("Login with spaces in input fields", () => {
      cy.dataInputForLogin(Cypress.env("selectorLoginEmail"), loginData[3].email, Cypress.env("selectorLoginPass"), loginData[3].pass, Cypress.env("selectorButtonToLogin"));
      cy.checkFalseLogin();

    });
  });
});
