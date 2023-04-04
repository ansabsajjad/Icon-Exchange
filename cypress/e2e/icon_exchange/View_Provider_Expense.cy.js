

function View_Provider_Expense(){

    it('Click Expenses. ', () => {
        cy.get('.ml-4').click({force:true})
    });


it('Scroll to right side.', () => {
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
});


it('Click on 3 dots.', () => {
    cy.get(':nth-child(1) > :nth-child(6) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)
});

it(' Click on View button.', () => {
    cy.contains('View').click({force: true}).wait(4000)
});


it('Scroll Down.', () => {
    cy.scrollTo('bottom',{ duration: 4000 }).wait(2000)
});

it('Scroll Top.', () => {
    cy.scrollTo('top',{ duration: 4000 }).wait(2000)
});

it('', () => {
    
});

it('', () => {
    
});

it('', () => {
    
});

it('', () => {
    
});




}

export default View_Provider_Expense;