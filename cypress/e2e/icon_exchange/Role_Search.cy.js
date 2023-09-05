
function Icon_Role_Search() {

    it('R-1 Click on Roles.', () => {
        cy.get(':nth-child(5) > li > .cursor-pointer').click({force:true})
        cy.wait(2000)
    expect(true).to.equal(true)
    });

    


it('Search by Role.', () => {
    cy.get('.left-icon').click({force:true})
    cy.get('#name').click().type("ANSAB")
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});




it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});

it('Search by Description.', () => {
    cy.get('.left-icon').click({force:true})
    cy.get('#description').click().type("ANSAB")
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)

});




it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click()
    cy.wait(2000)

});






}
export default Icon_Role_Search;