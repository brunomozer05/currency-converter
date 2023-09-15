const fetchcoins = async () => {
    const url = 'https://economia.awesomeapi.com.br/last/'

    var select = document.getElementById("option1"); 
    var selectedOption1 = select.options[select.selectedIndex]; 
    console.log(selectedOption1.value);

    var select = document.getElementById("option2"); 
    var selectedOption2 = select.options[select.selectedIndex];
    console.log(selectedOption2.value);
    
    const coins1 = (selectedOption1.value)
    const coins2 = (selectedOption2.value)
    
    let currency = 1

    if (coins1 !== coins2) {    
        currency = await fetch(url + coins1 + "-" + coins2)
        .then(currency => currency.json())
        .then (coins => coins[coins1 + coins2].bid)
    }
        const inputValue = document.getElementById("value").value
        
        console.log(currency)
        
        const result = document.getElementById("result")
        result.innerHTML = (currency * inputValue).toLocaleString('pt-BR', {style: 'currency', currency: coins2});
    
}