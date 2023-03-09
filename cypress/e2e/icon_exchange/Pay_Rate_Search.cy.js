
function Pay_Rate_Search(){

    it('PS-1 Click on Settings.', () => {
        cy.get('[data-testid="mainmenu-4"] > .float-end').click().wait(4000)
        expect(true).to.equal(true)
        });

       
        it('Search by Provider Name.', () => {
            cy.get('.left-icon').click()
            cy.wait(2000)
            cy.get('#provider > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("ANSAB").wait(1000)
            cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
            
            cy.wait(5000)
        
           
        
        });
        
         it(' Clear Search filter.', () => {
            cy.get('.left-icon').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
            cy.wait(2000)
        
         });

        ////////////////////////

       
it('Search by Facility Name.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#facility > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Ummas Memorial Medical Centre").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 ////////////////////////

       
it('Search by Area of expertise.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#areaOfExpertise > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Medical Doctor").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 
////////////////////////

       
it('Search by Provider Working for.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#workingFor > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon anesthesia").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 ////////////////////////

       
it('Search by Rate Start Date', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#rateStartDate').type("03/30/2023").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 ////////////////////////

       
it('Search by Rate End Date', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#rateEndDate').type("04/5/2023").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 ////////////////////////

       
 it('Search by Effective Start Date', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('#EffectiveStartDate').type("03/17/2023").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 
 ////////////////////////

       
it('Search by Guaranteed Hours.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="guaranteedHours"]').type("1").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 
 
 ////////////////////////

       
it('Search by Billing Rate.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="billingRate"]').type("12").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 ////////////////////////

       
 it('Search by OT after Hours Daily.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="otAfterHoursDaily"]').type("1").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });

 
  ////////////////////////

       
  it('Search by OT after Hours Weekly.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get('[data-testid="otAfterHoursWeekly"]').type("1").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)

 });


        

}

export default Pay_Rate_Search;