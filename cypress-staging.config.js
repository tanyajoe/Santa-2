const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "y3kdb2",
  env: {
    email: "tanyajoooe@gmail.com",
    pass: "12345678",
    //cookie: "_ym_uid=1672941084407187915; _ym_d=1672941084; connect.sid=s:DZIEy9JUcAAfsj6o6cgjC4roNwPHTx8r.2gXiO9cF56EAGIofImimSDhB44eWlXbKOls4zL3jmss; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5MTYzMTEsImlhdCI6MTY3MzEyMjA2NiwiZXhwIjoxNjc1NzE0MDY2fQ.5Np7u4y_jZPYypGLgzcu6WiMfHa3lV8fRyWhVhiiEck; _ym_isad=1",
    cookie: "_ym_uid=1673040386524679934; _ym_d=1673040386; connect.sid=s:UoauwBVdVGFLfeTCofEk_Vbh6Y3fORvj.pqV3Wwaai9rLTDKWHKvHwh74ntieOP0BjYnShvc6xKA; _ym_isad=1; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwMDAwMTUsImlhdCI6MTY3NDQyMjgxMiwiZXhwIjoxNjc0NDI2NDEyfQ.LvxLehkNTAsvcFUJoT2RguXtP3pAhg2eIaSRInzuPtk",
    selectorRegName: ":nth-child(3) > .frm",
    selectorRegEmail: "input[name=email]",
    selectorButtonToReg: ".btn-main",
    
    selectorLoginEmail: "input[name=email]",
    selectorLoginPass: "input[name=password]",
    selectorButtonToLogin: ".btn-main",


  },
  e2e: {
    baseUrl: "https://staging.lpitko.ru/",
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
