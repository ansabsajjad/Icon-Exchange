function edit_facility() {

it('Click on the Facility.', () => {
    cy.get(':nth-child(3) > .relative > .cursor-pointer > :nth-child(2)').click()
    expect(true).to.equal(true)
});

it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > :nth-child(7) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').wait(1000).click()
    expect(true).to.equal(true)

});

it('Click on View button', () => {
    cy.contains('View').wait(1000).click();
    expect(true).to.equal(true)

});

it('Click on Edit button', () => {
    cy.get('.btn').click()
    expect(true).to.equal(true)

});
it('Edit Facility Name.', () => {
    cy.get(':nth-child(1) > .form-group > .form-controls > input').type(" ABC")
    expect(true).to.equal(true)

});

it('Edit Facility Contracted By.', () => {
    cy.get(':nth-child(3) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("icon anesthesia").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('Edit Facility Address.', () => {
    cy.get(':nth-child(5) > .form-group > .form-controls > input').type(" ABC")
    expect(true).to.equal(true)

});

it('Click on Update Button.', () => {
    cy.get('[type="submit"]').click({force: true})
    expect(true).to.equal(true)

});

}

export default edit_facility;