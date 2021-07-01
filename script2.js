function getValue(){
    let getInputValue = document.getElementById("submit").value;
    sessionStorage.setItem("data", getInputValue);
}

var _value = sessionStorage.getItem("data");

function formatValue(){
    let valueDate = _value + ' 01:00:00'
    let difference = new Date(valueDate) - new Date()
    let valueSecond = Math.floor(difference/1000)
    
    let dias = Math.floor(valueSecond/86400) 
    let horas = Math.floor((valueSecond%86400)/3600) 
    let minutos =  Math.floor(((valueSecond%86400)%3600)/60) 
    let segundos = Math.floor(((valueSecond%86400)%3600)%60)

    dias = dias < 10 ? "0" + dias : dias; 
    horas = horas < 10 ? "0" + horas : horas; 
    minutos = minutos < 10 ? "0" + minutos : minutos; 
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let formatValueArry = [dias, horas, minutos, segundos];

    const getHtml = document.querySelectorAll('.number');

    getHtml.forEach((tempo, index) => {
        tempo.innerHTML = formatValueArry[index];
      });
}

setInterval( "formatValue()", 1000);
 




