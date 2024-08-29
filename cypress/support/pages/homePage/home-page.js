const locator = require('../../locators/home-page-locators')

class homePage {

    async goHomePage() {
        cy.visit('https://www.demoblaze.com/')
    }

    async clickSignUpMenu() {
        cy.xpath(locator.datatest.signup_menu).click()
        cy.xpath(locator.datatest.signup_modal).should('exist', { timeout: 1000 })
    }

    async clickSignInMenu() {
        cy.xpath(locator.datatest.signin_menu).click({ timeout: 1000 })
    }

    async verifyUsernameExist(randomUser) {
        cy.xpath(locator.datatest.username_text).should('contain', randomUser, { timeout: 1000 })
    }
}

module.exports = new homePage()