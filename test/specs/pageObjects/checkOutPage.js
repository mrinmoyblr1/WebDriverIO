class checkOutPage
{
    get purchaseButton()
    {
        return $(".btn-success")
    }

    get country()
    {
        return $("#country")
    }
    get countryDropdown()
    {
        return  $(".lds-ellipsis")
    }

    get selectCountryValue()
    {
        return $("*=India")
    }

    get selectAgreeCheckbox(){
        return $("label[for='checkbox2']")
    }

    get validateSuccessMessage(){
        return $(".alert-success")
    }








}


module.exports=new checkOutPage()

