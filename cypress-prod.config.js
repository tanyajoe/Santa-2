const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y3kdb2",
  env: {
    email: "islmstosk@gmail.com",
    pass: 'test1234',
    
    selectorRegName: ":nth-child(3) > .frm",
    selectorRegEmail: "input[name=email]",
    selectorButtonToReg: ".btn-main",
    
    selectorLoginEmail: "input[name=email]",
    selectorLoginPass: "input[name=password]",
    selectorButtonToLogin: ".btn-main",
  },
  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }

});
