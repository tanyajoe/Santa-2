export class loginPage {
    elements = {
        loginField: () => cy.get(':nth-child(3) > .frm'),
        passwordField: () => cy.get(':nth-child(4) > .frm'),
        loginButton: () => cy.get('.btn-main')
    }

    login(login,password) {     // доменные методы (пользовательские)
        this.elements.loginField().type(login);
        this.elements.passwordField().type(password);
        this.elements.loginButton().click();
    }

}