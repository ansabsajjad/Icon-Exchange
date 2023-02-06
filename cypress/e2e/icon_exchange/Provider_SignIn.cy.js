import Provider_data from "../../fixtures/Icon Exchange Credentials/Provider_Data.cy";
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

it('xyzzz', () => {
    cy.get('#countryMand > .custom-select__control > .custom-select__value-container').click({force:true}).wait(1000).type("kjfdknfd")
    cy.wait(40000)
});

// it('Click on Skip Now button for now.', () => {
//     cy.get('#left-tabs-example-tabpane-1 > form > .form-footer-full > .container > .row > .col-md-8 > .btn-text').click()
// });

// it('Select Country.', () => {
//     cy.get(':nth-child(3) > .row > :nth-child(1) > .form-group > :nth-child(2) > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container')
//     .click({force:true}).type("united kingdo", {delay:150}).wait(4000)//.contains("United States").click()
//     cy.wait(3000)

// });

// it('Select State.', () => {
//     cy.get(':nth-child(3) > .row > :nth-child(2) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container')
//     .click({force:true})
//     .type("alaska").type('{enter}').wait(4000)
// });

// it('Select City.', () => {
//     cy.get(':nth-child(3) > .row > :nth-child(3) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).type("barrow").type('{enter}').wait(4000)
// });

// it('Enter Postal code.', () => {
//     cy.get(':nth-child(3) > .row > :nth-child(4) > .form-group > .form-controls > input').click({force:true}).type(Random_Textt())
// });

// it('Enter Distance.', () => {
//     cy.get(':nth-child(3) > .row > .col-md-12 > .form-group > .form-controls > input').type("50")
// });

// it('Select Time Zone.', () => {
//     cy.get(':nth-child(5) > :nth-child(2) > .form-group > .form-controls > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({force:true}).type("us Eastern standard Time").type('{enter}').wait(2000)
// });


Provider_test()

}

export default Provider_SignIN;

