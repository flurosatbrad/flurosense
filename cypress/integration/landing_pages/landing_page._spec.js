describe ('flurosat landing page',()=>{
    it('should have flurosat logo', ()=>{
        cy.gotoFlurosat();
        cy.get('.landing__logo').should('be.visible');
    })

    it('should contain the heading flurosense', ()=>{
        cy.gotoFlurosat();
        cy.get('.landing__main-content').should('contain', 'FluroSense')
    })

    it('should have a login link',()=>{
        cy.gotoFlurosat();
        cy.contains('Login').should('have.attr', 'href', '/app/login')
    })
    
    it ('should have a sign up link',()=>{
        cy.gotoFlurosat();
        cy.contains('Sign Up').should('have.attr', 'href', '/app/sign-up')
    })
})