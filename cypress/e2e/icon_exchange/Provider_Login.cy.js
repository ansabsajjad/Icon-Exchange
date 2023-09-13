import Provider_data from "../../fixtures/Icon Exchange Credentials/Provider_Data.cy";

function Provider_Login(){


    it('2- Logo should be present.', () => {
        cy.get('.logo').should('be.visible')
          
      });
      
      it('3- Main image should be present.', () => {
        cy.wait(1000)
        cy.get('.login-bg').should('be.visible')
      });

    
    it('4- Enter Provider Email.', () => {
        cy.wait(2000);
        cy.get(':nth-child(1) > .form-group > .form-controls > input').clear().type(Provider_data.Provider_Email, {delay: 100})

        expect(true).to.equal(true)
       
    });
    
    it('11- Enter Provider Password.', () => {
        cy.get(':nth-child(2) > :nth-child(1) > .form-controls > input').clear().type(Provider_data.Provider_Password, {delay: 100})
        expect(true).to.equal(true)
    
    });
    
    it('12- Click on Sign In Button.', () => {
        cy.get('.btn').click({force:true})
        expect(true).to.equal(true)
    });
    
    it('5- Verifying the Toast message => Login Successful.', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Login Successful')
        cy.wait(2000)
    });

    it(' CLick on Complete Profile later button. ', () => {
        cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-4 > .btn').click({force:true})
        cy.wait(3000)
    });


}
export default Provider_Login;