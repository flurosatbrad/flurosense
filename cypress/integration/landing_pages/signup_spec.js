describe('flurosat sign up',()=>{
    beforeEach(()=>{
        cy.gotoFlurosat();
        cy.contains('Sign Up').click();
    })

    it('should direct to sign up page',()=>{
        cy.url().should('contain','/app/sign-up')
        //should contain form
        cy.get('#reg-first-name').should('be.visible')
        cy.get('#reg-surname').should('be.visible')
        cy.get('#reg-email').should('be.visible')
        cy.get('#reg-selection-control-group-radios-toggle').should('be.visible')
        cy.get('.fluro-auth__input-container--phone').should('be.visible')
        //google sign up
        cy.get('.auth-google-btn').should('have.attr', 'href','/api/v1/login/google')
        //agx sign up
        cy.get('.auth-agx-btn').should('have.attr', 'href','/api/v1/login/agx')
        //Submit form button
        cy.contains('Try it out').should('have.attr', 'type','submit')
        //link if already a user
        cy.get('.fluro-auth__login-ln').should('have.attr', 'href', '/app/login')
    })

    it ('should successfully create a new user', ()=>{
        cy.get('#reg-first-name').type(Cypress.env('login').newFirstName)
        cy.get('#reg-surname').type(Cypress.env('login').newSurname)
        cy.get('#reg-email').type(Cypress.env('login').newEmail)
        cy.get('#reg-selection-control-group-radios-toggle').click();
        cy.contains('other').click();
        cy.get('[type="tel"]').type(Cypress.env('login').newPhoneNumber);
        cy.contains('Try it out').click();
        cy.get('div.second-field > h3').should('have.text', 'Your invitation is on its way')
    })


    it ('should give notification if email already used', ()=>{
        cy.get('#reg-first-name').type(Cypress.env('login').newFirstName)
        cy.get('#reg-surname').type(Cypress.env('login').newSurname)
        cy.get('#reg-email').type(Cypress.env('login').newEmail)
        cy.get('#reg-selection-control-group-radios-toggle').click();
        cy.contains('other').click();
        cy.get('[type="tel"]').type(Cypress.env('login').newPhoneNumber);
        cy.contains('Try it out').click();
        cy.get('.notification-error').should('be.visible');
        cy.get('.notification-message').should('have.text', 'This email address is already registered. You can reset your password using the sign-in page.')
    })
    
    it ('should let user know if required fields are not completed', ()=>{
        cy.contains('Try it out').click();
        cy.get(".fluro-auth__error--first-name").should ('have.text', 'first name is a required field')
        cy.get(".fluro-auth__error--surname").should ('have.text', 'surname is a required field')
        cy.get('.fluro-auth__error--email').should('have.text', 'email is a required field')
    })

})