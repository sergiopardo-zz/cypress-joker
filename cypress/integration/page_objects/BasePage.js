/// <reference types="cypress" />

class BasePage {
    launchApplication(){
        cy.visit("/")
    }
}

export default BasePage
