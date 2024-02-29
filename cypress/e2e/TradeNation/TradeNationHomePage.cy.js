describe('My First Test', () => {
    it('Visits the Tradenation.com Website', () => {
      cy.visit('/en-gb/markets/#forex')
      //Assertion for the current Page URL includes '/en-gb/markets/#forex'
      cy.url().should('include', '/en-gb/markets/#forex')
      cy.wait(2000)
      cy.get('#onetrust-accept-btn-handler').click()
      //TestCase1
      cy.wait(2000)
      //Click on the ‘Trade Nation’ logo on the top of the page. 
      cy.get('.circle1').eq(0).click()
      //Assert that the document's title is "Trade Nation - a broker with a global reach"
      cy.title().should('eq', 'Trade Nation - a broker with a global reach')


    })
  })