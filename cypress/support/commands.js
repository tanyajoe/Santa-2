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

/* Cypress.Commands.add(
  "login",
  (selectorForEmail, selectorForPass, selectorButton, email, pass) => {
    cy.visit("/login");
    cy.get(selectorForEmail).type(email);
    cy.get(selectorForPass).type(pass);
    cy.get(selectorButton).click();
  }
); */

Cypress.Commands.add('login', (email, password) => {
  cy.visit("/");
  cy.contains("Вход и регистрация").click({force: true});
  cy.get(':nth-child(3) > .frm').type(email);
  cy.get(':nth-child(4) > .frm').type(password);
  cy.get('.btn-main').click();
})


Cypress.Commands.add('changePassword', (newPassword) => {
  cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item').click();
  cy.get('.layout-column-start > :nth-child(1) > .frm').type(newPassword);
  cy.get(':nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm').type(newPassword);
  cy.get('.layout-row-end > .btn-service').click();
})

Cypress.Commands.add('APIchangePassword', (newPassword) => {
  cy.request({
    method: "PUT",
    headers: {
        Cookie: "_ym_uid=1672941084407187915; _ym_d=1672941084; connect.sid=s:DZIEy9JUcAAfsj6o6cgjC4roNwPHTx8r.2gXiO9cF56EAGIofImimSDhB44eWlXbKOls4zL3jmss; _ym_isad=1; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5MTYzMTEsImlhdCI6MTY3MzEyMjA2NiwiZXhwIjoxNjc1NzE0MDY2fQ.5Np7u4y_jZPYypGLgzcu6WiMfHa3lV8fRyWhVhiiEck"
    },
    url: "https://santa-secret.ru/api/account/password",
    body: { "password": newPassword }
}).then((response) => {
    expect(response.status).to.equal(200);
})
})



Cypress.Commands.add('ApiCreateBox', (nameBox, idBox) =>{
  cy.request({
    method: "POST",
    headers: {
        Cookie: "_ym_uid=1672941084407187915; _ym_d=1672941084; connect.sid=s:DZIEy9JUcAAfsj6o6cgjC4roNwPHTx8r.2gXiO9cF56EAGIofImimSDhB44eWlXbKOls4zL3jmss; _ym_isad=1; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5MTYzMTEsImlhdCI6MTY3MzEyMjA2NiwiZXhwIjoxNjc1NzE0MDY2fQ.5Np7u4y_jZPYypGLgzcu6WiMfHa3lV8fRyWhVhiiEck"
    },
    url: "https://santa-secret.ru/api/box",
    body: {
      "email": null,
      "name": nameBox,
      "key": idBox,
      "picture": "tree",
      "usePost": false,
      "useCashLimit": false,
      "cashLimit": null,
      "cashLimitCurrency": null,
      "useWish": false,
      "useCircleDraw": null,
      "isInviteAfterDraw": null,
      "isArchived": null,
      "createAdminCard": null,
      "isCreated": true,
      "useNames": false,
      "isPhoneRequired": false,
      "logo": null
  }
}).then((response) => {
    expect(response.status).to.equal(200);
})
})

Cypress.Commands.add('ApiDeleteBox', (ApiUrl) =>{
  cy.request({
    method: "DELETE",
    headers: {
        Cookie: "_ym_uid=1672941084407187915; _ym_d=1672941084; connect.sid=s:DZIEy9JUcAAfsj6o6cgjC4roNwPHTx8r.2gXiO9cF56EAGIofImimSDhB44eWlXbKOls4zL3jmss; _ym_isad=1; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5MTYzMTEsImlhdCI6MTY3MzEyMjA2NiwiZXhwIjoxNjc1NzE0MDY2fQ.5Np7u4y_jZPYypGLgzcu6WiMfHa3lV8fRyWhVhiiEck"
    },
    url: ApiUrl
}).then((response) => {
    expect(response.status).to.equal(200);
})
})

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



Cypress.Commands.add("dataInputForLogin", (loginSelector, login, passwordSelector, password, btnLoginSelector) => {
  cy.get(loginSelector).type(login);
  cy.get(passwordSelector).type(password);
  cy.get(btnLoginSelector).click();
  });

Cypress.Commands.add("checkTrueLogin", () => {
  cy.contains("Коробки").should("exist");
});

Cypress.Commands.add("checkFalseLogin", (buttonToLogin, selectorFalseLogin) => {
  cy.contains("Войти").should("exist");
});







Cypress.Commands.add("dataInputForRegistration", (nameSelector, name, emailSelector, email, btnRegistrateSelector) => {
  cy.get(nameSelector).type(name);
  cy.get(emailSelector).type(email);
  cy.get(btnRegistrateSelector).click();
  });

  Cypress.Commands.add(
    "checkTrueRegistrate", () => {
      cy.contains("Письмо отправлено!").should("exist");
    }
  );
  
  Cypress.Commands.add(
    "checkFalseRegistrate",
    () => {
      cy.contains("Некорректное поле").should("exist");
    }
  );
