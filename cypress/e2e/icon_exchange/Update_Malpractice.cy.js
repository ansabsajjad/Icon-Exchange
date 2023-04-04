
function Update_Malpractice(){ 
    
    it('UM-1 Click on Settings.', () => {
    cy.wait(4000)

    cy.get('[data-testid="mainmenu-4"] > .float-end').click({force: true})
    cy.wait(2000)
    expect(true).to.equal(true)
    });

    it('UM-2 Click on Malpractice.', () => {
        cy.get('[data-testid="submenu-1"]').click({force:true})
        cy.wait(3000)
    });

    it('UM- Click on Malpractice Insurance Provider dropdown.', () => {
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click({force:true}).wait(5000)
    });

    it('uM- Click on 3 dots.', () => {
        cy.get('.modal-table-scroll > .mt-4 > tbody > tr > :nth-child(5) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force:true}).wait(2000)
    });

    it('Click on Edit button.', () => {
    cy.contains('Edit').click({force: true}).wait(5000)
    });

    it('UM- Update States.', () => {
        cy.get('[id="react-select-19-input"]').click({force:true}).wait(2000)
        cy.get('#react-select-19-option-1').click({force: true})   /////===============Array Index 0
        cy.wait(2000)        
    });

    it('UM- Update Hourly Rate.', () => {
        cy.get('[name="hourlyRate"]').click({force:true}).type("40").wait("2000")
    });

    it('UM- Update Effective Start Rate.', () => {
        cy.get('[id="effectiveStartDate"]').type("04/02/2023").wait("2000")
    });

    it('UM- Update Effective End Date.', () => {
        cy.get('[id="effectiveEndDate"]').type("04/11/2023").wait("2000")
    });

    it('UM- Click on Update button.', () => {
        cy.get('[data-testid="handleGlobalMalpracticeUpdate"]').click({force:true}).wait(3000)
    });

    it('UM- Click on cross button.', () => {
        cy.get('.icon-Cross').click({force:true}).wait("3000")
    });

    it('UM-3 Scroll Listing to the Right Side. ', () => {
        cy.get('.tableresponsive').scrollTo('right',{ duration: 2000 }).wait(2000)
    });



it('UM-4 Click on 3 dots.', () => {
    cy.get(':nth-child(1) > :nth-child(5) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force: true}).wait(2000)
});

it('UM-5 Click on Edit button.', () => {
    cy.contains('Edit').click({force: true}).wait(2000)
});


it('UM-6 Update Malpractice Insurance Provider', () => {
    cy.get('[id="react-select-18-input"]').click({force: true}).wait(2000)
    cy.get('#react-select-18-option-0').click({force: true})/////===============Array Index 0
});


it('UM-7 Update Areas of Expertise.', () => {
    cy.get('[id="react-select-19-input"]').click({force: true}).wait(2000)
    cy.get('#react-select-19-option-0').click({force: true})/////===============Array Index 0
});


it('UM-8 Update Division.', () => {
    cy.get('[id="react-select-20-input"]').click({force: true}).wait(2000)
    cy.get('#react-select-20-option-1').click({force: true})/////===============Array Index 0
});


it('UM-9 Update Procedure Type.', () => {
    cy.get('[id="react-select-21-input"]').click({force: true}).wait(2000)
    cy.get('#react-select-21-option-1').click({force: true})/////===============Array Index 0
});


it('UM-10 Click on Update button.', () => {
    cy.get('[data-testid="handleGlobalMalpracticeUpdate"]').click({force: true})
});


}
export default Update_Malpractice;
