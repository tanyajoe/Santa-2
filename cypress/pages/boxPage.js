export class boxPage {
    elements = {
        settingsBtn: () => cy.get('.layout-1__header-wrapper-fixed > .layout-1__header-secondary > .header-secondary > .header-secondary__right-item > .toggle-menu-wrapper > .toggle-menu-button > .toggle-menu-button--inner'),
        menu: () => cy.get('.layout-1__header-wrapper-fixed > .layout-1__header-secondary__menu > .header-secondary-menu > .organizer-menu > .organizer-menu__wrapper'),
        menuItemSettingsBox: () => cy.get('.layout-1__header-wrapper-fixed > .layout-1__header-secondary__menu > .header-secondary-menu > .organizer-menu > .organizer-menu__wrapper > :nth-child(4)'),
        menuItemArchiveAndDelete: () => cy.get('.layout-1__header-wrapper-fixed > .layout-1__header-secondary__menu > .header-secondary-menu > .organizer-menu > .organizer-menu__wrapper > :nth-child(5)')

    }

    goToSettingsBox() {
        this.elements.settingsBtn().click();
        this.elements.menu().should('exist');
        this.elements.menuItemSettingsBox().click();
        cy.contains('Сохранить изменения').should("exist");
        cy.contains('Назад к коробке').should("exist");
    }

    goToArchiveAndDelete() {
        this.elements.settingsBtn().click();
        this.elements.menu().should('exist');
        this.elements.menuItemArchiveAndDelete().click();
        cy.contains('Архивировать коробку').should("exist");
        cy.contains('Удалить коробку').should("exist");
    }

   /*  cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
    cy.get('.layout-1__header-wrapper-fixed > .layout-1__header-secondary > .header-secondary > .header-secondary__right-item > .toggle-menu-wrapper > .toggle-menu-button > .toggle-menu-button--inner').click();
    cy.get('.layout-1__header-wrapper-fixed > .layout-1__header-secondary__menu > .header-secondary-menu > .organizer-menu > .organizer-menu__wrapper').should("exist");
    cy.get('.layout-1__header-wrapper-fixed > .layout-1__header-secondary__menu > .header-secondary-menu > .organizer-menu > .organizer-menu__wrapper > :nth-child(4)').click();
    cy.contains('Настройки коробки').should("exist"); */
}