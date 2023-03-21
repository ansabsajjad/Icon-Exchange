
function Add_Malpractice(){

    it('AM- 1 Click on Settings.', () => {
    cy.get('[data-testid="mainmenu-4"] > .float-end').click()
    cy.wait(2000)
    expect(true).to.equal(true)
    });

    it('AM- 2 Click on Malpractice.', () => {
        cy.get('[data-testid="submenu-1"]').click()
    });


    it('AM-3 Click on Add Malpractice button. ', () => {
        cy.get('[data-testid="add-malpractice-rate"]').click().wait(2000)
    });


    it('AM-4 Click on Add Manually. ', () => {
        cy.get('[data-testid="manualimport"]').click().wait(4000)
    });


    it('AM-5 Select Malpractice Insurance Provider. ', () => {
        cy.get('#malpracticeInsuranceProvider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click({multiple: true}).type("sheridan").wait(2000).type('{enter}')
    });


    it('AM-6 Select Area of expertise. ', () => {
        cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().type("medical doctor").type('{enter}').wait(2000)
        cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().type("physician assistant").type('{enter}').wait(2000)

    });


    it('AM-7 Set division.', () => {
        cy.get('#division > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().type("anesthesiology").type('{enter}').wait(2000)
    });


    it('AM-8 Procedure Type.', () => {
        cy.get('#procedureType > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().type("major Surgery").type('{enter}').wait(2000)
    });


    it('AM-9 Select State.', () => {
        cy.get('#state > .custom-select__control > .custom-select__value-container > .custom-select__input-container').click().type("al").type('{enter}').wait(2000)
    });


    it('AM-10 Enter Hourly rate.', () => {
        cy.get('[data-testid="hourlyRate"]').type("20")
    });


    it('AM-11 Effective Start Date. ', () => {
        cy.get('#effectiveStartDate').type("04/01/2023")
    });


    it('AM-12 Effective End Date. ', () => {
        cy.get('#effectiveEndDate').type("04/05/2023")
    });


    it('AM- ', () => {
        
    });




}

export default Add_Malpractice;