
function Icon_Exchange_URL() {
   it('Visit to the URL.', () => {

      // cy.visit("https://admin-dev-iconxchng.troonlab.io/login", {failOnStatusCode: false})  //==> Dev Server.
   
      cy.visit("https://admin-stage-iconxchng.troonlab.io/login", {failOnStatusCode: false})  //==> Stagging Server.
     }); 
      
    }
    
    export default Icon_Exchange_URL;