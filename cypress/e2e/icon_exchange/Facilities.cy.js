import Random_Textt from "./Random_Text";

function Add_Icon_Exchange_Facilities() {


it('F1- Click on the Facilities.', () => {
    cy.wait(3000)
    cy.get(':nth-child(3) > .relative > .cursor-pointer > :nth-child(2)').click()
    expect(true).to.equal(true)
});

it("F2- Click on 'Add Facility' button.", () => {
    cy.get('.px-5').should('be.visible').click()
    cy.wait(3000)
    expect(true).to.equal(true)

});

//////////////////////////

it('Add Facility Name.', () => {
    cy.get('[placeholder="Enter Name"]').clear().type("Johar Khatoon Hospital, Now Health Care Centre")
    expect(true).to.equal(true)

});

it('Add Facility Email.', () => {
    cy.get('[name="facilityEmail"]').type("ansab+" + Random_Textt() + "@troontechnologies.com")
});

it('Add Facility Contracted By.', () => {
    cy.get('[id="react-select-11-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-11-option-0').click({force: true})   /////===============Array Index 0
    cy.wait(2000)
    expect(true).to.equal(true)
});


it('Add Facility Phone number.', () => {
    cy.get('[placeholder="1 (702) 123-4567"]').clear().type("13565955656")
});
it('Add Facility Address.', () => {
    cy.get(':nth-child(5) > .form-group > .form-controls > input').clear().type("St-1, Block 2, Federal B Area, Karachi")
    expect(true).to.equal(true)

});


it('Add Country.', () => {
    cy.get('[id="react-select-12-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-12-option-0').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Add State.', () => {
    cy.get('[id="react-select-13-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-13-option-0').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Add City.', () => {
    cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-14-option-0').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});


it('Add Assigned To.', () => {
    cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-15-option-0').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Add Area of expertise.', () => {
    cy.get('[id="react-select-16-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-16-option-0').click({force: true})   /////===============Array Index 1
    cy.wait(3000)
    expect(true).to.equal(true)
});

it('Add Hourly rate.', () => {
    cy.get('[data-testid="hourlyRate"]').type("12")
});

it('Add Bill Rate.', () => {
    cy.get('[data-testid="billRate"]').type("40")
});
it('Add Contact Name.', () => {
    cy.get('[name="contacts.0.contactName"]').clear().type("Muhammad Azlaan");
});

it('Add Contact Email.', () => {
    cy.get('[name="contacts.0.contactEmail"]').type("ansab+" + Random_Textt() + "@troontechnologies.com")
});

// /////////////////////////////

// it('F3- Enter Facility Name.', () => {
//     cy.get(':nth-child(1) > .form-group > .form-controls > input').type("ANSAB " + Random_Textt(), {delay:150})
//     expect(true).to.equal(true)

// });

// it('F4- Enter Email.', () => {
//     cy.get(':nth-child(2) > .form-group > .form-controls > input').type("ansab+" + Random_Textt() + "@troontechnologies.com")
//     expect(true).to.equal(true)

// });

// it('F-5 Enter Facility Contracted By.', () => {
//     cy.get(':nth-child(3) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon exchange").type('{enter}').wait(2000)
//     expect(true).to.equal(true)

// });

// it('F6- Add Number.', () => {
//     cy.get('.form-control').type("4567895376")
//     expect(true).to.equal(true)

// });

// it('F-7 Add Address.', () => {
//     cy.get(':nth-child(5) > .form-group > .form-controls > input').type("xyz Hospital")
//     expect(true).to.equal(true)
    
// });


// it('F-8 Add Country.', () => {
//     cy.get(':nth-child(6) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("United states").type('{enter}').wait(2000)
//     expect(true).to.equal(true)
    
// });


// it('F-9 Enter State.', () => {
//     cy.get(':nth-child(7) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("alabama").type('{enter}').wait(4000)
//     expect(true).to.equal(true)
    
// });


// it('F-10 Enter City.', () => {
//     cy.get(':nth-child(8) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("alabaster").type('{enter}').wait(2000)
//     expect(true).to.equal(true)
    
// });


// it('F-11 Enter Password.', () => {
//     cy.get(':nth-child(9) > .form-group > .form-controls > input').type("Admin@123")
//     cy.get(':nth-child(9) > .form-group > .form-controls > .ico').click()
//     expect(true).to.equal(true)
    
// });


// it('F-12 Enter Confirm Password.', () => {
//     cy.get(':nth-child(10) > .form-group > .form-controls > input').type("Admin@123")
//     cy.get(':nth-child(10) > .form-group > .form-controls > .ico').click()
//     expect(true).to.equal(true)
    
// });


it('F-13 Click on Created Button.', () => {
    cy.get('[type="submit"]').click()
cy.wait(1000)
    expect(true).to.equal(true)
 
});

it('F-14 Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Facility is Added Successfully')
    cy.wait(4000)
});




}
export default Add_Icon_Exchange_Facilities;
