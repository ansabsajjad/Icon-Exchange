import View_Provider from "./View_Provider.cy";

function Assign_Facility(){

    it('VP-1 Click on provider.', () => {
        cy.get('.submenu.active > .relative > .cursor-pointer > :nth-child(2)').click()
        cy.wait(2000)
        expect(true).to.equal(true)
    
    });
    
    it('VP-2 Scroll to the right side.', () => {
        cy.get('.tableresponsive').scrollTo("right").wait(2000)
        expect(true).to.equal(true)
    });

    it('VP-3 Click on 3 dot button.', () => {
        cy.get(':nth-child(1) > :nth-child(13) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });

    it('VP-4 Click on View button', () => {
        cy.contains('View').wait(1000).click();
        cy.wait(4000)
        expect(true).to.equal(true)
    });

    it('VP-5 Scroll.', () => {
        cy.scrollTo("center").wait(2000)
        cy.scrollTo("bottom").wait(2000)
        cy.scrollTo("top").wait(2000)
        
    });
it('Vp-6 Click on Facilities.', () => {
    cy.get('[data-testid="facilities-tab"] > .tabname').click()
    cy.wait(4000)
    expect(true).to.equal(true)
});

it('VP-7 Scroll.', () => {
    cy.scrollTo("bottom",{ensureScrollable: false}).wait(2000)
    cy.scrollTo("top").wait(2000)    
});

it('VP-8 Click on Assign Facilities.', () => {
    // cy.get('.mt-90 > .btn').click()
    // cy.get('.px-5').click()
    cy.contains('Assign Facility').click()
    cy.wait(4000)
    expect(true).to.equal(true)

});

it('VP-9 Add Facility Name', () => {
    cy.get('.col-md-12 > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()//.type("nanaimo regional General Hospital").type('{enter}').wait(2000)
    cy.get('#react-select-18-option-1').click()
    expect(true).to.equal(true)

});

it('VP-10 Add Facility Contracted By.', () => {
    cy.get(':nth-child(2) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon exchange").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-11 Provider working for.', () => {
    cy.get(':nth-child(3) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon exchange").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-12 Add Area Expertise', () => {
    cy.get(':nth-child(4) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("others").type('{enter}').wait(2000)
    cy.get(':nth-child(4) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("registered Nurse").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-13 Paper work submitted to Facility.', () => {
    // cy.get(':nth-child(5) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("no",{delay: 60}).type('{enter}').wait(2000)
    // cy.get(':nth-child(5) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__indicators > .custom-select__indicator > img').type("yes",{delay: 60}).type('{enter}').wait(2000)
    cy.get('[id="react-select-22-input"]').type("no",{delay: 60}).type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-14 Paperwork submitted date.', () => {
    cy.get(':nth-child(6) > .form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').type("02/14/2023").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it("VP-15 Facility's approval", () => {
    cy.get(':nth-child(7) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()//.type("approved").type('{enter}').wait(2000)
    cy.get('#react-select-23-option-1').click()
    expect(true).to.equal(true)

});

it('VP-16 Received Facility Approval Date.', () => {
    cy.get(':nth-child(8) > .form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').type("02/21/2023").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-17 Payroll Enrollment Status.', () => {
    cy.get(':nth-child(9) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click()//.type("approved").type('{enter}').wait(2000)
    cy.get('#react-select-24-option-1').click()
    expect(true).to.equal(true)

});

it('VP-18 Currently Active.', () => {
    cy.get('[id="react-select-25-input"]').type("yes").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('VP-19 Currently Effective Start Date.', () => {
    cy.get(':nth-child(11) > .form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').type("02/27/2023").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});

it('Vp-20 Effective End Date.', () => {
    cy.get(':nth-child(12) > .form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').type("03/02/2023").type('{enter}').wait(2000)
});

it('VP-21 Reoppoinment Date.', () => {
    cy.get(':nth-child(13) > .form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').type("03/04/2023").type('{enter}').wait(2000)
    expect(true).to.equal(true)

});


it('VP-22 Click on Save button.', () => {
    cy.get('[type="submit"]').click({force:true})
    expect(true).to.equal(true)

});


it('VP-', () => {
    
    expect(true).to.equal(true)

});


it('VP-', () => {
    
    expect(true).to.equal(true)

});


it('VP-', () => {
    
    expect(true).to.equal(true)

});


it('VP-', () => {
    
    expect(true).to.equal(true)

});


it('VP-', () => {
    
    expect(true).to.equal(true)

});


it('VP-', () => {
    
    expect(true).to.equal(true)

});


it('VP-', () => {
    
    expect(true).to.equal(true)

});


it('VP-', () => {
    
    expect(true).to.equal(true)

});












}
export default Assign_Facility;