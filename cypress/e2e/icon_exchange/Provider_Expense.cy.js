import Provider_data from "../../fixtures/Icon Exchange Credentials/Provider_Data.cy";

function Provider_Expense(){

    // it('EX-6 CLick on Complete Profile later button. ', () => {
    //     cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-4 > .btn').click({force:true})
    //     cy.wait(3000)
    // });


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
        cy.get('[name="expenses.0.expenseSpentStartDate"]').click({force:true}).type("04/19/2023 - 04/21/2023")
    });


    it('EX- Enter Description.', () => {
        cy.get('[name="expenses.0.description"]').type("This is description.")
    });
    it('Ex- Upload Attahment.', () => {
        cy.get('.btn-browse').click({force:true})
        const filepath11 = "a11.jpg"
        cy.get('.btn-browse').attachFile(filepath11,{subjectType: 'drag-n-drop'})
        cy.wait(5000)
    });





    it('EX- Click on Add more.', () => {
        cy.get('.addmore').click({force:true}).wait(3000)
    });


    it('EX-Slect Expense Type. ', () => {
        cy.get('[id="react-select-16-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-16-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
    });


    it('EX- Enter total amount. ', () => {
        cy.get('[data-testid="expenses.1.totalAmount"]').click({force:true}).type("56")
    });


    it('EX- Enter Expense Spent date. ', () => {
        cy.get('[name="expenses.1.expenseSpentStartDate"]').click({force:true}).type("05/22/2023 - 05/25/2023")
    });


    it('EX- Enter Description.', () => {
        cy.get('[name="expenses.1.description"]').type("This is description.")
    });
    it('Ex- Upload Attahment.', () => {
        cy.get(':nth-child(3) > .row > .col-md-12 > .form-group > .dropzone > .global-file-style > .d-flex > :nth-child(2) > .btn-browse').click({force:true})
        const filepath11 = "a11.jpg"
        cy.get(':nth-child(3) > .row > .col-md-12 > .form-group > .dropzone > .global-file-style > .d-flex > :nth-child(2) > .btn-browse').attachFile(filepath11,{subjectType: 'drag-n-drop'})
        cy.wait(5000)
    });

    it('EX- Click on Create button. ', () => {
        // cy.wait(30000)
         cy.get('[data-testid="createbtn"]').click({force:true})
    });
    
    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
    });



    it('EX- ', () => {
        
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