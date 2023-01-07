const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y3kdb2",
  env: {
    email: "islmstosk@gmail.com",
    pass: 'test1234'
  },
  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }

});
