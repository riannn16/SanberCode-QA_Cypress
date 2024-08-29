const locator = require('../../locators/login-page-locators')
const staticText = require('../../static_text/static-text')

class loginPage {

    async fillUsername(randomUser) {
        cy.xpath(locator.datatest.username_input)
            .type(randomUser, { force: true })
            .should('have.value', randomUser, { timeout: 1000 })
    }

    async fillPassword() {
        cy.xpath(locator.datatest.password_input)
            .type('password', { force: true })
            .should('have.value', staticText.loginPage.password, { timeout: 1000 })
    }

    async clickLoginButton() {
        cy.xpath(locator.datatest.login_button).click()
    }
}

module.exports = new loginPage()