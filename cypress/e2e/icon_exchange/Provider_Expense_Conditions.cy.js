
function Provider_condition(){

   
  it('Click on Settings.', () => {
    cy.get('[data-testid="mainmenu-4"] > .float-end').click()
    cy.wait(2000)
    expect(true).to.equal(true)
    });

    it('Click on Expenses.', () => {
        cy.get('[data-testid="submenu-3"]').click().wait(2000)
    });


it('Scroll to right.', () => {
  cy.get('.scroll-table').scrollTo('right').wait(2000)
});

it('Check condition.', () => {
    
  cy.get(':nth-child(1) > :nth-child(6) > .text-capitalize').then(($td) => {
        const value = $td.text().trim();
        if (value === 'approved') {
          cy.wait(2000)
          // Provider_Click()
          ///////
          cy.get(':nth-child(1) > :nth-child(9) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click().wait(2000)
    
          cy.contains('View').click({force: true}).wait(3000)
        
      
              cy.scrollTo('bottom').wait(3000)
              cy.scrollTo('top').wait(3000)
      
        } else {
          cy.wait(3000)

          //Provider_Edit()
          ////////////
          cy.get(':nth-child(1) > :nth-child(9) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click().wait(2000)
   
          cy.contains('View').click({force: true}).wait(3000)
          cy.scrollTo('bottom').wait(3000)
          cy.scrollTo('top').wait(3000)
          cy.get('.d-md-flex > button.btn').click().wait(3000)
          cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Expense has been approved')
        }
      });
});






}
    export default Provider_condition;