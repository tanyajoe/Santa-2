const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y3kdb2",
  env: {
    email: "tanyajoooe@gmail.com",
    pass: "12345678",

    selectorRegName: ":nth-child(3) > .frm",
    selectorRegEmail: "input[name=email]",
    selectorButtonToReg: ".btn-main",
    
    selectorLoginEmail: "input[name=email]",
    selectorLoginPass: "input[name=password]",
    selectorButtonToLogin: ".btn-main",


  },
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
