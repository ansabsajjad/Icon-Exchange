import Provider_data from "../../fixtures/Icon Exchange Credentials/Provider_Data.cy";

function Provider_Expense(){

    
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

    it('EX-6 CLick on Complete Profile later button. ', () => {
        cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-4 > .btn').click({force:true})
        cy.wait(3000)
    });


    it('EX-7 Click Expenses. ', () => {
        cy.get('.ml-4').click({force:true})
    });


    it('EX-Click on Add Expense. ', () => {
        cy.get('.px-5').click({force:true})
        cy.wait(5000)
    });


    it('EX- Select Facility  Name.', () => {
        cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-14-option-0').click({force: true})   /////===============Array Index 0
    cy.wait(2000)

    });


    it('EX- Select Expense Type.', () => {
        cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-15-option-0').click({force: true})   /////===============Array Index 0
    cy.wait(2000)

    });


    it('EX- Enter Total Amount.', () => {
        cy.get('[data-testid="expenses.0.totalAmount"]').type("20")
    });


    it('EX- Enter Expense Start Date. ', () => {
        cy.get('[name="expenses.0.expenseSpentStartDate"]').click({force:true}).type("04/12/2023 - 04/27/2023")
    });


    it('EX- Enter Description.', () => {
        cy.get('[name="expenses.0.description"]').type("This is description.")
    });
    it('', () => {
        cy.get('.global-file-style').click({force:true})
        const filepath11 = "a11.jpg"
        cy.get('.global-file-style').attachFile("AS_logo.png")
        cy.wait(4000)
    });

    it.skip('EX- Upload image.', () => {
        cy.wait(3000)
    
       
    
        cy.get('.btn-browse').then(subject => {
            // Your file path goes here
            const filePath = 'a11.jpg' // Updated file path
            cy.fixture(filePath, 'binary')
              .then(Cypress.Blob.binaryStringToBlob)
              .then(blob => {
                const el = subject[0]
                const testFile = new File([blob], filePath, { type: 'image/jpeg' }) // Updated file type to "image/jpeg"
                const dataTransfer = new DataTransfer()
          
                dataTransfer.items.add(testFile)
                el.files = dataTransfer.files
          
                cy.wrap(subject).trigger('change', { force: true })
              })
          })
       
    });

    it('EX- ', () => {
        cy.get('.global-file-style').then(subject => {
            const filePath = "a11.jpg" // Update file path here
            cy.fixture(filePath, 'binary')
              .then(Cypress.Blob.binaryStringToBlob)
              .then(blob => {
                const el = subject[0]
                const testFile = new File([blob], filePath, { type: 'image/jpeg' }) // Change the file type here if needed
          
                const dataTransfer = new DataTransfer()
                dataTransfer.items.add(testFile)
                el.files = dataTransfer.files
          
                cy.wrap(subject).trigger('change', { force: true })
              })
          })
    });


    it('EX- Click on Create button. ', () => {
        cy.wait(30000)
        cy.get('[type="submit"]').click({force:true})
    });


    it('EX- ', () => {
        
    });


    it('EX- ', () => {
        
    });


    it('EX- ', () => {
        
    });


    it('EX- ', () => {
        
    });




}
export default Provider_Expense;