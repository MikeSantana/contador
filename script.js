
            //Pegando valor da data futura e subtraindo pela data atual
    
var resultado1, inputdate;
    
function getValor(){ 
    inputdate = document.getElementById("submit").value
    inputdate2 = sessionStorage.setItem("valordata", inputdate);
    return inputdate2;
 }

 resultado1 = sessionStorage.getItem("valordata");

 var inputdarehours = resultado1 + ' 01:00:00'
 var difference = new Date(inputdarehours) - new Date()
 var seconds = Math.floor(difference/1000)
 
 // formatando data e retornando array 
 function formatDate(seconds){
    var dias = Math.floor(seconds/86400) 
    var horas = Math.floor((seconds%86400)/3600) 
    var minutos =  Math.floor(((seconds%86400)%3600)/60) 
    var segundos = Math.floor(((seconds%86400)%3600)%60)

    dias = dias < 10 ? "0" + dias : dias; 
    horas = horas < 10 ? "0" + horas : horas; 
    minutos = minutos < 10 ? "0" + minutos : minutos; 
    segundos = segundos < 10 ? "0" + segundos : segundos;

    var resultado = [dias, horas, minutos, segundos];
 
  
 


 var getHtml = document.querySelectorAll(.number);

 function mostrarTempo() {
    getHtml.forEach((tempo, index) => {
      tempo.innerHTML = resultado[index];
    });
  }
 
mostrarTempo(); 

setInterval(mostrarTempo, 1000);
 



            






