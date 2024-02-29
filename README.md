 Instructions for installation and running tests

 1. Set up npm package and install it
 Create a new directory name 'cypress' and then run below command in that directory using terminal

 'npm init -y'

2. Install cypress on local machine by running below commands in terminal

'npm install --save-dev cypress'

3. Open the cypress interface by running 

'npx cypress open'

4. Select the test using the path 
For TestCase1 : e2e -> 'TradeNation' -> TradeNationHomePage.cy.js 
For TestCase2 : e2e -> 'TradeNation' -> GoogleInvalidLogin.cy.js

Note:

To run the tests with desktop (viewport width: 1280, viewport Height: 800)
I have added below configuartion in cypress.config.js file 
  viewportWidth: 1280,
  viewportHeight: 800

  I have also defined base URL in cypress.config.js file 
 baseUrl: 'https://tradenation.com'


