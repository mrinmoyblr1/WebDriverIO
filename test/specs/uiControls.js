const expectchai = require('chai').expect
describe('Ecommerce Application', () => {
    it('UI Controls', () => {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        browser.maximizeWindow()
        $("#username").setValue("rahulshettyacademy")
        const password = $("//*[@id='password']")
        password.setValue("learning")
        const radioButtons = $$(".customradio")
        //$$ stands for findElements()
        userDropdown = radioButtons[1]
        // radioButtons[1] will return the second object fron the WebElements Array
        userDropdown.$(".radiotextsty").click()
        // This is chain of Locators
        const model = $(".modal-body")
        model.waitForDisplayed()
        $("#cancelBtn").click()
        console.log(userDropdown.$(".radiotextsty").isSelected())
        userDropdown.$(".radiotextsty").click()
        model.waitForDisplayed()
        $("#okayBtn").click()
        radioButtons[0].$(".radiotextsty").click()
        expect(model).not.toBeDisabled()
        const dropdown = $("select.form-control")
        dropdown.selectByAttribute('value', 'teach')
        dropdown.selectByVisibleText("Consultant")
        dropdown.selectByIndex(0)
        //stud //chai is one library which supports assertion
        expectchai(dropdown.getValue()).to.equal('stud')
    })
    it('Dynamic Dropdown Controls', () => {
        browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        browser.maximizeWindow()
        $("#autocomplete").setValue("Ind")
        browser.pause(4000)
        let items = $$("li.ui-menu-item div")
        // for (var i = 0; i < item.length; i++) {
        //     console.log(item[i].getText())
        // }
        const desiredLocator = items.filter(item => item.getText() === 'India')
        desiredLocator[0].click()
        browser.pause(4000)
    })
    it('Checkboxes Identification', () => {
        browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        browser.maximizeWindow()
        const element=$$("input[type='checkbox']")
        browser.pause(4000)
        element[1].click()
        browser.pause(4000)
        console.log(element[1].isSelected())
        console.log(element[2].isSelected())
        browser.saveScreenshot("Screenshot.png")
    })


    
})
