const common={
    login: () =>{
        cy.visit(Cypress.env('baseUrl'));
        cy.contains('Login').click();
        cy.get('#login-email', {timeout:60000}).type(Cypress.env('correctEmail'));
        cy.get('#login-password').type(Cypress.env('correctPassword'))
        cy.get('.fluro-auth__login-btn').click();
    },
    logout: ()=>cy.get('#mini-menu-log-out').click()
}

export default common;