describe('login page',()=>{
    beforeEach(()=>{
        cy.gotoFlurosat();
        cy.contains('Login').click();
    });

    it('should take user to login page', ()=>{
        cy.url().should('contain','/app/login')
        //form is visible
        cy.get('.fluro-auth__controls').should('be.visible');
        cy.get('#login-email').should('be.visible');
        cy.get('#login-password').should('be.visible');
        cy.get('.fluro-auth__login-btn').should('have.attr', 'type', 'submit')
        //password forgotten link
        cy.contains('Forgot password?').should('have.attr', 'href', '/app/reset-password')
        //google login 
        cy.get('a.auth-google-btn').should('have.attr', 'href','/api/v1/login/google');
        //agx login
        cy.get('a.auth-agx-btn').should('have.attr','href', '/api/v1/login/agx');
        cy.get('a.auth-agx-btn img').should('have.attr', 'src', '/assets/agx.png')
        //sign up link 
        cy.contains('Sign up').should('have.attr', 'href', '/app/sign-up')
    })

    it('should give message if either email or password is incorrect',()=>{
        cy.get('#login-email').type(Cypress.env('login').wrongEmail)
        cy.get('#login-password').type(Cypress.env('login').wrongPassword)
        cy.get('.fluro-auth__login-btn').click();
        cy.contains('Wrong email or password').should('be.visible');
    })
    
    it('should direct you to a new page with url containing /maps/ on successful login',()=>{
        cy.get('#login-email').type(Cypress.env('login').correctEmail)
        cy.get('#login-password').type(Cypress.env('login').correctPassword)
        cy.get('.fluro-auth__login-btn').click();
        cy.url().should('contain', '/maps/')
        cy.logout();
    })
})