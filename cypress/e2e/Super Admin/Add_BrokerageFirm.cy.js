import BrokerageFirm_data from "../../fixtures/Fortra Data/BrokerageFirm_Data.cy"
import Random_Text from "../../fixtures/Fortra Data/Random_Text_Generator"


function Add_Brokerage_Firm(){


    it("Click on Brokerage Firm.", function () {
        cy.get(':nth-child(2) > .false').click().wait(2000)
        expect(true).to.be.true

    })

    it("Click on Brokerage Firm button.", function () {
        cy.get('.withbutton > .btn').click().wait(2000)
        expect(true).to.be.true
    })

    it("Enter Broker Firm name.", function () {
        cy.get('.col-md-12 > .mb-4').clear().type(BrokerageFirm_data.Broker_Firm_Name + " " + Random_Text(), {delay:150})
    })

    it("Enter Firm Owner name.", function () {
        cy.get(':nth-child(2) > .mb-1').clear().type(BrokerageFirm_data.BF_Owner_Name + " " + Random_Text() , {delay:150})
        expect(true).to.be.true
    })

    it("Enter Email Address.", function () {
        cy.get(':nth-child(3) > .mb-1').clear().type(BrokerageFirm_data.BF_Email + "+" + Random_Text() + "@troontechnologies.com", {delay:150})
        expect(true).to.be.true
    })

    it("Enter Mobile Number.", function () {
        cy.get('.react-tel-input > .form-control').clear().type(BrokerageFirm_data.BF_Mobile_Number, {delay:150})
        expect(true).to.be.true
    })

    it("Enter Work Number.", function () {
        cy.get(':nth-child(5) > .mb-1').clear().type(BrokerageFirm_data.BF_Work_Number  + Random_Text(), {delay:150} )
        expect(true).to.be.true
    })

    it("Enter Domain.", function () {
        cy.get('.mb-1')  .clear().type(BrokerageFirm_data.BF_domain + Random_Text() , {delay:150})
        expect(true).to.be.true
    })

    it("Enter Address.", function () {
        cy.get('.w-100').clear().type(BrokerageFirm_data.BF_Address, {delay:150})
        expect(true).to.be.true
    })

    it("Click on Continue button.", function () {
        cy.get('.btnprimary').click().wait(2000)
        expect(true).to.be.true
    })


    
it('Upload Firm Logo.', function(){
    cy.get('.btn-browse').click({force: true})
    const filepath = 'images/AS_logo.png'
    cy.get('.btn-browse').attachFile(filepath, {subjectType: 'drag-n-drop'})
       expect(true).to.be.true
       cy.wait(3000) 
  })
  
  it('Click on Continue button', function(){
    cy.get('.fixedactionbtns > .col-md-12 > :nth-child(2)').click()
    expect(true).to.be.true
    cy.wait(5000)
  })
  

    it("Click on Submit button.", function () {
        cy.get('.col-md-12 > :nth-child(3)').click()
        expect(true).to.be.true
    })

    it("Click on Back To Listing.", function () {
        cy.wait(4000)
        cy.get('.mt-80 > .btn').click()
        expect(true).to.be.true
    })

    it("", function () {

    })

}
export default Add_Brokerage_Firm;