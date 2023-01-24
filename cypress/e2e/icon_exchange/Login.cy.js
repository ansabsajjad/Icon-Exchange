/// <reference types="Cypress" /> 

import Icon_Exchange_URL from "../../fixtures/Icon Exchange Credentials/IE_URL.cy";
import Super_Admin_data from "../../fixtures/Icon Exchange Credentials/Login_Credentials.cy";

function Icon_Exchange_Login() {
   

  it("1- Visit to the URL.",function(){
    Icon_Exchange_URL()
    // cy.url().should('include', '/commands/actions')
  })
/////////////////////////////////////
  it('2- Enter Correct Email.', () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.Correct_Email, {delay: 100})
    expect(true).to.equal(true)
    
});

it('3- Enter Wrong password.', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.wrong_Password , {delay: 100})
    cy.get('.ico').click()
    expect(true).to.equal(true)
   
});

it('4- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Incorrect email or password.')
    
});

////////////////////////////////
it('5- Enter wrong Email.', () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.wrong_Email, {delay: 100})
    expect(true).to.equal(true)
   
});

it('6- Enter Correct Password.', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.Correct_Password , {delay: 100})
    expect(true).to.equal(true)

});

it('7- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    expect(true).to.equal(true)
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Incorrect email or password.')

});


it('8- Enter Correct Email.', () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Super_Admin_data.Correct_Email, {delay: 100})
    expect(true).to.equal(true)
   
});

it('9- Enter Correct Password.', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Super_Admin_data.Correct_Password , {delay: 100})
    expect(true).to.equal(true)

});

it('10- Click on Sign In Button.', () => {
    cy.get('.btn').click()
    expect(true).to.equal(true)
});

it('11- Verifying the Toast message => Login Successful.', () => {
    cy.wait(2000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Login Successful')
});

} 
export default Icon_Exchange_Login;
