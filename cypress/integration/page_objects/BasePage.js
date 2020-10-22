/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/// <reference types="cypress" />

class BasePage {
  launchApplication() {
    cy.visit('/')
  }
}

export default BasePage
