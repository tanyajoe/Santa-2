import { faker } from '@faker-js/faker';
import { loginPage } from '../pages/loginPage';
const loginPageElements = require("../fixtures/pages/loginPageSelectors.json");

describe("santa login - UI and API", () => {
    let oldPassword = "12345678";
    let currentLoginPage = new loginPage();
    
    it("user can not login with old password - UI", () => {
        let newPassword = faker.internet.password();
        cy.log(newPassword);
        
        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        currentLoginPage.login("tanyajoooe@gmail.com", oldPassword)
        //cy.get(loginPageElements.loginField).type("tanyajoooe@gmail.com");
        //cy.get(loginPageElements.passwordField).type(oldPassword);
        //cy.get(loginPageElements.loginButton).click();
    
        cy.contains("Коробки").should("exist");
        /* cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item').click();
        cy.get('.layout-column-start > :nth-child(1) > .frm').type(newPassword);
        cy.get(':nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm').type(newPassword);
        cy.get('.layout-row-end > .btn-service').click(); */
        cy.changePassword(newPassword);
        cy.contains("Выйти с сайта").click();

        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        currentLoginPage.login("tanyajoooe@gmail.com", oldPassword)

        //cy.get(loginPageElements.loginField).type("tanyajoooe@gmail.com");
        //cy.get(loginPageElements.passwordField).type(oldPassword);
        //cy.get(loginPageElements.loginButton).click();

        cy.contains("Неверное имя пользователя или пароль").should("exist");

        cy.get(loginPageElements.passwordField).clear().type(newPassword);
        cy.get(loginPageElements.loginButton).click();

        cy.changePassword(oldPassword);
    })

    it("user can not login with old password - API, UI", () => {
        let newPassword = faker.internet.password();
        cy.log(newPassword);

        cy.APIchangePassword(newPassword);

/*         cy.request({
            method: "PUT",
            headers: {
                Cookie: "_ym_uid=1672941084407187915; _ym_d=1672941084; connect.sid=s:DZIEy9JUcAAfsj6o6cgjC4roNwPHTx8r.2gXiO9cF56EAGIofImimSDhB44eWlXbKOls4zL3jmss; _ym_isad=1; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5MTYzMTEsImlhdCI6MTY3MzEyMjA2NiwiZXhwIjoxNjc1NzE0MDY2fQ.5Np7u4y_jZPYypGLgzcu6WiMfHa3lV8fRyWhVhiiEck"
            },
            url: "https://santa-secret.ru/api/account/password",
            body: { "password": newPassword }
        }).then((response) => {
            expect(response.status).to.equal(200);
        }) */

        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        currentLoginPage.login("tanyajoooe@gmail.com", oldPassword);
        cy.contains("Неверное имя пользователя или пароль").should("exist");
        cy.get(loginPageElements.passwordField).clear().type(newPassword);
        cy.get(loginPageElements.loginButton).click();


        //currentLoginPage.login("tanyajoooe@gmail.com", newPassword)
        cy.contains("Коробки").should("exist");
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item').click({force: true});
        cy.contains("Выйти с сайта").click();

        cy.APIchangePassword(oldPassword);

  /*       cy.request({
            method: "PUT",
            headers: {
                Cookie: "_ym_uid=1672941084407187915; _ym_d=1672941084; connect.sid=s:DZIEy9JUcAAfsj6o6cgjC4roNwPHTx8r.2gXiO9cF56EAGIofImimSDhB44eWlXbKOls4zL3jmss; _ym_isad=1; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5MTYzMTEsImlhdCI6MTY3MzEyMjA2NiwiZXhwIjoxNjc1NzE0MDY2fQ.5Np7u4y_jZPYypGLgzcu6WiMfHa3lV8fRyWhVhiiEck"
            },
            url: "https://santa-secret.ru/api/account/password",
            body: { "password": oldPassword }
        }).then((response) => {
            expect(response.status).to.equal(200);
        }) */

        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        currentLoginPage.login("tanyajoooe@gmail.com", oldPassword)
        cy.contains("Коробки").should("exist");
    })
})