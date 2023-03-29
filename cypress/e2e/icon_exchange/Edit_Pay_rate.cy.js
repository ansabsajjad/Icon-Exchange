function Edit_Pay_Rate(){

    it('PV-1 Click on Settings.', () => {
        cy.get('[data-testid="mainmenu-4"] > .float-end').click({force: true}).wait(4000)
        expect(true).to.equal(true)
        });

        it('PV-2 Click on Pay rates. ', () => {
            cy.get('[data-testid="submenu-4"]').click({force: true})
            cy.wait(3000)
        });


        it('PV-3 Scroll Listing to the Right Side. ', () => {
            cy.get('.scroll-table').scrollTo('right',{ duration: 2000 }).wait(2000)
        });


        it('PV-4 Click on 3 dots. ', () => {
            cy.get(':nth-child(1) > :nth-child(12) > .table-dropdown > #dropdown-basic > .icon-Vertical-Dots').click({force: true}).wait(2000)
        });


        it('PV-5 Click on Edit button.', () => {
            cy.contains("Edit").click({force: true})
            cy.wait(3000)
        });



it('PV-8 Enter Guaranteed Hours.', () => {
    cy.get('[data-testid="guaranteed_hours"]').clear().type("5").wait(2000)
});

it('PV-9 Enter Billing Rate.', () => {
    cy.get('[data-testid="billing_rate"]').clear().type("1")
});

it('PV-10 Enter OT after hours Daily.', () => {
    cy.get('[data-testid="ot_hour_daily"]').clear().type("31").wait(2000)
});

it('PV-11 Enter OT After hours Weekly.', () => {
    cy.get('[data-testid="ot_hour_weekly"]').clear().type("13").wait(2000)
});

// =============================== Regular Days Rate =============================== \\

it('PV- 12 Enter Hourly.', () => {
    cy.get('[data-testid="hourly"]').clear().type("10").wait(2000)
});

it('PV-13 Enter OT/Premium.', () => {
    cy.get('[data-testid="ot_premium"]').clear().type("20").wait(2000)
});

it('PV-14 Enter Evening On-Call Pager.', () => {
    cy.get('[data-testid="eve_oncall_pager"]').clear().type("22").wait(2000)
});

it('PV-15 Enter 24 HR Page Call.', () => {
    cy.get('[data-testid="hr_pager_call"]').clear().type("20").wait(2000)
});
                                                        

it('PV-16 Enter In House Call.', () => {
    cy.get('[data-testid="in_housecall"]').clear().type("30").wait(2000)
});
                                                        

it('PV-17 Enter Service On Call.', () => {
    cy.get('[data-testid="service_oncall"]').clear().type("13").wait(2000)
});
                                                        

it('PV-18 Enter Evening Pager Call.', () => {
    cy.get('[data-testid="eve_pager_call"]').clear().type("16").wait(2000)
});
                                                        
// =============================== Holidays Rate =============================== \\

it('PV-19 Enter Hourly Rate.', () => {
    cy.get('[data-testid="h_hourly"]').clear().type("17").wait(2000)
});
                                                        

it('PV-20 Enter OT/Premium.', () => {
    cy.get('[data-testid="h_ot_premium"]').clear().type("41").wait(2000)
});
                                                        

it('PV-21 Enter Evening On Call Pager rate.', () => {
    cy.get('[data-testid="h_eve_oncall_pager"]').clear().type("41").wait(2000)
});
                                                        

it('PV-22 Enter 24 HR Pager Call.', () => {
    cy.get('[data-testid="h_hr_pager_call"]').clear().type("20").wait(2000)
});
                                                        

it('PV-23 Enter In House Call.', () => {
    cy.get('[data-testid="h_in_housecall"]').clear().type("23").wait(2000)
});
                                                        

it('PV-24 Enter Service on Call.', () => {
    cy.get('[data-testid="h_service_oncall"]').clear().type("10").wait(2000)
});
                                                        

it('PV-25 Enter Evening Pager Call.', () => {
    cy.get('[data-testid="h_eve_pager_call"]').clear().type("12").wait(2000)
});
                                                        

it('PV-26 Click on Create button.', () => {
    cy.get('[type="submit"]').click({force:true})
});
                                                        

}
export default Edit_Pay_Rate;
