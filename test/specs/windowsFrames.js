describe('Windows and Frames Miscellanous', () => {
    it('Parent and Child windows switch-Sanity', () => {
        browser.maximizeWindow()
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        $("[onClick='openWindow()']").click()
        // We need to know how many windows will open
        var handles = browser.getWindowHandles()
        //0th index Parent will be there
        //1st index child window will be there
        browser.switchToWindow(handles[1])
        console.log("This is under child window:: ")
        console.log(browser.getTitle())
        browser.closeWindow()
        browser.switchToWindow(handles[0])
        console.log("This is under parent window:: ")
        console.log(browser.getTitle())
        browser.newWindow("https://rahulshettyacademy.com/#/index")
        const title = browser.getTitle()
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/")
        $("#name").setValue(title)
        browser.switchWindow(title)
        console.log(browser.getUrl())
    })

    it('Frames switch', () => {
        browser.maximizeWindow()
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        $("#mousehover").scrollIntoView()
        console.log($$("a").length)
        browser.switchToFrame($("#courses-iframe"))
        console.log($("=Courses").getTagName())
        console.log($$("a").length)
        browser.switchToFrame(null)
        // Here the server will switch back to Parent Window as we provided null
        console.log($$("a").length)
    })
})

