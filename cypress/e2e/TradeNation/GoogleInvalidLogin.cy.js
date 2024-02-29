describe('My First Test', () => {
    it('Visits the Tradenation.com Website', () => {
      cy.visit('/en-gb/markets/#forex')
      //Assertion for the current Page URL includes '/en-gb/markets/#forex'
      cy.url().should('include', '/en-gb/markets/#forex')
      cy.wait(2000)
      cy.get('#onetrust-accept-btn-handler').click()
      cy.wait(2000)
      //Click on Login button
      cy.get('.e1uvhtso10 > .MuiButton-outlined').click()
      //Assertion for the new Page URL includes '/login'
      cy.url().should('include', '/login')
      //Testcase2-- GoogleInvalidLogin.js 
      cy.get(':nth-child(2) > :nth-child(1) > .input__text').type('test@mail.com')
      cy.get('.input--invalid > :nth-child(1) > .input__text').type('123pass')
      cy.get('.signup__continue-btn').click()
      cy.wait(2000)
      //Aseertion for the error message'Wrong email or password.'
      cy.contains('Wrong email or password.').should('be.visible')  

    })
  })