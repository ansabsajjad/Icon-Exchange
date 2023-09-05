
function Pay_Rate_Search(){

    it('PS-1 Click on Settings.', () => {
        cy.get('[data-testid="mainmenu-4"] > .float-end').click({force: true}).wait(4000)
        expect(true).to.equal(true)
        });

       
        it('Search by Provider Name.', () => {
            cy.get('.left-icon').click({force: true})
            cy.wait(2000)
            cy.get('[id="react-select-10-input"]').click({force:true}).wait(3000)
            cy.get('#react-select-10-option-0').click({force: true})/////===============Array Index 0
            cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
            cy.wait(5000)
        
           
        
        });
        
         it(' Clear Search filter.', () => {
            cy.get('.left-icon').click({force: true})
            cy.wait(2000)
            cy.get('[data-testid="clear"]').click({force: true})
            cy.wait(2000)
        
         });

        ////////////////////////

       
it('Search by Facility Name.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[id="react-select-11-input"]').click({force:true}).wait(3000)
    cy.get('#react-select-11-option-0').click({force: true})/////===============Array Index 0
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 ////////////////////////

       
it('Search by Area of expertise.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[id="react-select-12-input"]').click({force:true}).wait(3000)
    cy.get('#react-select-12-option-0').click({force: true})   /////===============Array Index 0
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 
////////////////////////

       
it('Search by Provider Working for.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('#workingFor > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon anesthesia").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 ////////////////////////

       
it('Search by Rate Start Date', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('#rateStartDate').type("03/30/2023").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

it(' Clear Search filter.', () => {
   cy.get('.left-icon').click({force: true})
   cy.wait(2000)
   cy.get('[data-testid="clear"]').click({force: true})
   cy.wait(2000)

});


 ////////////////////////

       
it('Search by Rate End Date', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[id="rateEndDate"]').type("04/5/2023").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 ////////////////////////

       
 it('Search by Effective Start Date', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[id="effectiveStartDate"]').type("03/17/2023").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 
 ////////////////////////

       
it('Search by Guaranteed Hours.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[field_id="guaranteedHours"]').type("1").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 
 
 ////////////////////////

       
it('Search by Billing Rate.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[field_id="billingRate"]').type("12").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 ////////////////////////

       
 it('Search by OT after Hours Daily.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[field_id="otAfterHoursDaily"]').type("1").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });

 
  ////////////////////////

       
  it('Search by OT after Hours Weekly.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[field_id="otAfterHoursWeekly"]').type("1").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click({force: true})
    
    cy.wait(5000)

   

});

 it(' Clear Search filter.', () => {
    cy.get('.left-icon').click({force: true})
    cy.wait(2000)
    cy.get('[data-testid="clear"]').click({force: true})
    cy.wait(2000)

 });


        

}

export default Pay_Rate_Search;