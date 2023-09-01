
function Malpractice_Search(){

    it('SM- 1 Click on Settings.', () => {
    cy.get('[data-testid="mainmenu-4"] > .float-end').click()
    cy.wait(2000)
    expect(true).to.equal(true)
    });

    it('SM- 2 Click on Malpractice.', () => {
        cy.get('[data-testid="submenu-1"]').click({force:true})
        cy.wait(3000)
    });

    it('Search by Malpractice Insurance Provider..', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('#react-select-14-placeholder').click({force:true}).wait(2000)
        cy.get('#react-select-14-option-0').click()

         cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
        cy.wait(3000)
    
    });



    
    it('Search by Area of Expertise.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[id="areaOfExpertise"]').click({force:true}).wait(2000)
        cy.get('[id="areaOfExpertise"]').click().type("medical doctor").type('{enter}').wait(2000)
        // cy.get('#react-select-15-option-1').click({force:true})

         cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
        cy.wait(2000)
    
    });

    
    it('Search by Division.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[id="division"]').click().type("anesthesiology").type('{enter}').wait(2000)
        // cy.get('#react-select-16-option-0').click()

         cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
        cy.wait(2000)
    
    });
    
    
    it('Search by Procedure Type', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get('[id="procedureType"]').click({force:true}).type("major Surgery").type('{enter}').wait(2000)
        // cy.get('#react-select-17-option-0').click()

         cy.get('[data-testid="search"]').click({force:true})
        cy.wait(5000)
    
    
    });
    
    
    it('Clear Filter.', () => {
        cy.get('.left-icon').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
        cy.wait(2000)
    
    });


}

export default Malpractice_Search;