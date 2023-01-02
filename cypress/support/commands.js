// const textData = require("../fixtures/checkendpoints.json");
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Cypress.Commands.add("enterText", (selector, text) => {
//  cy.get(selector).type(`${text}{enter}`);
//});

Cypress.Commands.add(
  "login",
  (selectorForEmail, selectorForPass, selectorButton, email, pass) => {
    cy.visit("/login");
    cy.get(selectorForEmail).type(email);
    cy.get(selectorForPass).type(pass);
    cy.get(selectorButton).click();
  }
);

/* Cypress.Commands.add("goToEndpoint", (selectorToEndpoint) => {
  cy.get(selectorToEndpoint).click();
}); */

Cypress.Commands.add("goToEndpoint", (selectorToEndpoint) => {
  cy.get(selectorToEndpoint).click();
});

Cypress.Commands.add("urlContains", (endpoint) => {
  cy.url().should("contain", Cypress.config("baseUrl") && endpoint);
});

Cypress.Commands.add("elementIsVisible", (selectorVisible) => {
  cy.get(selectorVisible).should("be.visible");
});

Cypress.Commands.add("inputName", (inputForName, userName) => {
  cy.get(inputForName).type(userName);
});

Cypress.Commands.add("inputEmail", (inputForEmail, userEmail) => {
  cy.get(inputForEmail).type(userEmail);
});

Cypress.Commands.add("inputPass", (inputForPass, userPass) => {
  cy.get(inputForPass).type(userPass);
});

Cypress.Commands.add("positiveLogin", (buttonToLogin, selectorAccount) => {
  cy.get(buttonToLogin).click();
  cy.get(selectorAccount).should("be.visible");
});

Cypress.Commands.add("negativeLogin", (buttonToLogin, selectorFalseLogin) => {
  cy.get(buttonToLogin).click();
  cy.get(buttonToLogin).should("be.visible");
  cy.get(selectorFalseLogin).should("be.visible");
});

Cypress.Commands.add(
  "positiveRegistrate",
  (buttonToRegistrate, selectorTrueRegistration) => {
    cy.get(buttonToRegistrate).click();
    cy.get(selectorTrueRegistration).should("be.visible");
  }
);

Cypress.Commands.add(
  "negativeRegistrate",
  (buttonToRegistrate, selectorFalseRegistration) => {
    cy.get(buttonToRegistrate).click();
    cy.get(selectorFalseRegistration).should("be.visible");
  }
);
