import Random_Textt from "./Random_Text";


function Provider_test() {

    // it('1', () => {
    //     cy.get(':nth-child(3) > .row > :nth-child(1) > .form-group > :nth-child(2) > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
    //     .click({force:true}).type("united kingdo", {delay:150}).wait(4000)
    //    cy.wait(3000)
    
    // });
    

    // it('2', () => {
       
    //     cy.get(':nth-child(3) > .row > :nth-child(1) > .form-group > :nth-child(2) > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container')
    //     .click({force:true}).type("united kingdo", {delay:150}).wait(4000)
    //    cy.wait(3000)
    
    // });
    
        
    // it('3', () => {
       
    //     cy.get(':nth-child(3) > .row > :nth-child(1) > .form-group > :nth-child(2) > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__indicators > .custom-select__indicator > img')
    //     .click({force:true}).type("united kingdo", {delay:150}).wait(4000)
    //    cy.wait(3000)
    
    // });
    
    // it('4', () => {
       
    //     cy.get(':nth-child(3) > .row > :nth-child(1) > .form-group > :nth-child(2) > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__indicators')
    //     .click({force:true}).type("united kingdo", {delay:150}).wait(4000)
    //    cy.wait(3000)
    
    // });
    
      
     
    // it('', () => {
    //     // cy.get(':nth-child(3) > .row > :nth-child(1) > .form-group > :nth-child(2) > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
    //     // cy.get(':nth-child(3) > .row > :nth-child(1) > .form-group > :nth-child(2) > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force: true}).type("abccc")
    //     cy.get('[class="custom-select__single-value css-1dimb5e-singleValue"]').click({force:true}).type("abccc")

    // });

it('', () => {
    cy.get('#left-tabs-example-tabpane-2 > form > .form-footer-full > .container > .row > .col-md-8 > .btn-text').click()
});

it('Enter Phone Number.', () => {
    cy.get(':nth-child(1) > .form-group > .form-controls > .react-tel-input > .form-control').clear().type(923483745911).wait(2000)
});

it('Enter Contact relationship.', () => {
    cy.get(':nth-child(2) > .mt-24 > .row > .col-md-12 > .form-group > .form-controls > input').click({force:true}).clear().type("xyz")
});

it('Enter Cotact Name.', () => {
    cy.get(':nth-child(2) > .mt-24 > .row > :nth-child(2) > .form-group > .form-controls > input').clear().type(Random_Textt())
});

it('Enter Contact Number.', () => {
    cy.get(':nth-child(3) > .form-group > .form-controls > .react-tel-input > .form-control').clear().type(923483745911).wait(2000)
});

it('Click on Save and continue.', () => {
    cy.get('#left-tabs-example-tabpane-3 > form > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force:true})
});

it('Add area of experties.', () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(1) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(3) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(6) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(9) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
});

it('Click on save and continue.', () => {
    cy.get('.formstyle > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force:true})
    cy.wait(2000)
});

it('Enter Name of your resume.', () => {
    cy.get('[placeholder="Name your Resume / CV"]').click({force:true}).type(Random_Textt()).wait(2000)
});

it('Upload Profile pcture.', () => {
    cy.get(':nth-child(1) > .accordion-collapse > .accordion-body > .formstyle > .dropzone > .global-file-style').click({force:true})
    cy.get(':nth-child(1) > .accordion-collapse > .accordion-body > .formstyle > .dropzone > .global-file-style').attachFile("dummy.pdf")
     
});







}
export default Provider_test;