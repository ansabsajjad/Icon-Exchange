
function Add_Pay_Rates(){

    it('AP -1 Click on Settings.', () => {
    cy.get('[data-testid="mainmenu-4"] > .float-end').click()
    expect(true).to.equal(true)
    });

    it('AP -2 Click on Add Pay Rates button.', () => {
    cy.contains('Add Pay Rates').click().wait(2000)
    expect(true).to.equal(true)
    });

    it('AP -3 Select By Manual Option.', () => {
        cy.get('[data-testid="manualimport"]').click()
        cy.wait(3000)
        expect(true).to.equal(true)
    });

    it('AP -4 Select Provider Name.', () => {
        cy.get('.custom-select__input-container').type("ANSAB abc WBlvF").type('{enter}').wait(2000)
        expect(true).to.equal(true)
    });


    it('AP -5 Select Facility.', () => {
        cy.get('tbody > tr > :nth-child(1)').click().wait(2000)
    });

    it('AP -6 Enter Rate Start Date.', () => {
        cy.get('#rate_start_date').click().type("03/30/2023").type('{enter}').wait(2000)
    });

    it('AP -7 Enter Rate End Date.', () => {
        cy.get('#rate_end_date').click().type("04/5/2023").type('{enter}').wait(2000)
    });

    it('AP -8 Enter Guaranteed Hours.', () => {
        cy.get('[data-testid="guaranteed_hours"]').type("15").wait(2000)
    });

    it('AP -9 Enter Billing Rate.', () => {
        cy.get('[data-testid="billing_rate"]').type("15")
    });

    it('AP -10 Enter OT after hours Daily.', () => {
        cy.get('[data-testid="ot_hour_daily"]').type("3").wait(2000)
    });

    it('AP -11 Enter OT After hours Weekly.', () => {
        cy.get('[data-testid="ot_hour_weekly"]').type("10").wait(2000)
    });

    // =============================== Regular Days Rate =============================== \\
    
    it('AP - 12 Enter Hourly.', () => {
        cy.get('[data-testid="hourly"]').type("20").wait(2000)
    });

    it('AP -13 Enter OT/Premium.', () => {
        cy.get('[data-testid="ot_premium"]').type("40").wait(2000)
    });

    it('AP -14 Enter Evening On-Call Pager.', () => {
        cy.get('[data-testid="eve_oncall_pager"]').type("25").wait(2000)
    });

    it('AP -15 Enter 24 HR Page Call.', () => {
        cy.get('[data-testid="hr_pager_call"]').type("30").wait(2000)
    });
                                                            

    it('AP -16 Enter In House Call.', () => {
        cy.get('[data-testid="in_housecall"]').type("10").wait(2000)
    });
                                                            

    it('AP -17 Enter Service On Call.', () => {
        cy.get('[data-testid="service_oncall"]').type("3").wait(2000)
    });
                                                            

    it('AP -18 Enter Evening Pager Call.', () => {
        cy.get('[data-testid="eve_pager_call"]').type("12").wait(2000)
    });
                                                            
    // =============================== Holidays Rate =============================== \\

    it('AP -19 Enter Hourly Rate.', () => {
        cy.get('[data-testid="h_hourly"]').type("10").wait(2000)
    });
                                                            

    it('AP -20 Enter OT/Premium.', () => {
        cy.get('[data-testid="h_ot_premium"]').type("20").wait(2000)
    });
                                                            

    it('AP -21 Enter Evening On Call Pager rate.', () => {
        cy.get('[data-testid="h_eve_oncall_pager"]').type("13").wait(2000)
    });
                                                            

    it('AP -22 Enter 24 HR Pager Call.', () => {
        cy.get('[data-testid="h_hr_pager_call"]').type("31").wait(2000)
    });
                                                            

    it('AP -23 Enter In House Call.', () => {
        cy.get('[data-testid="h_in_housecall"]').type("13").wait(2000)
    });
                                                            

    it('AP -24 Enter Service on Call.', () => {
        cy.get('[data-testid="h_service_oncall"]').type("23").wait(2000)
    });
                                                            

    it('AP -25 Enter Evening Pager Call.', () => {
        cy.get('[data-testid="h_eve_pager_call"]').type("20").wait(2000)
    });
                                                            

    it('AP -26 Click on Create button.', () => {
        cy.get('[type="submit"]').click({force:true})
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
