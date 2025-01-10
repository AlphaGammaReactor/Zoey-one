// Import commands.js using ES2015 syntax:
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>
      // Add other custom commands here
    }
  }
}