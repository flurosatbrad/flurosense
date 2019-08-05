describe('Login tests', ()=>{
    // it('should show a error message if incorrect email or password', ()=>{
    //     cy.visit(Cypress.env('baseUrl'));
    //     cy.contains('Login').click();
    //     cy.get('#login-email', {timeout:60000}).type(Cypress.env('wrongName'));
    //     cy.get('#login-password').type(Cypress.env('wrongPassword'))
    //     cy.get('.fluro-auth__login-btn').click();
    //     cy.contains('Wrong email or password').should('be.visible');
    // })

    // it('should sign up a new user via email successfully',()=>{
    //     cy.visit(Cypress.env('baseUrl'));        
    //     cy.contains('Sign Up').click();
    //     cy.get('#reg-first-name').type(Cypress.env('newFirstName'));
    //     cy.get('#reg-surname').type(Cypress.env('newSurname'));
    //     cy.get('#reg-email').type(Cypress.env('newEmail'));
    //     cy.get('#reg-selection-control-group-radios-toggle').click();
    //     cy.contains('agronomist').click();
    //     cy.get('.iti-arrow').click();
    //     cy.contains('China').click();
    //     cy.get('.intl-tel-input input').type(Cypress.env('newPhoneNumber'));
    //     //this is not working correctly 
    //     cy.get('.fluro-auth__login-btn').click().then((xhr)=>{
    //         if(xhr.status===200){
    //             cy.contains('Your invitation is on its way').should('be.visible');
    //         }else{
    //             cy.contains('This email address is already registered').should('be.visible')
    //         }
    //     })      
    // })

    it('should login with gmail account correctly',()=>{
        cy.visit(Cypress.env('baseUrl'));      
        cy.get('[href="/app/login"]').click();  
        cy.get(`[href="/api/v1/login/google"]`).click();
    })

})