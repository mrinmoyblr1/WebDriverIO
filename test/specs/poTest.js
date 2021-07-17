const expectchai = require('chai').expect
const loginPage = require('./pageObjects/loginPage')
const shopPage = require("./pageObjects/shop")
const reviewPage = require("./pageObjects/reviewPage")
const checkOutPage=require("./pageObjects/checkOutPage")

describe('Ecommerce Application', () => {
    xit('Login Failed Page', () => {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        browser.maximizeWindow()
        console.log("The Page Title is : " + browser.getTitle())
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        loginPage.Login("rahulshettyacademy", "learning123")
        browser.waitUntil(() => loginPage.signIn.getAttribute("value") === 'Sign In', { timeout: 4000, timeoutMsg: 'Error message did not appear' })
        console.log(loginPage.alert.getText() + " this is the string I'm seeing in the Screen")
        expect(loginPage.textInfo).toHaveTextContaining("rahulshettyacademy")
    })
    describe('Ecommerce Application', () => {
        it('End to End Testing', () => {
            var products = ["Blackberry", "Nokia Edge"]
            browser.maximizeWindow()
            browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
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