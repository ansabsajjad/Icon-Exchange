function Delete_Icon_user() {


it('Click on Icon user.', () => {
    cy.get(':nth-child(4) > .relative > .cursor-pointer > :nth-child(2)').click({force: true})
});

}
export default Delete_Icon_user;
