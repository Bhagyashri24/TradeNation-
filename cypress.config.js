const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://tradenation.com/en-gb/markets/#forex'
  },
});

//cy.viewport(1280, 800) // Set viewport to 1280px x 800px
