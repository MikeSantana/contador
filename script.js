

    function inputdados(){
        //Pegando valor da data futura e subtraindo pela data atual
        inputdate = document.getElementById("submit").value
        inputdarehours = inputdate + ' 01:00:00'
        difference = new Date(inputdarehours) - new Date()
        seconds = Math.round(difference/1000)
        
        // formatando data e retornando array 
        dias = Math.floor(seconds/86400) 
        horas = Math.floor((seconds%86400)/3600) 
        minutos =  Math.floor(((seconds%86400)%3600)/60) 
        segundos = Math.floor(((seconds%86400)%3600)%60)
    
        dias = dias < 10 ? "0" + dias : dias; 
        horas = horas < 10 ? "0" + horas : horas; 
        minutos = minutos < 10 ? "0" + minutos : minutos; 
        segundos = segundos < 10 ? "0" + segundos : segundos; 
    
    
        return [dias, horas, minutos, segundos];
    }






    






