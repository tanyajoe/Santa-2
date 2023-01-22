
import { faker } from '@faker-js/faker';
import { createBox } from '../pages/createBox';
import { boxSettings } from '../pages/boxSettings';
import { boxPage } from '../pages/boxPage';
import { deleteBoxPage } from '../pages/deleteBoxPage';
const createBoxElements = require("../fixtures/pages/createBoxSelectors.json");

describe("actions with boxes", () => {


    context("create boxes - positive tests", () => {
        let nameBox = faker.word.noun();
        let idBox = faker.random.alphaNumeric(6);
        let ApiUrl = Cypress.config('baseUrl') + "api/box/" + idBox;

        beforeEach(() => {
        cy.login("tanyajoooe@gmail.com", "12345678");
        cy.contains("Коробки").should("exist").click({force: true});

        });

         afterEach(() => {
        cy.ApiDeleteBox(ApiUrl);
        })

        it("create new box without cash limit", () => {

            Cypress.on('uncaught:exception', (err, runnable) => {

                return false
              })

            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click({force: true});
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector1);
            newBox.goToStep3WithoutLimit();
            newBox.goToStep4();
            newBox.checkNewBox(nameBox);
        })

        it("create new box with cash limit and 'rub' currency", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {

                return false
              })


            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click().debug();
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector2);
            newBox.goToStep3WithLimit(999999, 'rub');
            newBox.goToStep4();
            newBox.checkNewBox(nameBox);
        })

        it("create new box with cash limit and 'rub' currency", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
      
                return false
              })

            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click().debug();
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector3);
            newBox.goToStep3WithLimit(1, 'eur');
            newBox.goToStep4();
            newBox.checkNewBox(nameBox);
        })

        it("create new box with cash limit and 'uah' currency", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
    
                return false
              })

            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click().debug();
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector4);
            newBox.goToStep3WithLimit(500, 'uah');
            newBox.goToStep4();
            newBox.checkNewBox(nameBox);
        })

        it("create new box with cash limit and 'byn' currency", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
      
                return false
              })

            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click().debug();
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector5);
            newBox.goToStep3WithLimit(100, 'byn');
            newBox.goToStep4();
            newBox.checkNewBox(nameBox);
        })

        it("create new box with cash limit and 'kzt' currency", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
    
                return false
              })

            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click().debug();
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector6);
            newBox.goToStep3WithLimit(999998, 'kzt');
            newBox.goToStep4();
            newBox.checkNewBox(nameBox);
        })

        it("create new box with cash limit and 'usd' currency", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {

                return false
              })

            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click().debug();
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector7);
            newBox.goToStep3WithLimit(2, 'usd');
            newBox.goToStep4();
            newBox.checkNewBox(nameBox);
        })

        it("create new box with changes extra-settings", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
   
                return false
              })

            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click().debug();
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector8);
            newBox.goToStep3WithoutLimit();
            newBox.goToStep4ChangeSwitches();
            newBox.checkNewBox(nameBox);
        })

  
})

    context.only("create boxes - negative tests", () => {

        let nameBox = faker.word.noun();
        let idBox = faker.random.alphaNumeric(6);
 

        beforeEach(() => {
        cy.login("tanyajoooe@gmail.com", "12345678");
        cy.contains("Коробки").should("exist").click({force: true});
        });


        it("create new box with cash limit '0'", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
               
                return false
              })

            let newBox = new createBox();
            cy.get(createBoxElements.btnToCreateBox).click();
            newBox.goToStep1(nameBox, idBox);
            newBox.goToStep2(createBoxElements.pictureSelector2);
            newBox.goToStep3WithInvalidLimit(0, 'rub');
            
        })

})

    context("edit boxes", () => {
       let nameBox = faker.word.noun();
       let newNameBox = faker.word.noun();
       let idBox = faker.random.alphaNumeric(6);
       let apiUrlCreateBox = Cypress.config('baseUrl') + "api/box"

        beforeEach(() => {
        cy.login("tanyajoooe@gmail.com", "12345678");
        cy.contains("Коробки").should("exist");
        });

        afterEach(() => {
            let ApiUrl = Cypress.config('baseUrl') + "api/box/" + idBox;
            cy.ApiDeleteBox(ApiUrl);
            })

        it("edit box: change name and added cash limit 'eur'", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {

                return false
              })

        let settings = new boxSettings;
        let crntBoxPage = new boxPage;
        let cashLimit = faker.finance.amount(1, 999999, 0);
        cy.ApiCreateBox(apiUrlCreateBox, nameBox, idBox);
        
        cy.contains("Коробки").should("exist").click({force: true});
        cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
        crntBoxPage.goToSettingsBox();
        settings.rename(newNameBox);
        settings.cashLimitOn(cashLimit, 'eur');
        settings.changeExtraSettings();
        settings.saveChanges();
        cy.contains('Коробки').click({force: true});
        cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should('exist').click();
        crntBoxPage.goToSettingsBox();
        settings.checkNameBox(newNameBox);
        settings.checkAmountCashLimit(cashLimit, 'eur')
        cy.get('.form-page-group__main > .frm-wrapper > .frm').should('have.value', newNameBox);
        })

        it("edit box: change name and added cash limit 'rub'", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
 
                return false
              })

            let settings = new boxSettings;
            let crntBoxPage = new boxPage;
            let cashLimit = faker.finance.amount(1, 999999, 0);
            cy.ApiCreateBox(apiUrlCreateBox, nameBox, idBox);
            
            cy.contains("Коробки").should("exist").click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
            crntBoxPage.goToSettingsBox();
            settings.rename(newNameBox);
            settings.cashLimitOn(cashLimit, 'rub');
            settings.changeExtraSettings();
            settings.saveChanges();
            cy.contains('Коробки').click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should('exist').click();
            crntBoxPage.goToSettingsBox();
            settings.checkNameBox(newNameBox);
            settings.checkAmountCashLimit(cashLimit, 'rub')
            cy.get('.form-page-group__main > .frm-wrapper > .frm').should('have.value', newNameBox);
        }) 

        it("edit box: change name and added cash limit 'uah'", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
  
                return false
              })

            let settings = new boxSettings;
            let crntBoxPage = new boxPage;
            let cashLimit = faker.finance.amount(1, 999999, 0);
            cy.ApiCreateBox(apiUrlCreateBox, nameBox, idBox);
            
            cy.contains("Коробки").should("exist").click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
            crntBoxPage.goToSettingsBox();
            settings.rename(newNameBox);
            settings.cashLimitOn(cashLimit, 'uah');
            settings.changeExtraSettings();
            settings.saveChanges();
            cy.contains('Коробки').click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should('exist').click();
            crntBoxPage.goToSettingsBox();
            settings.checkNameBox(newNameBox);
            settings.checkAmountCashLimit(cashLimit, 'uah')
            cy.get('.form-page-group__main > .frm-wrapper > .frm').should('have.value', newNameBox);
        }) 

        it("edit box: change name and added cash limit 'byn'", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {

                return false
              })

            let settings = new boxSettings;
            let crntBoxPage = new boxPage;
            let cashLimit = faker.finance.amount(1, 999999, 0);
            cy.ApiCreateBox(apiUrlCreateBox, nameBox, idBox);
            
            cy.contains("Коробки").should("exist").click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
            crntBoxPage.goToSettingsBox();
            settings.rename(newNameBox);
            settings.cashLimitOn(cashLimit, 'byn');
            settings.changeExtraSettings();
            settings.saveChanges();
            cy.contains('Коробки').click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should('exist').click();
            crntBoxPage.goToSettingsBox();
            settings.checkNameBox(newNameBox);
            settings.checkAmountCashLimit(cashLimit, 'byn')
            cy.get('.form-page-group__main > .frm-wrapper > .frm').should('have.value', newNameBox);
        }) 

        it("edit box: change name and added cash limit 'kzt'", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
              })

            let settings = new boxSettings;
            let crntBoxPage = new boxPage;
            let cashLimit = faker.finance.amount(1, 999999, 0);
            cy.ApiCreateBox(apiUrlCreateBox, nameBox, idBox);
            
            cy.contains("Коробки").should("exist").click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
            crntBoxPage.goToSettingsBox();
            settings.rename(newNameBox);
            settings.cashLimitOn(cashLimit, 'kzt');
            settings.changeExtraSettings();
            settings.saveChanges();
            cy.contains('Коробки').click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should('exist').click();
            crntBoxPage.goToSettingsBox();
            settings.checkNameBox(newNameBox);
            settings.checkAmountCashLimit(cashLimit, 'kzt')
            cy.get('.form-page-group__main > .frm-wrapper > .frm').should('have.value', newNameBox);
        }) 

        it("edit box: change name and added cash limit 'usd'", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {

                return false
              })

            let settings = new boxSettings;
            let crntBoxPage = new boxPage;
            let cashLimit = faker.finance.amount(1, 999999, 0);
            cy.ApiCreateBox(apiUrlCreateBox, nameBox, idBox);
            
            cy.contains("Коробки").should("exist").click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
            crntBoxPage.goToSettingsBox();
            settings.rename(newNameBox);
            settings.cashLimitOn(cashLimit, 'usd');
            settings.changeExtraSettings();
            settings.saveChanges();
            cy.contains('Коробки').click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should('exist').click();
            crntBoxPage.goToSettingsBox();
            settings.checkNameBox(newNameBox);
            settings.checkAmountCashLimit(cashLimit, 'usd')
            cy.get('.form-page-group__main > .frm-wrapper > .frm').should('have.value', newNameBox);
        }) 

})

    context("delete boxes", () => {

    let nameBox = faker.word.noun();
    let idBox = faker.random.alphaNumeric(6);
    let apiUrlCreateBox = Cypress.config('baseUrl') + "api/box"

    beforeEach(() => {
        cy.login("tanyajoooe@gmail.com", "12345678");
        cy.contains("Коробки").should("exist");
        });

        it("delete box - positive test", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
              })

            let crntBoxPage = new boxPage;
            let crntDeleteBoxPage = new deleteBoxPage;
            let input = "Удалить коробку"
            
        
            cy.ApiCreateBox(apiUrlCreateBox, nameBox, idBox);
            cy.contains("Коробки").should("exist").click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
            crntBoxPage.goToArchiveAndDelete();
            crntDeleteBoxPage.deleteBox(input);
            cy.contains("Пока что коробок нет").should('exist');
        })

        it.only("delete box - negative test", () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
              })

            let crntBoxPage = new boxPage;
            let crntDeleteBoxPage = new deleteBoxPage;
            let input = "Архивировать коробку"
        
            cy.ApiCreateBox(apiUrlCreateBox, nameBox, idBox);
            cy.contains("Коробки").should("exist").click({force: true});
            cy.get(':nth-child(1) > a.base--clickable > .user-card > .user-card__pic').should("exist").click();
            crntBoxPage.goToArchiveAndDelete();
            crntDeleteBoxPage.elements.deleteBoxField(input);
            cy.get('.btn-service').should('not.exist');

        })

})

})