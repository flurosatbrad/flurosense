import name from 'random-username-generator';

describe('Login', ()=>{

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


    it('should login correctly with email and password logout to sign in page',()=>{
        common.login();
        cy.url().should('contain', 'app/maps');
        common.logout();
        cy.url().should('contain','app/login');
    
    })
    
    
    it('should login correctly with email and password and create a farm', ()=>{
        common.login();
        cy.contains('Add Farm').click();
        let randomName = name.generate();
        cy.get('input#group-name').type(randomName);
        cy.contains('Save').click();
        cy.contains('Success').should('be.visible');
        cy.wait(4000);
        cy.get('.farm-feature__name', {timeout: 60000}).should('have.text', randomName);
        cy.get('#map__select-farm').should('have.attr','title', randomName);
        cy.get('#map__select-farm').click();
        cy.get('#map__select-farm-menu-list').contains(randomName).should('exist')
        common.logout();
    })

    
    it('should correctly login with email and password and create a field using KML files',()=>{
        common.login();
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
        common.logout();
      
    })

    it ('should correclty login with email and password and create a field using draw function', ()=>{
        common.login();
        cy.get('#map__select-farm').click();
        cy.contains('Farm No 22').click();
        cy.contains('Add field').click();
        cy.contains('Draw Fields').click();
        cy.get('#fluro-map')
        .trigger('pointerdown',{x:450,y:100})
        .trigger('pointerup')
        .trigger('pointerdown', {x:500, y:200})
        .trigger('pointerup')
        .trigger('pointerdown', {x:100, y:300})
        .trigger('pointerup')
        .trigger('pointerdown', {x:450, y:100})
        let randomName = name.generate();
        cy.get('#kml-name').clear().type(randomName)
        cy.contains('Save fields').click();
        cy.contains('Success').should('be.visible');
        //wait for Success message to hide to test if name is present.
        cy.wait(3000)
        cy.contains(randomName).should('be.visible')
        cy.wait(3000);
        common.logout();
    })
        
})
    
    
    //'Add Farm' button should have a unique identifier, same with 'Login' and 'Sign up' buttons on landing page.
