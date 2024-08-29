const locator = require('../../locators/register-page-locators')

class registerPage {

    async fillUsername(randomUser) {
        cy.xpath(locator.datatest.username_input)
            .type(randomUser, { force: true })
            .should('have.value', randomUser)
    }

    async fillPassword() {
        cy.xpath(locator.datatest.password_input)
            .type('password', { force: true })
            .should('have.value', 'password', { timeout: 1000 })
    }

    async clikSignUpButton() {
        cy.xpath(locator.datatest.signup_button)
            .click()
        cy.wait(1000)
    }
}

module.exports = new registerPage();