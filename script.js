window.document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value

        document.querySelector("#resultado-input").innerHTML = "Resultado: " + inputText.toUpperCase()
    } )

    document.getElementById("btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value

        document.querySelector("#resultado-input").innerHTML = "Resultado: " + inputText.toLowerCase()
    } )


})