const expectchai = require('chai').expect
describe('Functional Testing on Application', () => {
    // it('Scorling and Mouse hover', () => {
    //     browser.maximizeWindow()
    //     browser.url("https://rahulshettyacademy.com/AutomationPractice/")
    //     browser.pause(2000)
    //     $("#mousehover").scrollIntoView()
    //     $("#mousehover").moveTo()
    //     browser.saveScreenshot("NewScreenShot.png")
    //     $("=Top").click()
    // })
    // it('Double Click Example', () => {
    //     browser.maximizeWindow()
    //     browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
    //     browser.pause(3000)
    //     $("button").doubleClick()
    //     // console.log(browser.isAlertOpen())
    //     //>>This will return true is the Alert is opened        
    //     expectchai(browser.isAlertOpen()).to.be.true
    //     expectchai(browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
    //     //>>This will return the Alert Text
    //     browser.acceptAlert()
    // })
    // it('Web Tables Sort Validations', () => {
    //     browser.maximizeWindow()
    //     browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    //     $("tr th:nth-child(1)").click()
    //     const veggiesLocators = $$("tr td:nth-child(1)")
    //     const OriginalVeggiesNames = veggiesLocators.map(veggie => veggie.getText())
    //     console.log(OriginalVeggiesNames)
    //     // Taking a copy of the Array as below:
    //     veggies = OriginalVeggiesNames.slice()
    //     sortedVeggies = veggies.sort()
    //     console.log(sortedVeggies)
    //     expectchai(OriginalVeggiesNames).to.eql(sortedVeggies);
    // })

    it('Web Tables Filter Validations', () => {
        browser.maximizeWindow()
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        $("input[type='search']").setValue("Tomato")
        const veggiLocators = $$("tr td:nth-child(1)")
        expect(veggiLocators).toBeElementsArrayOfSize({ eq: 1 })
        // This is WebDriverIO assertion. {eq:1} is to check the size is equal to 0
        expect(veggiLocators[0].getText()).toEqual("Tomato")
        expect(veggiLocators[0]).toHaveTextContaining("Tomato")
    })
})
