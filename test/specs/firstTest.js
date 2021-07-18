describe('Ecommerce Application', () => {
    xit('Login Failed Page-Smoke', () => {
        //WebDriverIOCode Here
        browser.url("/loginpagePractise/#")
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
    xit('Login Successful Page-Sanity', () => {
        browser.maximizeWindow()
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        $("#username").setValue("rahulshettyacademy")
        const password = $("//*[@id='password']")
        password.setValue("learning")
        $("#signInBtn").click()
        browser.pause(5000)
        //const link = $("*=Checkout")
        //This is the Partial Linked Text syntax
        //  link.waitForExist()
        //This wait time period will be configured from "waitforTimeout: 10000" filed under "wdio.conf.js" file
        expect(browser).toHaveTitleContaining("ProtoCommerce")
        expect(browser).toHaveUrlContaining("shop")
    }),

        // We will try the mocha Retry Mechanasm here
        it('Login Fail Test title Smoke', function () {
            this.retries(1)
            //Here this Test will try to execute 2 times whenever it's failed. After 2 times also if it's not passed then it will be reported as failed 
            //but in the second time if the Test passed then the Test will be reported as Passed.
            browser.maximizeWindow()
            browser.url("/loginpagePractise/#")
            $("#username").setValue("rahulshettyacademy")
            $("input[id*='pass']").setValue("Hello")
            $("#signInBtn").click()            

            expect($("p.text-white")).toHaveTextContaining("rahul shetty academy")
        })
});
