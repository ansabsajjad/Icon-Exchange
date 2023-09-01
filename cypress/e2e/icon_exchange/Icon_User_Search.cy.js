

function Icon_Users_Search() {
it('Click on Icon Users.', () => {
    cy.get(':nth-child(4) > .relative > .cursor-pointer > :nth-child(2)').click()
});

it('Search First Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#firstName').click().type("ANSAB")
     cy.get('[data-testid="search"]').click({force:true})
    cy.wait(5000)


});


it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

});

it('Search Last Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#lastName').click().type("imtiaz")
    cy.get(':nth-child(2) > :nth-child(2) > .btn')
    cy.wait(5000)


});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

});



it('Search Email.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#email').click().type("troontechnologies.com")
    cy.get(':nth-child(2) > :nth-child(2) > .btn')
    cy.wait(5000)


});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

});


it('Search Company.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('.custom-select__input-container').click().type('{enter}') 
    cy.get(':nth-child(2) > :nth-child(2) > .btn')
    cy.wait(5000)


});

it('Clear Filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

});





}
export default Icon_Users_Search;
