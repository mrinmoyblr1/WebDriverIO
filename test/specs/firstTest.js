describe('Ecommerce Application', () => {
    it('Login Failed Page', () => {
        //WebDriverIOCode Here
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        browser.maximizeWindow()
        console.log("The Page Title is : " + browser.getTitle())
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        $("input[name*='user']").setValue("Hello")
        //browser.pause(2000)
        $("#username").setValue("rahulshettyacademy")
        // This is the sortcut to define CSS
        // #id => #username  (replace id with actual ID from DOM)
        // .classname => .form-control(replace classname with actual classname from DOM)        
        // We can provode tag name at the staring to reduce the scope of the locator: input.form-control  (input is the TAG name)
        $("input[id*='pass']").setValue("Hello")
        const password = $("//*[@id='password']")
        password.setValue("learning123")
        const Submit = $("#signInBtn")
        Submit.click()
        // Submit.getAttribute("value") === 'Sign In'
        browser.waitUntil(() => Submit.getAttribute("value") === 'Sign In', { timeout: 4000, timeoutMsg: 'Did not appear' })
        console.log($(".alert-danger").getText() + " this is the string I'm seeing in the Screen")
        // $("p.text-white").getText()
        expect($("p.text-white")).toHaveTextContaining("rahulshettyacademy")
        //expect(browser).toHaveTitleContaining("Proto")
        //browser.pause(3000)
    })


    it('Login Successful Page', () => {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        $("#username").setValue("rahulshettyacademy")
        const password = $("//*[@id='password']")
        password.setValue("learning")
        $("#signInBtn").click()

        const link = $("*=Checkout")
        //This is the Partial Linked Test syntax
        link.waitForExist()
        //This wait time period will be configured from "waitforTimeout: 10000" filed under "wdio.conf.js" file

        expect(browser).toHaveTitleContaining("ProtoCommerce")
        expect(browser).toHaveUrlContaining("shop")

    })
});





