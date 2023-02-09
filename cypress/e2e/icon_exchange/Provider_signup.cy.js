import Provider_data from "../../fixtures/Icon Exchange Credentials/Provider_Data.cy";
import Random_Textt from "./Random_Text";

function Provider_Signup() {

it('1- Click on Register Now.', () => {
    cy.get('.fs-12 > .anchor').click({force: true})
});

it('2- Enter First Name.', () => {
    cy.wait(2000)
    cy.get(':nth-child(1) > .form-group > .form-controls > input').type("ANSAB " + Random_Textt(), {delay:150})
});

it('3- Enter Middle Name.', () => {
    cy.get(':nth-child(2) > .form-group > .form-controls > input').type("xyz " + Random_Textt(), {delay:150})
});

it('4- Enter Last Name.', () => {
    cy.get(':nth-child(3) > .form-group > .form-controls > input').type("abc " + Random_Textt(), {delay:150})
});

it('Enter Email.', () => {
    cy.get(':nth-child(4) > .form-group > .form-controls > input').type(Provider_data.Provider_Email)
});
it('5- Enter Password.', () => {
    cy.get(':nth-child(5) > .form-group > .form-controls > input').type(Provider_data.Provider_Password)
});

it('6- Enter Confirm Password.', () => {
    cy.get(':nth-child(6) > .form-group > .form-controls > input').type(Provider_data.Provider_Password)
});

it('7- Agree with terms and condition.', () => {
    cy.get('.form-checkbox > label').click({force: true})
});
 it('8- Click on Next Button.', () => {
    cy.get('.btn').click({force: true})
    cy.wait(60000)
 });
it('9- Go to Login page.', () => {
    cy.visit("https://admin-dev-iconxchng.troonlab.io/login")
});


}
export default Provider_Signup;