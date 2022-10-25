
function SA_Properties() {


    it("Click on Open Check box filter.", function () {
        cy.wait(2000)
        cy.get(':nth-child(2) > .checkbox-border > .form-check > .form-check-label').click()
        cy.wait(2000)
        expect(true).to.be.true
    })

    it("Scroll to the right side.", function () {
        cy.get('.table-style').scrollTo('right')
        cy.wait(2000)
        expect(true).to.be.true
    })

    it("Click on view button of the Top first property", function () {
        cy.get(':nth-child(1) > :nth-child(9) > .view-btn').click()
        cy.wait(2000)
        expect(true).to.be.true
    })

    // it("Click on First Document.", function(){
    //     cy.get(':nth-child(1) > .finalupload').click().wait(12000)
    // })  

    // it("Scroll bottom then top.", function(){
    //     cy.wait(2000)
    //     cy.get('.react-pdf__Page').scrollTo('bottom').wait(2000)
    //     cy.scrollTo('top').wait(2000)
    // })  

    // it("Click on close button.", function(){
    //     cy.get('.btn-close').click().wait(2000)
    // })  


    it("Select Deposit Confirmed.", function () {
        cy.get('.form-control').select('Deposit Confirmed')
        expect(true).to.be.true
    })

    it("Click on Submit button", function () {
        cy.get('.col-md-12 > .btn').click().wait(2000)
        cy.reload()
        cy.wait(2000)

    })

    it("Click on Back to Properties List button.", function () {
        cy.get('.backlink > a').click().wait(2000)
        expect(true).to.be.true
    })

    it("Click on Deposit Confirmed check box filter.", function () {
        cy.get(':nth-child(3) > .checkbox-border > .form-check > .form-check-label').click().wait(2000)
        expect(true).to.be.true
    })

    it("Scroll properties to the right side.", function () {
        cy.get('.table-style').scrollTo('right')
        cy.wait(2000)
        expect(true).to.be.true
    })

    it("Click on view button of the Top first property.", function () {
        cy.get('tbody > :nth-child(1) > :nth-child(9)').click()
        cy.wait(2000)
        expect(true).to.be.true
    })

 
    it("Select Property Completed.", function () {
        cy.get('.form-control').select('Property Completed').wait(2000)
        expect(true).to.be.true
    })

    it("Click on Submit button.", function () {
        cy.get('.col-md-12 > .btn').click().wait(2000)
        expect(true).to.be.true
    })

    it("Click on Back to Properties List button.", function () {
        cy.get('.backlink > a').click().wait(2000)
        expect(true).to.be.true
    })

    it("Scroll down and up.", function () {
        cy.scrollTo('bottom').wait(2000)
        cy.scrollTo('top').wait(2000)
        expect(true).to.be.true
    })

    it("", function () {

    })


}
export default SA_Properties;
