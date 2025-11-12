window.document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value

        document.querySelector("#resultado-input").innerHTML = inputText.toUpperCase()
    } )

    document.getElementById("btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value

        document.querySelector("#resultado-input").innerHTML = inputText.toLowerCase()
    } )

    document.getElementById("btnPrimeiraMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value

        // document.querySelector("#resultado-input").innerHTML = "Resultado: " + inputText.charAt(0).toUpperCase() + inputText.substring(1)

        let palavras = inputText.split(" ")

        for (let i = 0; i < palavras.length; i++) {
            palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
        }

        document.querySelector("#resultado-input").innerHTML = palavras.join(" ");

    } )

    document.getElementById("limpar").addEventListener("click", function(){
        document.querySelector("#input-text").value = ""
        document.querySelector("#resultado-input").innerHTML = null
        document.getElementById("copiar").textContent = "Copiar texto"
    } )

    document.getElementById("codigoMorse").addEventListener("click", function(){
        const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
        ' ': '/' 
        };

        let inputText = document.querySelector("#input-text").value
        let upperCaseText = inputText.toUpperCase();
        let morseCode = '';

        for (let i = 0; i < upperCaseText.length; i++) {
            const character = upperCaseText[i];
            console.log("character " + character)
            const morseChar = morseCodeMap[character];
            console.log("morseChar " + morseChar)


            if (morseChar) {
            morseCode += morseChar + ' ';
            } else {
            console.warn(`Caractere não suportado ignorado: ${character}`);
            }
        }

        document.querySelector("#resultado-input").innerHTML = morseCode.trim();


    } )

    document.getElementById("copiar").addEventListener("click", function() {
        let inputText = document.querySelector("#resultado-input").value;

        navigator.clipboard.writeText(inputText).then(() => {
            console.log("Texto copiado");

            const botao = document.getElementById("copiar");
            botao.textContent = "Copiado com sucesso!";

            setTimeout(() => {
                botao.textContent = "Copiar texto";
            }, 2000);
        }).catch(err => {
            console.error("Erro ao copiar texto: ", err);
        });
    });


})

