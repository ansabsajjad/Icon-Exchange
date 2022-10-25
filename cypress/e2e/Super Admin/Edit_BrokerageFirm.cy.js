import BrokerageFirm_data from "../../fixtures/Fortra Data/BrokerageFirm_Data.cy"
import Random_Text from "../../fixtures/Fortra Data/Random_Text_Generator"

function Edit_Brokerage_Firm() {

    it("Click on Brokerage Firm", function () {
        cy.get(':nth-child(2) > .false').click().wait(2000)
        expect(true).to.be.true
    })

    it("Scroll to the right side.", function () {
        cy.get('.table-style').scrollTo('right')
        cy.wait(2000)
        expect(true).to.be.true
    })

    it("Click on first Brokerage Firm 3 dots.", function () {
        cy.get(':nth-child(1) > :nth-child(9) > .dropdown > #dropdown-basic > .view-btn > img').click({force: true}).wait(2000)
        expect(true).to.be.true
    })

    it.skip("Click on Edit button.", function () {
        cy.get('.dropdown-style > [href="/admin/addfirm"]').click().wait(2000)
        expect(true).to.be.true
    })

    it("Click on Edit button.", function () {
    cy.get('[class="dropdown-style dropdown-menu show dropdown-menu-end"]').find('a').contains("Edit").click()
    })

/////////////////////////////////////////

it("Rename Broker Firm name.", function () {
    cy.get('.col-md-12 > .mb-4').clear().type(BrokerageFirm_data.Broker_Firm_Name + " " + Random_Text(), {delay:150})
})

it("Rename Firm Owner name.", function () {
    cy.get(':nth-child(2) > .mb-4').clear().type(BrokerageFirm_data.BF_Owner_Name + " " + Random_Text() , {delay:150})
    expect(true).to.be.true
})


it("Rename Mobile Number.", function () {
    cy.get('.react-tel-input > .form-control').clear().type(BrokerageFirm_data.BF_Mobile_Number, {delay:150})
    expect(true).to.be.true
})

it("Rename Work Number.", function () {
    cy.get(':nth-child(5) > .mb-4').clear().type(BrokerageFirm_data.BF_Work_Number  + Random_Text(), {delay:150} )
    expect(true).to.be.true
})



it("Re-Enter Address.", function () {
    cy.get('.w-100').clear().type(BrokerageFirm_data.BF_Address, {delay:150})
    expect(true).to.be.true
})


    ///////////////////////

    it("Click on Continue button.", function () {
        cy.get('.btnprimary').click().wait(2000)
    })

        
it('Upload Firm Logo.', function(){
    cy.get('.btn-browse').click({force: true})
    const filepath = 'images/AS_logo.png'
    cy.get('.btn-browse').attachFile(filepath, {subjectType: 'drag-n-drop'})
       expect(true).to.be.true
       cy.wait(3000) 
  })
  
    it("Click on Continue button.", function () {
        cy.get('.fixedactionbtns > .col-md-12 > :nth-child(2)').click().wait(2000)
    })

    it("Click on Submit button.", function () {
        cy.get('.col-md-12 > :nth-child(3)').click().wait(2000)
    })

    it("", function () {

    })

    


}

export default Edit_Brokerage_Firm;
