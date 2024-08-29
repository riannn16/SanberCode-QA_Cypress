const HomePage = require('../support/pages/homePage/home-page')
const LoginPage = require('../support/pages/loginPage/login-page')
const RegisterPage = require('../support/pages/registerPage/register-page')

var randomUser = generateRandomUser();

function generateRandomUser() {
  const time = new Date().getTime()
  return "rian" + time;
}

describe('User should be able to sign up', () => {
  it('with valid data', () => {
    // 1. Visit url
    // 2. Validate sign up pop up is vivible
    // 3. Fill username
    // 4. Fill password
    // 5. Click sign up button

    HomePage.goHomePage()
    HomePage.clickSignUpMenu()
    RegisterPage.fillUsername(randomUser)
    RegisterPage.fillPassword()
    RegisterPage.clikSignUpButton()

    HomePage.clickSignInMenu()
    LoginPage.fillUsername(randomUser)
    LoginPage.fillPassword()
    LoginPage.clickLoginButton()

    HomePage.verifyUsernameExist(randomUser)

  })
})