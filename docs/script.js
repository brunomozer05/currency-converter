const fetchcoins = async () => {
    const url = 'https://economia.awesomeapi.com.br/last/'
    const coins = 'USD-BRL'

    const currency = await fetch(url + coins)
        .then(currency => currency.json())
        .then(coins => coins.USDBRL.bid)

    const inputValue = document.getElementById("value").value

    console.log(currency)

    const result = document.getElementById("result")
    result.innerHTML = (currency * inputValue).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    
}