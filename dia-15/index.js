// Funçâo + Array

let arrayA = [13, 20, 10, 22, 24, 21, 27, 17, 19, 14]
let arrayB = [24, 22, 13, 29, 15, 17, 28, 14, 16, 20]

function iguais(arrayUm, arrayDois){
    let contador = 0
    let numEmComum = []
    console.log("Estes são os numeros iguais:")

    for (let i = 0; i < arrayUm.length; i++){

        for (let j = 0; j < arrayDois.length; j++){

            if (arrayUm[i] == arrayDois[j]){
                
                numEmComum[contador] = arrayUm[i]
                contador++
                j = arrayDois.length
            }
        }
    }

    return numEmComum
}

console.log(iguais(arrayA, arrayB))