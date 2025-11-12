window.document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value

        document.querySelector("#resultado-input").innerHTML = "Resultado: " + inputText.toUpperCase()
    } )

    document.getElementById("btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value

        document.querySelector("#resultado-input").innerHTML = "Resultado: " + inputText.toLowerCase()
    } )

    document.getElementById("btnPrimeiraMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value

        // document.querySelector("#resultado-input").innerHTML = "Resultado: " + inputText.charAt(0).toUpperCase() + inputText.substring(1)

        let palavras = inputText.split(" ")

        for (let i = 0; i < palavras.length; i++) {
            palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
        }

        document.querySelector("#resultado-input").innerHTML = "Resultado: " +  palavras.join(" ");

    } )

    document.getElementById("limpar").addEventListener("click", function(){
        document.querySelector("#input-text").value = ""
        document.querySelector("#resultado-input").innerHTML = null
    } )


})