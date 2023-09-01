function Edit_Roles() {

    
it('ER-1 Click on Roles.', () => {
    cy.get(':nth-child(5) > li > .cursor-pointer').click({force:true})
    cy.wait(2000)
expect(true).to.equal(true)
});

it('ER-2 Click on 3 dots.', () => {
    cy.get(':nth-child(1) > :nth-child(5) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
    expect(true).to.equal(true)

});

it('ER-3 Click on Edit button', () => {
    cy.contains('Edit').wait(1000).click();
    cy.wait(2000)
    expect(true).to.equal(true)

});

it('ER-4 Edit Role Name.', () => {
    cy.get('.form-controls > input').clear().type("ANSAB")
    expect(true).to.equal(true)

});

it('ER-5 Edit Description.', () => {
    cy.get('textarea').clear().type("This is description.")
    expect(true).to.equal(true)

});

it('ER-6 Manage Permissions', () => {
    cy.get(':nth-child(1) > .form-checkbox > .form-check-label').click({force: true})
    expect(true).to.equal(true)

});

it('ER-7 Click on Update button.', () => {
     cy.get('[data-testid="createbtn"]').click({force: true})
    expect(true).to.equal(true)

});


it('ER-8 Verifying the Toast message.', () => {
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Role is Updated Successfully')
    cy.wait(4000)
expect(true).to.equal(true)
});



}

export default Edit_Roles;
