function Delete_Pay_Rate(){
    it('PD-1 Click on Settings.', () => {
        cy.get('[data-testid="mainmenu-4"] > .float-end').click({force: true}).wait(4000)
        expect(true).to.equal(true)
        });

        it('PD-2 Click on Pay rates. ', () => {
            cy.get('[data-testid="submenu-4"]').click({force: true})
            cy.wait(3000)
        });


        it('PD-3 Scroll Listing to the Right Side. ', () => {
            cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
        });


        it('PD-4 Click on 3 dots. ', () => {
            cy.get(':nth-child(1) > :nth-child(12) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force: true}).wait(2000)
        });


        it('PD-5 Click on View button.', () => {
            cy.contains("Delete").click({force: true})
            cy.wait(3000)
        });





}
export default Delete_Pay_Rate;