
function Activate_BF(){
   
    
    it("Click on Brokerage Firm", function () {
        cy.get(':nth-child(2) > .false').click().wait(2000)
        expect(true).to.be.true
    })

    it("Scroll to the right side.", function () {
        cy.get('.table-style').scrollTo('right')
        cy.wait(2000)
        expect(true).to.be.true
    })

    it("Click on first Brokerage Firm 3 dots.", function () {
        cy.get(':nth-child(1) > :nth-child(9) > .dropdown > #dropdown-basic > .view-btn > img').click({force: true}).wait(2000)
        expect(true).to.be.true
    })


    it("Click on Activate button.", function () {
    cy.get('[class="dropdown-style dropdown-menu show dropdown-menu-end"]').find('a').contains("Activate").click()
    })



}
export default Activate_BF;