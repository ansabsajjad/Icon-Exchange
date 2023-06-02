
function IC_Notification(){

it('Click on setting.', () => {
    cy.get('[data-testid="mainmenu-6"] > .float-end').click().wait(4000)
});

it('Click on Notification.', () => {
    cy.get('[data-testid="submenu-3"]').click().wait(3000)
});

it('Click on Send Notification.', () => {
    cy.get('[data-testid="send-notifications-modal-btn"]').click().wait(3000)
});



//  =============== Send Remider for BiWeekly. ===============



it('Select Notification Type as biweekly.', () => {
    cy.get('[id="react-select-10-input"]').click({force:true})
    cy.get('#react-select-10-option-0').click({force: true}).wait(2000)   /////===============Array Index 0

});



it('Select Select payperiod.', () => {
    cy.get('[id="react-select-11-input"]').click({force:true})
    cy.get('#react-select-11-option-0').click({force: true}).wait(5000)   /////===============Array Index 0

});



it('Select Select provider.', () => {
    cy.get('[id="react-select-12-input"]').click({force:true})
    cy.get('#react-select-12-option-1').click({force: true}).wait(2000)   /////===============Array Index 0

});

it('Click to close list.', () => {
    cy.get('#providers > .custom-select__control > .custom-select__indicators > .custom-select__dropdown-indicator > img').click()
});

it('Click on send button.', () => {
    cy.get('[data-testid="send-notifications-submit-btn"]').click().wait(5000)
});

//  =============== Send Remider for Daily. ===============

it('Select Notification Type as Daily.', () => {
    cy.get('[data-testid="send-notifications-modal-btn"]').click().wait(3000)

    cy.get('[id="react-select-13-input"]').click({force:true})
    cy.get('#react-select-13-option-1').click({force: true}).wait(2000)   /////===============Array Index 0

    cy.get('[id="react-select-14-input"]').click({force:true})
    cy.get('#react-select-14-option-0').click({force: true}).wait(5000)   /////===============Array Index 0

    cy.get('[id="react-select-15-input"]').click({force:true})
    cy.get('#react-select-15-option-1').click({force: true}).wait(2000)   /////===============Array Index 0

    cy.get('#providers > .custom-select__control > .custom-select__indicators > .custom-select__dropdown-indicator > img').click()
    cy.get('[data-testid="send-notifications-submit-btn"]').click().wait(5000)
});


it('View the Providers.', () => {
    cy.get(':nth-child(1) > :nth-child(4) > .cursor-pointer > .providers-separator').click().wait(4000)
});

it('Click on close button to close the pop-up.', () => {
    cy.get('.icon-Cross').click()
});

}



//================================================ Bonus & Incentive ================================================//
//================================================ Hours Completion Bonus ================================================//



function IC_Hours_Completion_Bonus() {

    it('Click on bonus & Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(4000)
    });


    
it('B-2 Click on add bonus and incentive button.', () => {
    cy.get('.px-5').click().wait(3000)
});

it('B- 3 Select Bonus type.', () => {
    cy.get('[id="react-select-6-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-6-option-0').click({force: true})   /////===============Array Index 0
    cy.wait(2000)
    
});


it('B- 3 Select Provider Name.', () => {
    cy.get('[id="react-select-7-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-7-option-0').click({force: true})   /////===============Array Index 0
    cy.wait(2000)
    
});

it('B- 3 Select Facility Name.', () => {
    cy.get('[id="react-select-8-input"]').click({force:true}).wait(2000)
    cy.get('#react-select-8-option-0').click({force: true})   /////===============Array Index 0 >> Refferal Bonus
    cy.wait(2000)
    
});



it('B- Enter Target Hours Completed At date.', () => {
    cy.get('#targetHoursCompletedAt').type("05/05/2023").wait(2000)
});


it('B- Enter Bonus Date. ', () => {
    cy.get('#bonusDate').type("07/01/2023").wait(2000)
});

it('B- Enter Bonus Amount.', () => {
    cy.get('[data-testid="bonusAmount"]').click().type("20")
});


it('B- Click on Save & Approve button. ', () => {
    cy.get('[data-testid="createrecord"]').click()
});

it('Verifying the Toast message', () => {
    cy.wait(1000);
    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus is Added Successfully')
 });



}


//================================================ Performance Bonus ================================================//

function IC_Performance_Bonus(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('.px-5').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('[id="react-select-6-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-6-option-1').click({force: true})   /////===============Array Index 1 >> Refferal Bonus
        cy.wait(2000)
        
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('[id="react-select-7-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-7-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    it('B- 3 Select Facility Name.', () => {
        cy.get('[id="react-select-8-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-8-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("06/30/2023").wait(2000)
    });
    
    
    it('B- Enter Bonus Amount.', () => {
        cy.get('[data-testid="bonusAmount"]').click().type("20")
    });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });

    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus is Added Successfully')
     });
    
    }



    
