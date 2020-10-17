/// <reference types="cypress" />

import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../page_objects/LoginPage';
import ConfigurationPage from '../page_objects/ConfigurationPage';
import PayrollGroupPage from '../page_objects/PayrollGroupPage'


//Object Creation for PageObject Page Class and assigning it to a constant variable
const loginPage = new LoginPage();
const configPage = new ConfigurationPage();
const payrollGroupPage = new PayrollGroupPage();

Given('I access the configuration options',()=>{
    loginPage.login("qa+mexico@runahr.com", "runahr")
    configPage.openConfigurations()
})

When('I register this new payroll group',()=>{
    payrollGroupPage.openPayrollGroupTab()
    payrollGroupPage.createPayrollGroup()
})

Then('I should see the new payroll group in the list',()=>{
    payrollGroupPage.assertNewPayrollGroup()
})
