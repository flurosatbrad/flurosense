describe('Login', ()=>{

    const logout= ()=>cy.get('#mini-menu-log-out').click();

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
    //     //this part is not working correctly 
    //     cy.get('.fluro-auth__login-btn').click(); 
    //     cy.contains('This email address is already registered').should('be.visible')
    // })


    // it('should login correctly with email and password logout to sign in page',()=>{
    //     cy.visit(Cypress.env('baseUrl'));
    //     cy.contains('Login').click();
    //     cy.get('#login-email', {timeout:60000}).type(Cypress.env('correctEmail'));
    //     cy.get('#login-password').type(Cypress.env('correctPassword'))
    //     cy.get('.fluro-auth__login-btn').click();
    //     cy.url().should('contain', 'app/maps');
    //     logout();
    //     cy.url().should('contain','app/login');
    
    // })
    
    
    // it('should login correctly with email and password and create a farm', ()=>{
    //     cy.visit(Cypress.env('baseUrl'));
    //     cy.contains('Login').click();
    //     cy.get('#login-email', {timeout:60000}).type(Cypress.env('correctEmail'));
    //     cy.get('#login-password').type(Cypress.env('correctPassword'))
    //     cy.get('.fluro-auth__login-btn').click();
    //     cy.url().should('contain', 'app/maps');
    //     cy.contains('Add Farm').click();
    //     cy.get('input#group-name').type('New test farm');
    //     cy.contains('Save').click();
    //     cy.contains('Success').should('be.visible');
    //     cy.get('.farm-feature__name', {timeout: 60000}).should('have.text', 'New test farm');
    //     logout();
    // })

    
    it('should correctly login with email and password and create a field using KML files',()=>{
        cy.visit(Cypress.env('baseUrl'));
        cy.contains('Login').click();
        cy.get('#login-email', {timeout:60000}).type(Cypress.env('correctEmail'));
        cy.get('#login-password').type(Cypress.env('correctPassword'))
        cy.get('.fluro-auth__login-btn').click();
        cy.url().should('contain', 'app/maps');
        cy.get('#map__select-farm').click();
        cy.contains('Farm No 22').click();
        cy.contains('Add field').click();
     
        //Use cypress-file-upload npm package to simulate file upload
        const fileName = '/kml/23 TOP PD.kml';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#map-up-kml').upload({ fileContent , fileName, mimeType: 'application/vnd.google-earth.kml+xml', encoding:'utf8' });
        });    
        cy.get('#kml-name').should('have.attr', 'value','/kml/23 TOP PD')
        cy.wait(3000);
        logout();
      
    })
        
})
    
    
    //'Add Farm' button should have a unique identifier, same with 'Login' and 'Sign up' buttons on landing page.
