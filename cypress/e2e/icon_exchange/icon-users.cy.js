import Random_Textt from "./Random_Text";

function Icon_Users() {

it('IU-1 Click on Ison users.', () => {
    cy.get(':nth-child(4) > .relative > .cursor-pointer > :nth-child(2)').click()    
    cy.wait(4000);
expect(true).to.equal(true)
});




it('IU-2 Click on the Create icon user.', () => {
    cy.get('.px-5').click()
expect(true).to.equal(true)
});


it('IU-3 Enter First Name.', () => {
    cy.get(':nth-child(1) > .form-group > .form-controls > input').type("ANSAB  " + Random_Textt(), {delay:150})
expect(true).to.equal(true)
});


it('IU-4 Enter Last NAme.', () => {
    cy.get(':nth-child(2) > .form-group > .form-controls > input').type("XYZ " + Random_Textt(), {delay:150})
expect(true).to.equal(true)
});


it('IU-5 Enter Email.', () => {
    cy.get(':nth-child(3) > .form-group > .form-controls > input').type("ansab+" + Random_Textt() + "@troontechnologies.com", {delay:150})
expect(true).to.equal(true)
});


it('IU-6 Enter Phone Number.', () => {
    cy.get('.form-control').type("456789537", {delay:150})
expect(true).to.equal(true)
});


it('IU-7 Enter Date of Birth.', () => {
    cy.get('.customdate').type("11/28/2012").type('{enter}')
expect(true).to.equal(true)
});

it('IU-8 Enter Role.', () => {
    cy.get(':nth-child(6) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon User").type('{enter}').wait(2000)
expect(true).to.equal(true)
});
it('IU-9 Enter Department.', () => {
    cy.get(':nth-child(7) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("accounts").type('{enter}').wait(2000)
expect(true).to.equal(true)
});

it('IU-10 Enter Company Name.', () => {
    cy.get(':nth-child(8) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("NOn icon exchange").type('{enter}').wait(2000)
expect(true).to.equal(true)

});

it('IU-11 Enter Password.', () => {
    cy.get(':nth-child(9) > .form-group > .form-controls > input').type("Admin@123", {delay:150})
    cy.get(':nth-child(9) > .form-group > .form-controls > .ico').click()
expect(true).to.equal(true)
});

it('IU-12 Enter Confirm Password.', () => {
    cy.get(':nth-child(10) > .form-group > .form-controls > input').type("Admin@123", {delay:150})
    cy.get(':nth-child(10) > .form-group > .form-controls > .ico').click()
expect(true).to.equal(true)
});

it('IU-13 Click on Submit Button.', () => {
    cy.wait(3000)
    cy.get('[type="submit"]').click({force: true})
expect(true).to.equal(true)
});
it('IU-14 Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Icon User is Created Successfully')
    cy.wait(4000)
});


}

export default Icon_Users;
