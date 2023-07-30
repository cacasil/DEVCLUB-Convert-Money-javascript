 
const convertButton = document.querySelector("convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertvalues(){
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currecy-value-to-convert") // valor em Real
    const currencyvalueconvertd = document.querySelector(".currecy-value-to-convert")  // outras moedas
    console.log(currencySelect.value)
    const dolartoday = 5.2
    const euroToday = 6.2



      if(currencySelect.value == "dolar"){
      currencyvalueconvertd.ineerHTML = new Intl.NumberFormat("en-US",{
         style: "currecy",
         currency: "USD"
      }).format( inputcurrencyvalue / dolartoday) 
    }

    if(currencySelect.value == "euro"){
       currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
       }).format(inputcurrencyvalue/euroToday )
    }

      inputcurrencyvalue / dolartoday
     currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
     }).format(inputcurrencyvalue)
     currencyvalueconvertd.ineerHTML = new Intl.NumberFormat("en-US",{
        style: "currecy",
        currency: "USD"
     }).format(convertedvalue) 
    console.log(inputcurrencyvalue)
}

convertButton.addEventListener("click", convertvalues)     

