describe('Prestamos', () => {
  it('Permite realizar un prestamos', () => {
    cy.visit('https://uibank.uipath.com/');
    cy.contains('Get started');
    cy.get('#navbarDropdown').click();
    cy.get('.dropdown-menu > [href="/loans"]').click();
    cy.get('h2').should('have.text', ' Financing for what ever life throws at you! ');
    cy.get('.btn-group > #applyButton').click();
    cy.get('h1').should('include.text', 'Loan');
    cy.get('#email').type('uipath@gmail.com');
    cy.get('#amount').type('7500');
    cy.get('#term').select('5');
    cy.get('#income').type('30000');
    cy.get('#age').type('35');
    cy.get('#submitButton').click();
    cy.get('#rateValue').should('have.text', '8');
  })
})