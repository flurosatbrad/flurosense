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
    body: { email: Cypress.env('login').correctEmail, password: Cypress.env('login').correctPassword }
  }).then(response => {
    window.localStorage.setItem("jwt", response.body.result.token);
  });
});


Cypress.Commands.add('logout', ()=>{
    cy.get('#mini-menu-log-out').click({force:true})
})


//for draw function, get random location out of ten returned my openstreetmap.
Cypress.Commands.add('randomLocation', ()=>{
    cy.request({
      method:"GET",
      url:"https://nominatim.openstreetmap.org/search?format=json&q=hello",
    })
    .then((res)=>{
      let randomIndex = Math.floor(Math.random()*10);
      return res.body[randomIndex];
    })
})


//To select a farm.  When log as admin, unable to add farm straight away without selecting an existing farm first
Cypress.Commands.add('selectFarm',()=>{
  cy.visit("/app/admin/maps/136");
  cy.get("#map__select-farm", { timeout: 60000 })
    .click()
    .type("demo");
  cy.contains("1_Demo").click();
})