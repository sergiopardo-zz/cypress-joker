/// <reference types="cypress" />


class PayrollGroupPage {
    constructor(payroll_group) {
        this.payroll_group = payroll_group;
    }

    openPayrollGroupTab() {
        cy.get('.tabsFullWidth > ul > :nth-child(2) > a').click()
    }

    createPayrollGroup() {
        this.payroll_group = 'Payroll Group Test ' + Math.floor(Date.now())
        cy.wait(5000)
        cy.get('[data-testid=new-group-payroll]').click()
        cy.get('[data-testid=wrapped-input]').type(this.payroll_group)
        cy.get('#payroll_group_sub_company_id').click().type('Review App{enter}')
        cy.get('#payroll_group_company_bank_id').click().type('Cta Runa{enter}')
        cy.get('#payroll_group_currency_id').click().type('Peso Mexicano{enter}')
        cy.get('#payroll_group_payroll_frequency').click().type('Mensual{enter}')
        cy.get('#payroll_group_calculation_based_on').click().type('30 días{enter}')
        cy.get('#payroll_group_annual_gratuity').click().type('Extraordinaria{enter}')
        cy.get('[data-testid=checkbox-option-false]').click()
        cy.get('[data-testid=radio-option-false]').click()
        cy.get('.is-submit').click()
    }

    assertNewPayrollGroup() {
        cy.wait(5000)
        cy.get('div:last-child > .section-inner-item-view-header').invoke('text').then((text) => {
            expect(text.split('.')[0]).to.be.equal(this.payroll_group)
        })
    }
} 

export default PayrollGroupPage
