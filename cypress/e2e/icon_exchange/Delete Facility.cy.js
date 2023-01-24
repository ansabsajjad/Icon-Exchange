function delete_facility() {

    it('D1- Click on the Facility.', () => {
        cy.get(':nth-child(3) > .relative > .cursor-pointer > :nth-child(2)').click()
        expect(true).to.equal(true)
    });
    
    it('D2- Click on 3 dots.', () => {
        cy.get(':nth-child(1) > :nth-child(7) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').wait(1000).click()
        expect(true).to.equal(true)
    
    });
    
    it('D3- Click on View button', () => {
        cy.contains('Delete').wait(1000).click();
        expect(true).to.equal(true)
    
    });
    
it('D4- Verifying the Toast message', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Facility is deleted successfully')
    
});


    }
    
    export default delete_facility;