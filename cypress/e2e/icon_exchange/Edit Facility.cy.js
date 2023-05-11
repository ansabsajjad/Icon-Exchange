function edit_facility() {

it('Click on the Facility.', () => {
    cy.get(':nth-child(3) > .relative > .cursor-pointer > :nth-child(2)').click({force:true}).wait(5000)
    expect(true).to.equal(true)
});

it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > :nth-child(7) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(3000)
    expect(true).to.equal(true)

});

it('Click on View button', () => {
    cy.contains('View').click({force:true}).wait(3000);
    expect(true).to.equal(true)

});

it('Click on Edit button', () => {
    cy.get('.btn').click({force:true}).wait(3000)
    // expect(true).to.equal(true)

});
it('Edit Facility Name.', () => {
    cy.get('[placeholder="Enter Name"]').clear().type("Johar Khatoon Hospital, Now Health Care Centre")
    expect(true).to.equal(true)

});

it('Edit Facility Contracted By.', () => {
    cy.get('[id="react-select-11-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-11-option-1').click({force: true})   /////===============Array Index 0
    cy.wait(2000)
    expect(true).to.equal(true)
});


it('Edit Facility Phone number.', () => {
    cy.get('[placeholder="1 (702) 123-4567"]').clear().type("13565955656")
});
it('Edit Facility Address.', () => {
    cy.get(':nth-child(5) > .form-group > .form-controls > input').clear().type("St-1, Block 2, Federal B Area, Karachi")
    expect(true).to.equal(true)

});


it('Update Country.', () => {
    cy.get('[id="react-select-12-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-12-option-1').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Update State.', () => {
    cy.get('[id="react-select-13-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-13-option-1').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Update City.', () => {
    cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-14-option-1').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});


it('Update Assigned To.', () => {
    cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-15-option-1').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Update Contact Name.', () => {
    cy.get('[name="contacts.0.contactName"]').clear().type("Muhammad Azlaan");
});




it('Click on Update Button.', () => {
    cy.get('[type="submit"]').click({force: true})
    expect(true).to.equal(true)

});

}

export default edit_facility;