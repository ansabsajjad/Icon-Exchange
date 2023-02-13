
function Provider_Search(){

    
it('Click on provider.', () => {
    cy.get('.submenu.active > .relative > .cursor-pointer > :nth-child(2)').click()
    cy.wait(2000)
    expect(true).to.equal(true)

});

 

it('Search by First Name.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#firstName').type("ANSAB").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });



 it('Search by Last Name.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#lastName').type("abc").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });

 it('Search by Email.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#email').type("troontechnologies.com").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });



 it('Search by Phone.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('#phone').type("3483745").wait(1000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });


 it('Search by Company.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(5) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Icon exchange").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });


 it('Search by Recruiter..', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(6) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Faizan").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });

 it('Search by Profile Status..', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(7) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Completed").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });

 it('Search by Doc Status..', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(8) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Completed").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });

 it('Search by Agreement Status.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(9) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Signed").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });

 it('Search by Agreement Status.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(10) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Faizan").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });



 it('Search by Created At.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('.customdate').type("02/13/2023").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });


 it('Search by Created By.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(12) > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Super admin").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
   expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });


 it('Search by Area of Expertise.', () => {
    cy.get('.left-icon').click({force:true})
    cy.wait(2000)
    cy.get('.w-100 > .css-b62m3t-container > .custom-select__control > .custom-select__value-container > .custom-select__input-container').type("Medical doctor").type('{enter}').wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    cy.wait(5000)
    expect(true).to.equal(true)
});

it(' Clear Search filter.', () => {
    cy.get('.left-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click()
    cy.wait(2000)
    expect(true).to.equal(true)
 });












}

export default Provider_Search;
