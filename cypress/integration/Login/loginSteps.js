/// <reference types="cypress" />

import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../page_objects/LoginPage';


//Object Creation for PageObject Page Class and assigning it to a constant variable
const loginPage=new LoginPage();
    
When('I log in with {string} and {string}',(email, password)=>{
    loginPage.login(email, password)
})

Then('I must be authenticated',()=>{
    cy.getLocalStorage('RUNA_ACCESS_TOKEN').should('have.length', 64)
})

And('I must see {string} on the home page',(header)=>{
    cy.get('[data-testid=header-title]').contains(header)
})
