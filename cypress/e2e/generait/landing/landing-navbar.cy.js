describe('Landing page navbar', () => {
    it('displays generait logo and name in top left corner', () => {
        cy.visit('http://localhost:3000/', { timeout: 30000, auth: {
            username: 'cypressTest',
            password: 'ctpw',
          } })
        cy.get('[data-testid="cypress-app-logo"]').should('exist');
        cy.get('[data-testid="cypress-app-name"]').should('have.text', 'GenerAIt')
    })
})