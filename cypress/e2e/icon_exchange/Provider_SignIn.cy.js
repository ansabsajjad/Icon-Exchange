import Provider_data from "../../fixtures/Icon Exchange Credentials/Provider_Data.cy";
import Random_Textt from "./Random_Text";
import Provider_test from "./test.cy";

function Provider_SignIN() {




    it('2- Logo should be present.', () => {
        cy.get('.logo').should('be.visible')
          
      });
      
      it('3- Main image should be present.', () => {
        cy.wait(1000)
        cy.get('.login-bg').should('be.visible')
      });

    
    it('10- Enter Provider Email.', () => {
        cy.wait(2000);
        cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Provider_data.Provider_Email, {delay: 100})
        expect(true).to.equal(true)
       
    });
    
    it('11- Enter Provider Password.', () => {
        cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Provider_data.Provider_Password, {delay: 100})
        expect(true).to.equal(true)
    
    });
    
    it('12- Click on Sign In Button.', () => {
        cy.get('.btn').click()
        expect(true).to.equal(true)
    });
    
    it('13- Verifying the Toast message => Login Successful.', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Login Successful')
        cy.wait(2000)
    });
//////////////////////////////////////////////

it('profile upload.', () => {
    cy.get('[data-testid="opendialog"]').then(input => {
        const fileName = 'AS_logo1.png';
        const fileInput = input[0];
        const file = new File([(new Blob([new ArrayBuffer(10)], { type: 'image/jpeg' }))], fileName, { type: 'image/jpeg' });
        cy.wrap(fileInput).trigger('change', { target: { files: [file] } });
      });
});    

//////////////////////////////

    
it('Upload profile image.', () => {
    cy.wait(3000)

    cy.get('[data-testid="opendialog"]').click({force:true})
    const filepath11 = "a11.jpg"
    cy.get('[data-testid="opendialog"]').attachFile("AS_logo.png")
    // cy.wait(40000)

   
});
        



it('Enter Date of birth.', () => {
    // cy.wait(40000)
    cy.get(':nth-child(5) > .row > :nth-child(4) > .form-group > .form-controls > .react-datepicker-wrapper > .react-datepicker__input-container > .customdate').clear().type("01/06/2000")
});

it('Click on Save and continue.', () => {
    cy.get('#left-tabs-example-tabpane-1 > form > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force: true})
});


it('F-14 Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile Updated Successfully')
    cy.wait(2000)
});

it('Select country', () => {

    cy.get('[id="react-select-2-input"]').click({force: true}).type("United states").type('{enter}').wait(2000)
    expect(true).to.equal(true)
});




it('Select State.', () => {
    cy.get('[id="react-select-3-input"]')
    .click({force:true})
    .type("alaska").type('{enter}').wait(4000)
});

it('Select City', () => {
    cy.get('[id="react-select-4-input"]').click({force:true}).type("barrow").type('{enter}').wait(4000)
});

it('Enter Postal code.', () => {
    cy.get('[id="postalCodeMand"]').click({force:true}).type(Random_Textt())
});

it('Enter Distance.', () => {
    cy.get('[id="maxClientDistanceMand"]').click({force:true}).type("50")
});

it('Select Time Zone.', () => {
    cy.get(':nth-child(5) > :nth-child(2) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).type("us Eastern standard Time").type('{enter}').wait(2000)
});

it('', () => {
    cy.wait(10000)
});
// Provider_test()


it('Click on Save and Continue button.', () => {
    cy.get('#left-tabs-example-tabpane-2 > form > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click()
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

it('Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile Updated Successfully')
    cy.wait(2000)
});

it('Add area of experties.', () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(1) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(3) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(6) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(6) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
    cy.get(':nth-child(9) > .form-checkbox > .form-check-label').click({force:true}).wait(1000)
});

it('Click on save and continue.', () => {
    cy.get('.formstyle > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force:true})
    cy.wait(2000)
});


it('Verifying the Toast message.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile Updated Successfully')
    cy.wait(2000)
});

it('Enter Name of your resume.', () => {
    cy.get('[placeholder="Name your Resume / CV"]').click({force:true}).type(Random_Textt()).wait(2000)
});

it('Upload Profile pcture.', () => {
    cy.get(':nth-child(1) > .accordion-collapse > .accordion-body > .formstyle > .dropzone > .global-file-style').click({force:true})
    cy.get(':nth-child(1) > .accordion-collapse > .accordion-body > .formstyle > .dropzone > .global-file-style').attachFile("dummy.pdf")
     
});

it('Click on Skip for Now button.', () => {
    cy.get('#left-tabs-example-tabpane-5 > .form-footer-full > .container > .row > .col-md-8 > .btn-text').click({force:true})
    cy.wait(3000)
});

it('Select Incorporated Status.', () => {
    cy.get('.radio-wrapper > :nth-child(2) > div > label.form-label').click({force:true}).wait(2000)
});

it('Are you currently associated with below mentioned companies?', () => {
    
  cy.get('.form-group > :nth-child(2) > div > .form-label').click({force: true})
  cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force: true})

  cy.get('.form-group > :nth-child(1) > div > .form-label').click({force: true})
  cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force: true})
 
});

//////////////////////////////


it('Click on Save & contiunue button.', () => {
    cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-8 > .btn-primary').click({force:true}).wait(2000)
});


it('Verifying the Toast message.', () => {
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Profile Updated Successfully')
    cy.wait(2000)
});








}

export default Provider_SignIN;

