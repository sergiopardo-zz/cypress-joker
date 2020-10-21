/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/// <reference types="cypress" />

class PayrollGroupPage {
  constructor(payrollGroup) {
    this.payrollGroup = payrollGroup
  }

  openPayrollGroupTab() {
    cy.get('.tabsFullWidth > ul > :nth-child(2) > a').click()
  }

  createPayrollGroup() {
    this.payrollGroup = `Payroll Group Test ${Math.floor(Date.now())}`
    cy.wait(5000)
    cy.get('[data-testid=new-group-payroll]').click()
    cy.get('[data-testid=wrapped-input]').type(this.payrollGroup)
    cy.itemSelect('Review App', '#payroll_group_sub_company_id', "div[id^='react-select-payroll_group[sub_company_id]-option-']")
    cy.get('#payroll_group_company_bank_id').click().type('Cta Runa{enter}')
    cy.get('#payroll_group_currency_id').click().type('Peso Mexicano{enter}')
    cy.get('#payroll_group_payroll_frequency').click().type('Mensual{enter}')
    cy.get('#payroll_group_calculation_based_on').click().type('30 días{enter}')
    cy.get('#payroll_group_annual_gratuity').click().type('Extraordinaria{enter}')
    cy.get('[data-testid=checkbox-option-false]').click()
    cy.get('[data-testid=radio-option-false]').click()
    cy.get('.is-submit').click()
    cy.get('.is-submit').should('not.be.visible')
  }

  assertNewPayrollGroup() {
    cy.get('div:last-child > .section-inner-item-view-header').invoke('text').then((text) => {
      expect(text.split('.')[0]).to.be.equal(this.payrollGroup)
    })
  }
}

export default PayrollGroupPage
