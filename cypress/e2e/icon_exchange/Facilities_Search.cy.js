

function Facility_Search() {

    it('Click on Facility.', () => {
        cy.get(':nth-child(3) > .relative > .cursor-pointer > :nth-child(2)').click().wait(2000)
    });

it('Search First Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#name').type("ANSAB").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });


 it('Search Facility Email.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#email').type("troontechnologies.com").wait(1000)
   cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 it('Search Phone Number..', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#phone').type("4567895376").wait(1000)
   cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });



 ////////////
 it('Search Facility Contract.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('.custom-select__input-container').click().type("icon exchange").type('{enter}')
   cy.get(':nth-child(2) > :nth-child(2) > .btn').click()

    cy.wait(5000)

});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });










}
export default Facility_Search;