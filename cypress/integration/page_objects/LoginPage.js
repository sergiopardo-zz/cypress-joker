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

        cy.setLocalStorage('RUNA_VIDEO_COUNT', '{\"Qv1QaxXL7Ig\": 1,\"c-WkuSnKLk0\": 1,\"VW3xOmPymVY\": 2,\"PdxO5e2Sau8\": 1,\"Im8rYIxrbSk\": 1,\"SAo1FbT3fDM\": 1,\"GSo5GbMcQtc\": 1,\"P4PeTLwRz_A\": 1,\"vKGQg1DmLZA\": 1,\"3oO-0e6YnPo\": 1,\"xvFO0IfYn9Y\": 1,\"FQxY0a_-O9w\": 2}');
    }
}

export default LoginPage 