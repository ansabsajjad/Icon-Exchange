function Bulk_Area_of_expertise(){


    // Array of indices to loop through (1 to 25
    const indices = Array.from({ length: 25 }, (_, index) => index + 1);
          
    indices.forEach((index) => {
    
    it('Cycle ' + (index) + ' Click on 3 dot button.', () => {
       
  
            
              cy.wait(2000);
              cy.get(`:nth-child(${index}) > .stickycolumn > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots`)
                .click({ force: true })
                .wait(1000);
          

        cy.contains('Edit Info').click().wait(1000)
        
        cy.get('#left-tabs-example-tab-4 > .d-flex > .tabname').click().wait(2000)
        

        cy.get(':nth-child(1) > .form-checkbox > .form-check-label').click({force:true}).wait(2000)
        cy.get(':nth-child(9) > .form-checkbox > .form-check-label').click({force:true}).wait(2000)
        cy.get('.formstyle > .form-footer-full > .container > .row > .col-md-8 > [data-testid="savecontbtn"]').click({force:true}).wait(2000)
        cy.get('#left-tabs-example-tabpane-1 > form > .form-footer-full > .container > .row > .col-md-4 > .btn').click({force:true}).wait(1000)













    });


});












}

export default Bulk_Area_of_expertise;