
function Edit_Provider_Expense(){

    
it(' Click on Complete Profile later button. ', () => {
    cy.get('#left-tabs-example-tabpane-6 > :nth-child(1) > form > .form-footer-full > .container > .row > .col-md-4 > .btn').click({force:true})
    cy.wait(3000)
});

it('Scroll to right side.', () => {
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
});


it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > :nth-child(6) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)
});

it(' Click on Edit button.', () => {
    cy.contains('Edit').click({force: true}).wait(4000)
});


it('EX- Select Facility  Name.', () => {
    cy.get('[id="react-select-18-input"]').click({force:true}).wait(2000)
cy.get('#react-select-14-option-1').click({force: true})   /////===============Array Index 0
cy.wait(2000)

});


it('EX- Select Expense Type.', () => {
    cy.get('[id="react-select-19-input"]').click({force:true}).wait(2000)
cy.get('#react-select-15-option-1').click({force: true})   /////===============Array Index 0
cy.wait(2000)

});


it('EX- Enter Total Amount.', () => {
    cy.get('[data-testid="expenses.0.totalAmount"]').type("40")
});


it('EX- Enter Expense Start Date. ', () => {
    cy.get('[name="expenses.0.expenseSpentStartDate"]').click({force:true}).type("05/19/2023 - 05/21/2023")
});


it('EX- Enter Description.', () => {
    cy.get('[name="expenses.0.description"]').type("This is description.")
});


it('Click on Update button.', () => {
    cy.get('[type="submit"]').click({force:true})
});


}

export default Edit_Provider_Expense;