import {login, logout} from '../fixtures/common';

describe('Login', ()=>{

    it('should show a error message if incorrect email or password', ()=>{
        cy.visit(Cypress.env('baseUrl'));
        cy.contains('Login').click();
        cy.get('#login-email', {timeout:60000}).type(Cypress.env('wrongName'));
        cy.get('#login-password').type(Cypress.env('wrongPassword'))
        cy.get('.fluro-auth__login-btn').click();
        cy.contains('Wrong email or password').should('be.visible');
    })


    it('should give message if trying to signup with email that has already been used',()=>{
        cy.visit(Cypress.env('baseUrl'));        
        cy.contains('Sign Up').click();
        cy.get('#reg-first-name').type(Cypress.env('newFirstName'));
        cy.get('#reg-surname').type(Cypress.env('newSurname'));
        cy.get('#reg-email').type(Cypress.env('newEmail'));
        cy.get('#reg-selection-control-group-radios-toggle').click();
        cy.contains('agronomist').click();
        cy.get('.iti-arrow').click();
        cy.contains('China').click();
        cy.get('.intl-tel-input input').type(Cypress.env('newPhoneNumber'));
        cy.get('.fluro-auth__login-btn').click(); 
        cy.contains('This email address is already registered').should('be.visible')
    })

    it('should successfully create a new user',()=>{
        
    })


    it('should logout to sign in page',()=>{
        login();
        cy.url().should('not.contain', 'app/login');
        logout();
        cy.url().should('contain','app/login');
    
    })
            
})
    
  
