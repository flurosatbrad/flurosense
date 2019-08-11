import name from 'random-username-generator';

describe("farm creation", () => {
  beforeEach(() => {
    cy.login();
    cy.selectFarm();
  });

  // it('should allow the addition of a new farm',()=>{
        // cy.selectFarm();
  //     cy.contains('Add Farm').click();
  //     cy.get('#group-name').type(Cypress.env('create').newFarm);
  //     cy.contains('Save').click();
  //     cy.get('.notification-title').should('contain', 'Success');
  //     cy.get('.farm-feature__name').should('contain', Cypress.env('create').newFarm);
  //     cy.get('#map__select-farm').should('have.attr','value', Cypress.env('create').newFarm);
  //     cy.get('.no-fields-select').should('have.text', 'No fields')
  //     cy.logout();
  // })

  // it ('should allow adding of field via kml file', ()=>{
    // cy.selectFarm();
  //     cy.contains('Add field').click();
  //     //Use cypress-file-upload npm package to simulate file upload
  //     const fileName = '/kml/23 TOP PD.kml';
  //     cy.fixture(fileName).then(fileContent => {
  //         cy.get('#map-up-kml').upload({ fileContent , fileName, mimeType: 'application/vnd.google-earth.kml+xml', encoding:'utf8' });
  //     });
  //     cy.get('#kml-name').should('have.attr', 'value','/kml/23 TOP PD')
  //     cy.contains('Save fields').click();
  //     cy.get('#toggle-field-info').click()
  //     //check size of newly added field
  //     cy.get('.field-item__area').should('contain', '62.79 ha')
  //     cy.logout();
  // })

  it("should allow adding of field and crop via drawing", () => {
    cy.contains("Add field").click();
    cy.get(`[title='Search location']`).click();
    //type random location in location search bar
    cy.randomLocation().then(res=>{
        cy.get('[placeholder="Search location"]')
      .click()
      .type(res.display_name)   
    })
    cy.get("ul#toolbar-search-menu-list > li:first").click({force: true});
    cy.contains('Draw Fields').click();
    //draw triangle on map
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
        cy.get('#map__select-field').should('have.attr','value', randomName);
        cy.contains(randomName).parent().children('.field-item__info-controls').children('.field-item__edit').click();
        cy.get('.field-item__name').should('contain', randomName);
        //set sowing date
        cy.get('#sowing-planting-date').click();
        cy.get('button.react-datepicker__navigation--previous').click();
        cy.get('[aria-label="day-2"]').first().click();
        //set harvest date
        cy.get('#season-end-date').click();
        cy.get('[aria-label="day-27"]').first().click({force:true});
        //set crop type
        cy.get('#crop-type-toggle').click();
        cy.contains('Papaya').click();
        cy.get('#crop-custom-sub-type').type('Yum');
        cy.contains('Save Crop').click();
  });
})
