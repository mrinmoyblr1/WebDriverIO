class loginPage {
    // This is class Properties
    get userName() {
        return $("input[name*='user']")
    }
    get Password() {
        return $("//*[@id='password']")
    }
    get alert() {
        return $(".alert-danger")
    }
    get signIn() {
        return $("#signInBtn")
    }
    get textInfo() {
        return $("p.text-white")
    }
    Login(userName, Password) {
        this.userName.setValue(userName)
        this.Password.setValue(Password)
        this.signIn.click()
    }
}
module.exports = new loginPage()
