const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight: 1080,

  viewportHeight: 1920,

  e2e: {

    baseUrl: "http://localhost:4200",

    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']

    // setupNodeEvents(on, config) {

    //   // implement node event listeners here

    // },

  },

});