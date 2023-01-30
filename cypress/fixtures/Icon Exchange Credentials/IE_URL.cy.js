
function Icon_Exchange_URL() {
   it('Visit to the URL.', () => {
    cy.visit("https://admin-dev-iconxchng.troonlab.io/login", {failOnStatusCode: false})
   }); 
    
    }
    
    export default Icon_Exchange_URL;