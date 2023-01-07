import { faker } from '@faker-js/faker';
const loginPageElements = require("../fixtures/pages/loginPageSelectors.json");

describe("santa login - UI and API", () => {
    let oldPassword = "12345678";
    
    it("user can not login with old password - UI", () => {
        let newPassword = faker.internet.password();
        cy.log(newPassword);
        
        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        cy.get(loginPageElements.loginField).type("tanyajoooe@gmail.com");
        cy.get(loginPageElements.passwordField).type(oldPassword);
        cy.get(loginPageElements.loginButton).click();
        cy.contains("Коробки").should("exist");
        cy.changePassword(newPassword);
        cy.contains("Выйти с сайта").click();

        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        cy.get(loginPageElements.loginField).type("tanyajoooe@gmail.com");
        cy.get(loginPageElements.passwordField).type(oldPassword);
        cy.get(loginPageElements.loginButton).click();
        cy.contains("Неверное имя пользователя или пароль").should("exist");
        cy.get(loginPageElements.passwordField).clear().type(newPassword);
        cy.get(loginPageElements.loginButton).click();
        cy.changePassword(oldPassword);
    })

    it("user can not login with old password - API, UI", () => {
        let newPassword = faker.internet.password();
        cy.log(newPassword);

        cy.APIchangePassword(newPassword);

        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        cy.get(loginPageElements.loginField).type("tanyajoooe@gmail.com");
        cy.get(loginPageElements.passwordField).type(oldPassword);
        cy.get(loginPageElements.loginButton).click();
        cy.contains("Неверное имя пользователя или пароль").should("exist");
        cy.get(loginPageElements.passwordField).clear().type(newPassword);
        cy.get(loginPageElements.loginButton).click();
        cy.contains("Коробки").should("exist");
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item').click({force: true});
        cy.contains("Выйти с сайта").click();

        cy.APIchangePassword(oldPassword);

        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        cy.get(loginPageElements.loginField).type("tanyajoooe@gmail.com");
        cy.get(loginPageElements.passwordField).type(oldPassword);
        cy.get(loginPageElements.loginButton).click();
        cy.contains("Коробки").should("exist");
    })
})