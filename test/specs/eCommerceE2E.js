describe('Ecommerce Application', () => {
    it('End to End Testing', () => {

        var products = ["Blackberry", "Nokia Edge"]

        browser.maximizeWindow()
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        $("#username").setValue("rahulshettyacademy")
        const password = $("//*[@id='password']")
        password.setValue("learning")
        const Submit = $("#signInBtn")
        Submit.click()
        browser.pause(4000)
        const link = $("*=Checkout")
        link.waitForExist()

        cards = $$("div[class='card h-100']")
        cards.filter(card => products.includes(card.$("div h4 a").getText()))         // It returns an Array of two elements
            .map(productCard => productCard.$(".card-footer button").click())
        browser.pause(4000)



    })
})