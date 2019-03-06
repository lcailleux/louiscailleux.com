describe('About page tests', function() {
  before(() => {
    cy.exec("npm run");
  });

  it('Visits the about page', function() {
    cy.visit('http://localhost:3000')
  })
});