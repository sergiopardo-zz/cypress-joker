/// <reference types="cypress" />

import BasePage from "./BasePage"

class LoginPage extends BasePage {

    login(email, password){
        const basePage = new BasePage()
        basePage.launchApplication()

        cy.get(':nth-child(2) > .field-body > .field > .control > [data-testid=wrapped-input]').type(email)
        cy.get(':nth-child(3) > .field-body > .field > .control > [data-testid=wrapped-input]').type(password)
        cy.get('[data-testid=login-submit]').click()
        cy.get('[data-testid=modal-close-btn]').click()
    }
}

export default LoginPage 