//================================================ Refferal Bonus ================================================//

function IC_Refferal_Bonus(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('.px-5').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('[id="react-select-6-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-6-option-2').click({force: true})   /////===============Array Index 2 >> Refferal Bonus
        cy.wait(2000)
        
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('[id="react-select-7-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-7-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    it('B- 3 Select Reffered Provider Name.', () => {
        cy.get('[id="react-select-8-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-8-option-1').click({force: true})   /////===============Array Index 1
        cy.wait(2000)
        
    });
    
    it('Enter 10 hours Worked on Date.', () => {
        cy.get('#tenHoursWorkedOnDate').click().type("05/10/2023")
    });
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("07/12/2023").wait(2000)
    });
    
   it('Enter Bonus Amount.', () => {
    cy.get('[data-testid="bonusAmount"]').type("30")
   });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });


    it('Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus is Added Successfully')
     });


}



 
//================================================ Incentive ================================================//

function IC_Incentive(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('.px-5').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('[id="react-select-6-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-6-option-3').click({force: true})   /////===============Array Index 3 >> incentive Bonus
        cy.wait(2000)
        
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('[id="react-select-7-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-7-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    it('B- 3 Select Facility Name.', () => {
        cy.get('[id="react-select-8-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-8-option-0').click({force: true})   /////===============Array Index 1
        cy.wait(2000)
        
    });
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("07/27/2023").wait(2000)
    });
    
   it('Enter Bonus Amount.', () => {
    cy.get('[data-testid="bonusAmount"]').type("30")
   });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });


    it(' Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus is Added Successfully')
     });

    
}


//================================================ Others_Bonus ================================================//

function IC_Others_Bonus(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    
    
    it('B-2 Click on add bonus and incentive button.', () => {
        cy.get('.px-5').click().wait(3000)
    });
    
    it('B- 3 Select Bonus type.', () => {
        cy.get('[id="react-select-6-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-6-option-4').click({force: true})   /////===============Array Index 4 >> Others_Bonus
        cy.wait(2000)
        
    });
    
    
    it('B- 3 Select Provider Name.', () => {
        cy.get('[id="react-select-7-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-7-option-0').click({force: true})   /////===============Array Index 0
        cy.wait(2000)
        
    });
    
    it('B- Enter Bonus Date. ', () => {
        cy.get('#bonusDate').type("08/05/2023").wait(2000)
    });
    
   it('Enter Bonus Amount.', () => {
    cy.get('[data-testid="bonusAmount"]').type("30")
   });
    
    
    it('B- Click on Save & Approve button. ', () => {
        cy.get('[data-testid="createrecord"]').click()
    });

    it(' Verifying the Toast message', () => {
        cy.wait(1000);
        cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus is Added Successfully')
     });


}
  


function IC_Bonus_Condition(){

    it('B-1 Click on bonus and Incentive.', () => {
        cy.get('[data-testid="mainmenu-4"]').click().wait(3000)
    });    


    it('Check condition.', () => {
    cy.get('.tableresponsive').scrollTo("right")
    
    cy.get(':nth-child(1) > :nth-child(6) > .text-capitalize').then(($td) => {
              const value = $td.text().trim();
              if (value === 'approved') {
                cy.wait(2000)
                //                          Click for View.()
               
               

                
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
    
    cy.get(':nth-child(1) > :nth-child(9) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)

    cy.contains('View').click({force: true}).wait(4000)

    cy.scrollTo('bottom',{ duration: 4000 }).wait(2000)

    cy.scrollTo('top',{ duration: 4000 }).wait(2000)


            
              } else {
                cy.wait(3000)
      
                //Click to Edit()
                
    cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)

    cy.get(':nth-child(1) > :nth-child(9) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)

    cy.contains('Edit').click({force: true}).wait(5000)

    cy.get('#bonusDate').clear().type("08/04/2023").wait(2000)
   
    cy.get('[data-testid="bonusAmount"]').clear().type("30")
   
    cy.get('[data-testid="saverecord"]').click()



    cy.get('.Toastify__toast-body > :nth-child(2)',{timeout: 10000}).should('be.visible').should('have.text','Bonus is Updated Successfully')


              }
            });
        });

    }












export {IC_Notification, IC_Hours_Completion_Bonus, IC_Performance_Bonus, IC_Refferal_Bonus, IC_Incentive, IC_Others_Bonus, IC_Bonus_Condition}