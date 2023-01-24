function delete_facility() {

it('Click on the Facility.', () => {
    cy.get(':nth-child(3) > .relative > .cursor-pointer > :nth-child(2)').click()
    expect(true).to.equal(true)
});

it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > :nth-child(7) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click()
});

it('Click on View button', () => {
    cy.contains('View').click();
});

it('Click on Edit button', () => {
    cy.get('.btn').click()
});
}

export default delete_facility;