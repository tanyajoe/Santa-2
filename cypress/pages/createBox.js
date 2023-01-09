import { faker } from '@faker-js/faker';

export class createBox {
    elements = {
        nameField: () => cy.get(':nth-child(1) > .frm'),
        idField: () => cy.get(':nth-child(3) > .frm'),
        btnArrow: () => cy.get('.btn-arrow-right'),
        switchCashLimit: () => cy.get('.switch__toggle'),
        cashLimitField: () => cy.get('.MuiGrid-grid-xs-5 > .frm-wrapper > .frm'),
        cashLimitCurrencyField: () => cy.get('.MuiGrid-grid-xs-7 > .frm-wrapper > .frm'),
        switchWishes: () => cy.get(':nth-child(1) > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle'),
        switchPost: () => cy.get(':nth-child(2) > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle'),
        switchPhoneNumbers: () => cy.get(':nth-child(3) > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle'),
        swirchUseNames: () => cy.get(':nth-child(4) > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle')
    }

    goToStep1(name, id) {
        
        cy.contains("Придумайте название коробке").should("exist");
        cy.contains("Шаг 1 из 5").should("exist");
        this.elements.nameField().type(name);
        this.elements.idField().clear().type(id);
        this.elements.btnArrow().click();
    }

    goToStep2(pictureSelector) {
        cy.contains("Выберите обложку").should("exist");
        cy.contains("Шаг 2 из 5").should("exist");
        cy.get(pictureSelector).click()
        this.elements.btnArrow().click();
    }

    goToStep3WithoutLimit() {
        cy.contains("Стоимость подарков").should("exist");
        cy.contains("Шаг 3 из 5").should("exist");
        this.elements.btnArrow().click();
    }

    goToStep3WithLimit(sumLimit, currensy) {
        cy.contains("Стоимость подарков").should("exist");
        cy.contains("Шаг 3 из 5").should("exist");
        this.elements.switchCashLimit().click();
        this.elements.cashLimitField().should("exist");
        this.elements.cashLimitCurrencyField().should("exist");
        this.elements.cashLimitCurrencyField().should('have.value', 'rub');
        this.elements.cashLimitField().type(sumLimit);
        this.elements.cashLimitCurrencyField().select(currensy);
        this.elements.cashLimitCurrencyField().should('have.value', currensy);
        this.elements.btnArrow().click();

    }

    goToStep4() {
        cy.contains("Дополнительные настройки").should("exist");
        cy.contains("Шаг 4 из 5").should("exist");
        this.elements.btnArrow().click();
    }

    goToStep4ChangeSwitches() {
        cy.contains("Дополнительные настройки").should("exist");
        cy.contains("Шаг 4 из 5").should("exist");
        this.elements.switchWishes().click();
        this.elements.switchPost().click();
        this.elements.switchPhoneNumbers().click();
        this.elements.swirchUseNames().click();
        this.elements.btnArrow().click();
    }

    checkNewBox(nameBox) {
        cy.contains(nameBox).should("exist");
        cy.contains("Участники").should("exist");
        cy.contains("Моя карточка").should("exist");
        cy.contains("Подопечный").should("exist");
    }

    

}