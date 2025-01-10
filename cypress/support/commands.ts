Cypress.Commands.add('login', () => {
  // Implement login logic here
  cy.visit('/login')
  cy.get('[data-testid="email-input"]').type('test@example.com')
  cy.get('[data-testid="password-input"]').type('password123')
  cy.get('[data-testid="login-button"]').click()
})