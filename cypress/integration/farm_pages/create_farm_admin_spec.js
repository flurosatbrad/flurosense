describe("farm creation", () => {
  beforeEach(() => {
    cy.login();
    //admin specific
    cy.visit("/app/admin/maps/136");
    //no add farm available from first screen
    cy.get("#map__select-farm", { timeout: 60000 })
      .click()
      .type("demo");
    cy.contains("1_Demo").click();
  });

  // it('should allow the addition of a new farm',()=>{
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

  it("should allow adding of field via drawing", () => {
    cy.contains("Add field").click();
    cy.get(`[title='Search location']`).click();
    cy.randomLocation().then(res => {
      cy.get("#toolbar-search").type(res);
    });
    cy.get('[placeholder="Search location"]')
      .click()
      .type("{downarrow}{enter}");
  });
})[
  ({
    place_id: 8552031,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "node",
    osm_id: 903023539,
    boundingbox: ["10.4234769", "10.4634769", "-3.1466648", "-3.1066648"],
    lat: "10.4434769",
    lon: "-3.1266648",
    display_name: "Hello, Gaoua, Poni, Southwest, Burkina Faso",
    class: "place",
    type: "village",
    importance: 0.375,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/poi_place_village.p.20.png"
  },
  {
    place_id: 199179455,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "relation",
    osm_id: 7372164,
    boundingbox: ["63.7538429", "63.7552893", "11.5158892", "11.5183871"],
    lat: "63.75445315",
    lon: "11.5170327717391",
    display_name: "Hello, Verdal, Trøndelag, Norway",
    class: "landuse",
    type: "farmyard",
    importance: 0.30000000000000004
  },
  {
    place_id: 75128459,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "way",
    osm_id: 15356344,
    boundingbox: ["30.543624", "30.543753", "-98.407761", "-98.407386"],
    lat: "30.543753",
    lon: "-98.407761",
    display_name: "Hello, Horseshoe Bay, Llano County, Texas, 78657, USA",
    class: "highway",
    type: "residential",
    importance: 0.2
  },
  {
    place_id: 73273019,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "way",
    osm_id: 11342625,
    boundingbox: ["27.048351", "27.048734", "-82.082535", "-82.08214"],
    lat: "27.048456",
    lon: "-82.082417",
    display_name: "Hello, North Port, Sarasota County, Florida, 33954, USA",
    class: "highway",
    type: "residential",
    importance: 0.2
  },
  {
    place_id: 68335882,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "node",
    osm_id: 5743401953,
    boundingbox: ["-33.8788954", "-33.8787954", "151.2153839", "151.2154839"],
    lat: "-33.8788454",
    lon: "151.2154339",
    display_name:
      "Hello, Kells Lane, Darlinghurst, Sydney, Council of the City of Sydney, New South Wales, 2010, Australia",
    class: "amenity",
    type: "cafe",
    importance: 0.101,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/food_cafe.p.20.png"
  },
  {
    place_id: 267286918,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "node",
    osm_id: 6575710932,
    boundingbox: ["35.6626222", "35.6627222", "139.7003969", "139.7004969"],
    lat: "35.6626722",
    lon: "139.7004469",
    display_name:
      "hello!, Park Ave., Shibuya 1-chome, Shibuya, Tokyo, Kanto, 150-0041, Japan",
    class: "amenity",
    type: "cafe",
    importance: 0.101,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/food_cafe.p.20.png"
  },
  {
    place_id: 260685458,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "way",
    osm_id: 154701847,
    boundingbox: ["44.861009", "44.861158", "-0.6003", "-0.600083"],
    lat: "44.861086",
    lon: "-0.60019095",
    display_name:
      "Hello, Avenue de la Libération, Lafon Féline, Le Bouscat, Bordeaux, Gironde, New Aquitaine, Metropolitan France, 33110, France",
    class: "amenity",
    type: "childcare",
    importance: 0.101
  },
  {
    place_id: 262081760,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "node",
    osm_id: 6468701181,
    boundingbox: ["51.6165527", "51.6166527", "15.3170562", "15.3171562"],
    lat: "51.6166027",
    lon: "15.3171062",
    display_name:
      "Hello, 5, Plac Wolności, Łąkowa, Żagań, powiat żagański, Lubusz Voivodeship, 68-100, Poland",
    class: "shop",
    type: "clothes",
    importance: 0.101,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/shopping_clothes.p.20.png"
  },
  {
    place_id: 266177569,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "node",
    osm_id: 6548987685,
    boundingbox: ["39.1676892", "39.1677892", "-0.2427162", "-0.2426162"],
    lat: "39.1677392",
    lon: "-0.2426662",
    display_name:
      "Hello, Carrer d'Enrique Torres Gómez, Bahía Park, Sant Antoni, Cullera, la Ribera Baixa, Valencia, Valencian Community, 46400, Spain",
    class: "amenity",
    type: "bar",
    importance: 0.101,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/food_bar.p.20.png"
  },
  {
    place_id: 155752793,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    osm_type: "way",
    osm_id: 356410686,
    boundingbox: ["-24.865382", "-24.8651647", "152.3507163", "152.350857"],
    lat: "-24.86525295",
    lon: "152.350785567407",
    display_name:
      "Hello, Targo Street, Bundaberg Central, Bundaberg, Bundaberg Region, Queensland, 4670, Australia",
    class: "amenity",
    type: "restaurant",
    importance: 0.101,
    icon:
      "https://nominatim.openstreetmap.org/images/mapicons/food_restaurant.p.20.png"
  })
];
