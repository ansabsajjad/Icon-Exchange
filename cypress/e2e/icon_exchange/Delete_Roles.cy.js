function Delete_Roles() {

    it('DR-1 Click on Roles.', () => {
        cy.get(':nth-child(5) > li > .cursor-pointer').click({force:true})
        cy.wait(2000)
    expect(true).to.equal(true)
    });
    
    it('DR-2 Click on 3 dots.', () => {
        cy.get(':nth-child(1) > :nth-child(5) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true})
        expect(true).to.equal(true)
    });
    
    it('DR-3 Click on Delete button', () => {
        cy.contains('Delete').wait(1000).click();
        cy.wait(2000)
        expect(true).to.equal(true)
    });
}

export default Delete_Roles;