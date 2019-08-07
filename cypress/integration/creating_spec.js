import name from 'random-username-generator';
import {login, logout} from '../fixtures/common';

describe('basic creating farms, fields, crop allocation',()=>{
    it('should login correctly with email and password and create a farm', ()=>{
        login();
        if(cy.url().contains('admin')){
        }else{
            
                        cy.contains('Add Farm').click();
                        let randomName = name.generate();
                        cy.get('input#group-name').type(randomName);
                        cy.contains('Save').click();
                        cy.contains('Success').should('be.visible');
                        cy.wait(2000);
                        cy.get('.farm-feature__name', {timeout: 60000}).should('have.text', randomName);
                        cy.get('#map__select-farm').should('have.attr','title', randomName);
                        cy.get('#map__select-farm').click();
                        cy.get('#map__select-farm-menu-list').contains(randomName).should('exist');
                        cy.get('.no-fields-select').should('have.text', 'No fields')
                        logout();

        }
    })

    
    it('should correctly login with email and password and create a field using KML files',()=>{
        login();
        cy.get('#map__select-farm').click();
        cy.contains('Farm No 22').click();
        cy.contains('Add field').click();
     
        //Use cypress-file-upload npm package to simulate file upload
        const fileName = '/kml/23 TOP PD.kml';
        cy.fixture(fileName).then(fileContent => {
            cy.get('#map-up-kml').upload({ fileContent , fileName, mimeType: 'application/vnd.google-earth.kml+xml', encoding:'utf8' });
        });    
        cy.get('#kml-name').should('have.attr', 'value','/kml/23 TOP PD')
        cy.get('#toggle-field-info').click();
        cy.get('.field-info-table').should('have.text', '155.16')
        cy.wait(3000);
        logout(); 
    })

    it ('should correclty login with email and password and create a field using draw function', ()=>{
        login();
        //get random from list of locations in env.json file
        // const locationArrayLength = Cypress.env('fieldDrawLocations').length;
        // const randomIndexNumber = Math.floor(Math.random()* locationArrayLength);
        // const location = Cypress.env('fieldDrawLocations')[randomIndexNumber];
        // cy.get('[title="Search location"]').click();
        // cy.get('#toolbar-search').type(location);
        // cy.get(`[value="${location}"]`).click().type('{downarrow}{enter}')

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
        logout();
    })
   
})
