import Random_Textt from "./Random_Text";

function Bulk_add_provider(){


        



// Array of indices to loop through
const startIndex = 68;
const endIndex = 310;
const emailPattern = 'ansab+';
const emailDomain = '@troontechnologies.com';

for (let index = startIndex; index <= endIndex; index++) {
  const emailAddress = `${emailPattern}${index}${emailDomain}`;

    
  it('TC - ' + (index) + ' add Provider', () => {
    cy.wait(2000);

    //====> click on ADD provider


    
    cy.get('[data-testid="add-provider-btn"]').click().wait(2000)

        //====> firt name last name

    cy.get(':nth-child(1) > .form-group > .form-controls > input').type(Random_Textt()).wait(1000)
    cy.get(':nth-child(3) > .form-group > .form-controls > input').type(Random_Textt()).wait(1000)

    
    
      cy.get(':nth-child(4) > .form-group > .form-controls > input').click().clear()
        .type(emailAddress)
        .wait(1000);

      // Continue with other actions...


///===========password

    cy.get(':nth-child(5) > .form-group > .form-controls > input').click().clear().type("Admin@2022")

    cy.get(':nth-child(6) > .form-group > .form-controls > input').click().clear().type("Admin@2022").type('{enter}').wait(3000)
    // cy.get(':nth-child(2) > .form-group > .form-controls > input').type(Random_Textt()).wait(1000)

    // cy.get('[data-testid="nextbtn"]').click().wait(5000)
    cy.get('.btn').click()
    
  });
}






















}
export default Bulk_add_provider;
