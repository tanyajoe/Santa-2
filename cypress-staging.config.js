const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y3kdb2",
  env: {
    email: "tanyajoooe@gmail.com",
    pass: '12345678'
  },
  e2e: {
    baseUrl: 'https://staging.lpitko.ru',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }

});
