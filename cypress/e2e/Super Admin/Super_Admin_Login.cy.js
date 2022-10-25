import Super_Admin_data from "../../fixtures/Fortra Credentials/Login_Credentials.cy";
import Super_Admin_URL from "./URLs.cy";

function Super_Admin_Login() {
  it("Visit to the URL.", function () {
    Super_Admin_URL();
  });

  it("Enter Email", function () {
    cy.get("#email").clear().type(Super_Admin_data.Email, { delay: 150 });
    expect(true).to.be.true;
  });

  it("Enter Password", function () {
    cy.get("#password").type(Super_Admin_data.Password, { delay: 150 });
    expect(true).to.be.true;
  });

  it("Click on Login", function () {
    cy.get(".icon-noeye").click().wait(2000);
    cy.get(".btn").click();
    cy.wait(2000);
    expect(true).to.be.true;
  });
}
export default Super_Admin_Login;
