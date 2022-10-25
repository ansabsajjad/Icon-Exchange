
function Logout(){

it("Logout from Super Admin.", function(){
    cy.wait(3000)
    cy.get('[class="scroller"]').find('li').contains(" Logout").click()
})

}
export default Logout;