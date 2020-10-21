/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/// <reference types="cypress" />

class ConfigurationPage {
  openConfigurations() {
    cy.get('.is-right > a:nth-of-type(2)').click({ force: true })
  }
}

export default ConfigurationPage
