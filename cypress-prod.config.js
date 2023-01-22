const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 100000,
  projectId: "y3kdb2",
  env: {
    email: "islmstosk@gmail.com",
    pass: 'test1234',
    //cookie: "_ym_uid=1672941084407187915; _ym_d=1672941084; connect.sid=s:DZIEy9JUcAAfsj6o6cgjC4roNwPHTx8r.2gXiO9cF56EAGIofImimSDhB44eWlXbKOls4zL3jmss; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5MTYzMTEsImlhdCI6MTY3MzEyMjA2NiwiZXhwIjoxNjc1NzE0MDY2fQ.5Np7u4y_jZPYypGLgzcu6WiMfHa3lV8fRyWhVhiiEck; _ym_isad=1",
    cookie: "_ym_uid=1672941084407187915; _ym_d=1672941084; connect.sid=s:xY6SwAZTkxxlZmU1egbAnUsQ_SVOoS0V.joTZ6PqvUt6Mn8PWtJxT6GDrfYzj7JavU0ycCa6oXds; _ym_isad=1; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5MTYzMTEsImlhdCI6MTY3NDQxNDkzMCwiZXhwIjoxNjc3MDA2OTMwfQ.msVwxb6-p-8cpbJX0l6xfuA7RczzVPLU86bxuc7wC6o",
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
