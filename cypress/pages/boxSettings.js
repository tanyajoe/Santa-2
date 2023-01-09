export class boxSettings {
    elements = {
        nameBoxField: () => cy.get('.form-page-group__main > .frm-wrapper > .frm'),
        switchCashLimit: () => cy.get(':nth-child(3) > .form-page-group__main > .switch-panel > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle'),
        cashLimitField: () => cy.get('.MuiGrid-grid-xs-5 > .frm-wrapper > .frm'),
        cashLimitCurrencyField: () => cy.get('.MuiGrid-grid-xs-7 > .frm-wrapper > .frm'),
        switchWishes: () => cy.get(':nth-child(4) > .form-page-group__main > :nth-child(1) > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle'),
        switchPost: () => cy.get(':nth-child(2) > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle'),
        switchPhoneNumbers: () => cy.get(':nth-child(3) > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle').click(),
        switchUseNames: () => cy.get(':nth-child(4) > .switch-panel__toggle-wrap > .switch__wrapper > .switch > .switch__toggle'),
        saveChangesBtn: () => cy.get('.btn-main')
    }

    rename(newNameBox) {
        this.elements.nameBoxField().clear().type(newNameBox);
    }

    cashLimitOn(sumLimit, currency) {
        this.elements.switchCashLimit().click();
        this.elements.cashLimitField().type(sumLimit);
        this.elements.cashLimitCurrencyField().select(currency);
    }

    changeExtraSettings() {
        this.elements.switchWishes().click();
        this.elements.switchPost().click();
        this.elements.switchPhoneNumbers().click();
        this.elements.switchUseNames().click();
    }

    saveChanges() {
        this.elements.saveChangesBtn().click();
    }

    checkNameBox(nameBox) {
        this.elements.nameBoxField().should('have.value', nameBox);
    }

    checkAmountCashLimit(sumLimit, currency) {
        this.elements.cashLimitField().should('have.value', sumLimit);
        this.elements.cashLimitCurrencyField().should('have.value', currency)
    }


}