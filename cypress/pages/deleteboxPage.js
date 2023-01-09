export class deleteBoxPage {
    elements = {
        deleteBoxField: () => cy.get(':nth-child(2) > .form-page-group__main > .frm-wrapper > .frm'),
        deleteBoxBtn: () => cy.get('.btn-service')
    }

    deleteBox(input) {
        this.elements.deleteBoxField().type(input);
        this.elements.deleteBoxBtn().should('be.visible').click();
    }

}