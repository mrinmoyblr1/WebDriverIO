class shop {
    get checkout() {
        return $("*=Checkout")
    }
    get cards() {
        return $$("div[class='card h-100']")
    }
    addProductToCart(products) {
        this.cards.filter(card => products.includes(card.$("div h4 a").getText()))
            .map(productCard => productCard.$(".card-footer button").click())
    }
}
module.exports = new shop()
