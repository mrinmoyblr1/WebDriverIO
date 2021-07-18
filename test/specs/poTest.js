const expectchai = require('chai').expect
const loginPage = require('../pageObjects/loginPage')
const shopPage = require("../pageObjects/shop")
const reviewPage = require("../pageObjects/reviewPage")
const checkOutPage = require("../pageObjects/checkOutPage")
const fs = require('fs')
//This fs library help to convert JSON to String
let credentials = JSON.parse(fs.readFileSync("test/testData/LoginTest.json"))
let e2eCredentials = JSON.parse(fs.readFileSync("test/testData/e2eTest.json"))

describe('Ecommerce Application', () => {
    credentials.forEach(({ username, password }) => {
        it('Login Failed Page', () => {
            browser.url("/loginpagePractise/#")
            browser.maximizeWindow()
            console.log("The Page Title is : " + browser.getTitle())
            expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
            loginPage.Login(username, password)
            browser.waitUntil(() => loginPage.signIn.getAttribute("value") === 'Sign In', { timeout: 5000, timeoutMsg: 'Error message did not appear' })
            console.log(loginPage.alert.getText() + " this is the string I'm seeing in the Screen")
            expect(loginPage.textInfo).toHaveTextContaining("rahulshettyacademy")
        })
    })

    e2eCredentials.forEach(({ products }) => {
        it('End to End Testing', () => {
            // var products = ["Blackberry", "Nokia Edge"]
            browser.maximizeWindow()
            browser.url("/loginpagePractise/#")
            loginPage.Login("rahulshettyacademy", "learning")
            shopPage.checkout.waitForExist()
            shopPage.addProductToCart(products)
            shopPage.checkout.click()
            const sumOfProducts = reviewPage.sumOfProducts()
            console.log(sumOfProducts)
            const toTotalIntValue = reviewPage.totalFormattedPrice()
            expectchai(sumOfProducts).to.equal(toTotalIntValue)
            reviewPage.checkoutButton.click()
            checkOutPage.country.setValue("Ind")
            checkOutPage.countryDropdown.waitForExist({ reverse: true })
            checkOutPage.selectCountryValue.click()
            checkOutPage.selectAgreeCheckbox.click()
            checkOutPage.purchaseButton.click()
            expect(checkOutPage.validateSuccessMessage).toHaveTextContaining("Success")
            browser.pause(4000)
        })
    })
})
