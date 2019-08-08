// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "cypress-file-upload";

Cypress.Commands.add('gotoFlurosat', ()=>{
    cy.visit('https://staging.flurosat.com/');
})

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "https://staging.flurosat.com/api/v1/login",
    body: { email: "brad@flurosat.com", password: "password" }
  }).then(response => {
    window.localStorage.setItem("jwt", response.body.result.token);
  });
});



