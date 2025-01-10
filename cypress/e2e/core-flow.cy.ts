describe('Core Application Flow', () => {
  beforeEach(() => {
    cy.login()
  })

  it('navigates through main sections', () => {
    // Test main navigation
    cy.get('[data-testid="nav-files"]').click()
    cy.url().should('include', '/files')
    
    cy.get('[data-testid="nav-schedule"]').click()
    cy.url().should('include', '/schedule')
    
    cy.get('[data-testid="nav-crew"]').click()
    cy.url().should('include', '/crew')
  })

  it('interacts with AI chat', () => {
    cy.get('[data-testid="chat-input"]')
      .type('Show me recent files{enter}')
    
    cy.get('[data-testid="chat-response"]')
      .should('exist')
      .should('not.be.empty')
  })
})