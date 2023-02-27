
function Add_Pay_Rates(){

    it('AP -1 Click on Settings.', () => {
        cy.get('[data-testid="mainmenu-324234"]').click()
    expect(true).to.equal(true)
    });

    it('AP -2 Click on Add Pay Rates button.', () => {
    cy.contains('Add Pay Rates').click().wait(2000)
    expect(true).to.equal(true)
    });

    it('AP -3 Select By Manual Option.', () => {
        cy.get('[href="/create-payrates"]').click()
        cy.wait(3000)
        expect(true).to.equal(true)
    });

    it('AP -4 Select Provider Name.', () => {
        cy.get('.custom-select__input-container').type("Ansab").type('{enter}').wait(2000)
        expect(true).to.equal(true)
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });

    it('AP -', () => {
    
    });
                                                            




}

export default Add_Pay_Rates;
