/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Testing at the API level', () => {
  let accessToken

  before(() => {
    cy.getToken('qa+mexico@runahr.com', 'runahr')
      .then((token) => {
        accessToken = token
      })
  })

  it('Should create a Payroll Group', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.qa-base.runahrapps.com/payroll_groups',
      headers: { Authorization: `${accessToken}` },
      body: {
        payroll_group: {
          monthly_isr_adjustment: false,
          schema_payment: 'standard',
          name: `Payroll Group ${Math.floor(Date.now())}`,
          sub_company_id: 1,
          company_bank_id: 1,
          currency_id: 1,
          calculation_based_on: 'thirty',
          semi_monthly: {
            calculation_based_on: null,
          },
          extraordinary: {
            annual_gratuity: 'extraordinary',
          },
          annual_gratuity: null,
          payroll_frequency: 'weekly',
          automatic: 'false',
        },
        'payroll_group[automatic]': false,
      },
    }).as('response')

    cy.get('@response').then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).to.be.property('id')
      expect(res.body).to.be.property('name')
    })
  })
})
