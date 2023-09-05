function Provider_Expense_Search(){

    it('Click Expenses. ', () => {
        cy.get('.ml-4').click({force:true})
    });

   ///////////////////////////////////////////////////////////

    it('Search by Facility Name.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[id="react-select-12-input"]').click({force:true}).wait(3000)
        cy.get('#react-select-12-option-0').click({force: true})/////===============Array Index 0
        cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////


    it('Search by Expense Type.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[id="react-select-13-input"]').click({force:true}).wait(3000)
        cy.get('#react-select-13-option-0').click({force: true})/////===============Array Index 0
        cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////

    
    it('Search by Total Amount.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="totalAmount"]').click({force:true}).wait(2000).type("50").wait(2000)
        cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////

    it('Search by Expense Spent Date.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[id="expenseSpentStartDate"]').click({force:true}).wait(2000).type("05/19/2023").wait(2000)
        cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////

    
    it('Search by Aprroval Status.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[id="react-select-14-input"]').click({force:true}).wait(3000)
        cy.get('#react-select-14-option-0').click({force: true})/////===============Array Index 0
        cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
        cy.wait(5000)
    
       
    
    });
    
    
     it(' Clear Search filter.', () => {
        cy.get('.left-icon').click({force: true})
        cy.wait(2000)
        cy.get('[data-testid="clear"]').click({force: true})
        cy.wait(2000)
    
     });

    ////////////////////////




}

export default Provider_Expense_Search;