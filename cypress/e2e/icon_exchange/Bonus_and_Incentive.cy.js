//================================================ Hours Completion Bonus ================================================//

function Hours_Completion_Bonus(){

it('B-1 Click on bonus and Incentive.', () => {
    cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
});    

it('B-2 Click on add bonus and incentive button.', () => {
    cy.get('.px-5').click().wait(3000)
});

it('B- 3 Select Bonus type.', () => {
    cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-14-option-0').click({force: true})   /////===============Array Index 0
    cy.wait(2000)
    
});


it('B- 3 Select Provider Name.', () => {
    cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-15-option-0').click({force: true})   /////===============Array Index 0
    cy.wait(2000)
    
});

it('B- 3 Select Facility Name.', () => {
    cy.get('[id="react-select-16-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-16-option-0').click({force: true})   /////===============Array Index 0 >> Refferal Bonus
    cy.wait(2000)
    
});



it('B- Enter Target Hours Completed At date.', () => {
    cy.get('#targetHoursCompletedAt').type("05/05/2023").wait(2000)
});


it('B- Enter Bonus Date. ', () => {
    cy.get('#bonusDate').type("05/31/2023").wait(2000)
});


it('B- Enter Bonus Amount.', () => {
    cy.get('[data-testid="bonusAmount"]').click().type("20")
});


it('B- ', () => {
    // cy.get('[data-testid="createrecord"]').click()
});

}

//================================================ Performance Bonus ================================================//

function Performance_Bonus(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('.px-5').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-14-option-1').click({force: true})   /////===============Array Index 1 >> Refferal Bonus
        cy.wait(2000)
        
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-15-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    it('B- 3 Select Facility Name.', () => {
        cy.get('[id="react-select-16-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-16-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("05/31/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Amount.', () => {
        cy.get('[data-testid="bonusAmount"]').click().type("20")
    });
    
    
    it('B- ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });
}


    
//================================================ Refferal Bonus ================================================//

function Refferal_Bonus(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('.px-5').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-14-option-2').click({force: true})   /////===============Array Index 2 >> Refferal Bonus
        cy.wait(2000)
        
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-15-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    it('B- 3 Select Reffered Provider Name.', () => {
        cy.get('[id="react-select-16-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-16-option-1').click({force: true})   /////===============Array Index 1
        cy.wait(2000)
        
    });
    
    it('Enter 10 hours Worked on Date.', () => {
        cy.get('#tenHoursWorkedOnDate').click().type("05/06/2023")
    });
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("05/31/2023").wait(2000)
    });
    
   it('Enter Bonus Amount.', () => {
    cy.get('[data-testid="bonusAmount"]').type("30")
   });
    
    
    it('B- ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });




}

   
//================================================ Incentive ================================================//

function Incentive(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('.px-5').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-14-option-3').click({force: true})   /////===============Array Index 3 >> incentive Bonus
        cy.wait(2000)
        
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-15-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    it('B- 3 Select Facility Name.', () => {
        cy.get('[id="react-select-16-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-16-option-0').click({force: true})   /////===============Array Index 1
        cy.wait(2000)
        
    });
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("05/31/2023").wait(2000)
    });
    
   it('Enter Bonus Amount.', () => {
    cy.get('[data-testid="bonusAmount"]').type("30")
   });
    
    
    it('B- ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });




}

  
//================================================ Others_Bonus ================================================//

function Others_Bonus(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('.px-5').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('[id="react-select-14-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-14-option-4').click({force: true})   /////===============Array Index 4 >> Others_Bonus
        cy.wait(2000)
        
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('[id="react-select-15-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-15-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("05/31/2023").wait(2000)
    });
    
   it('Enter Bonus Amount.', () => {
    cy.get('[data-testid="bonusAmount"]').type("30")
   });
    
    
    it('B- ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });




}

export default {Hours_Completion_Bonus, Performance_Bonus, Refferal_Bonus, Incentive, Others_Bonus};