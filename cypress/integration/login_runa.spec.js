/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('User should login in Runa', () => {
        cy.get(':nth-child(2) > .field-body > .field > .control > [data-testid=wrapped-input]')
            .type('qa+mexico@runahr.com')
        cy.get(':nth-child(3) > .field-body > .field > .control > [data-testid=wrapped-input]')
        .type('runahr')
        cy.get('[data-testid=login-submit]').click()
        cy.get('[data-testid=modal-close-btn]').click()
        cy.get('[data-testid=header-title]').contains('¡Hola, Administrador!')
        cy.screenshot('login-runa')
    })

    it('User should get employees by API', function () {
        cy.request({
            method: 'get',
            url: 'https://mexico.app.qa-base.runahrapps.com',
            headers: {
                'accept': 'application/json',
                'authorization': '5_LOoITtGujtbPdZbAXzxAx3jPFieFNfP4iZ4j8GEaGogP2doFgwWcjltf6SVvrW'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})
