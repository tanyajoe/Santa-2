const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y3kdb2",
  env: {
    email: "tanyajoooe@gmail.com",
    pass: "12345678",
    selectorRegName:
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > input",
    selectorRegEmail: "input[name=email]",
    selectorButtonToReg:
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div",
    selectorTrueReg:
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > div > span.picture-notice__title.txt-h3--semi.txt",
    selectorFalseReg:
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__error > div",
    selectorLoginEmail: "input[name=email]",
    selectorLoginPass: "input[name=password]",
    selectorButtonToLogin:
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div",
    selectorAccount:
      "#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(3) > div",
    selectorFalseLogin:
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__error > div > span",

    /*     regName1: "Jenny",
    regEmail1: "venaupajumo-8333@yopmail.com",
    regName2:
      "Имяиз64символов_Имяиз64символов_Имяиз64символов_Имяиз64символов_",
    regEmail2: "acrotrimeigi-2011@yopmail.com",
    regName3:
      "Имяиз63символов_Имяиз63символов_Имяиз63символов_Имяиз63символов_",
    regEmail3: "loiyoitaffeiffa-4358@yopmail.com",
    regName4: "Ом",
    regEmail4: "griquallinoutri-3841@yopmail.com", */

    //buttonBoxes: "#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(1) > div"
  },
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
