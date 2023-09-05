

function Facility_Search() {

    it('Click on Facility.', () => {
        cy.get(':nth-child(3) > .relative > .cursor-pointer > :nth-child(2)').click().wait(2000)
    });

it('Search First Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#name').type("ANSAB").wait(1000)
     cy.get('[data-testid="search"]').click({force:true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });


 it('Search Facility Email.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#email').type("troontechnologies.com").wait(1000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });

 it('Search Phone Number..', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#phone').type("4567895376").wait(1000)
    cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });



 ////////////
 it('Search Facility Contract.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[id="react-select-10-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-10-option-1').click({force: true})   /////===============Array Index 0
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

 });










}
export default Facility_Search;