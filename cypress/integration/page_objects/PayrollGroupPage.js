/// <reference types="cypress" />


class PayrollGroupPage {

    openPayrollGroupTab() {
        cy.get('.tabsFullWidth > ul > :nth-child(2) > a').click()
    }

    createPayrollGroup() {
        cy.get('[data-testid=new-group-payroll]').click()
        cy.get('[data-testid=wrapped-input]').type('Payroll Group Test ' + Math.floor(Date.now()))
        cy.get('#payroll_group_sub_company_id > .react-select__control > .react-select__value-container').click().type('Review App{enter}')
        cy.get('#payroll_group_company_bank_id > .react-select__control > .react-select__value-container').click().type('Cta Runa{enter}')
        cy.get('#payroll_group_currency_id > .react-select__control > .react-select__value-container').click().type('Peso Mexicano{enter}')
        cy.get('#payroll_group_payroll_frequency > .react-select__control > .react-select__value-container').click().type('Mensual{enter}')
        cy.get('#payroll_group_calculation_based_on > .react-select__control > .react-select__value-container').click().type('30 días{enter}')
        cy.get('#payroll_group_annual_gratuity > .react-select__control > .react-select__value-container').click().type('Extraordinaria{enter}')
        cy.get('[data-testid=checkbox-option-false]').click()
        cy.get('[data-testid=radio-option-false]').click()
        cy.get('.is-submit').click()
    }
}

export default PayrollGroupPage
