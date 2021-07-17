class reviewPage {
    get productPrices() {
        return $$("//tr/td[4]/strong")
    }
    get totalPrices() {
        return $("h3 strong")
    }
    get checkoutButton() {
        return $(".btn-success")
    }
    sumOfProducts() {
        const sumOfProducts = this.productPrices.map(productPrice => parseInt(productPrice.getText().split(".")[1].trim()))
            .reduce((acc, price) => acc + price, 0)
        return sumOfProducts
    }
    totalFormattedPrice() {
        return parseInt(this.totalPrices.getText().split(".")[1].trim())
    }
}
module.exports = new reviewPage()
