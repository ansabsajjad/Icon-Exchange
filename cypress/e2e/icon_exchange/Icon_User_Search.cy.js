

function Icon_Users_Search() {
it('Click on Icon Users.', () => {
    cy.get(':nth-child(4) > .relative > .cursor-pointer > :nth-child(2)').click()
});

it('Search First Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#firstName').click().type("ANSAB")
    
});

it('Search Facility Contract.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('.custom-select__input-container').click().type("icon exchange").type('{enter}')
    cy.wait(5000)

});












}
export default Icon_Users_Search;
