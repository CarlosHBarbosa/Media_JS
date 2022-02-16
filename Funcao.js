let Numeros = []

function capturardados(){

    Numeros.push(document.getElementById('txtNumero').value)
    document.getElementById('txtNumero').value = ''
}

function limpararray(){
    Numeros.length = 0
}

function somartotal(){

    let total = 0
    let i = 0

    while(i < Numeros.length)
    {
        total = parseFloat(total) + parseFloat(Numeros[i])
        i++
    }

    calcularmedia(total)

}

function calcularmedia(total){

    let media 
    let divisor = Numeros.length
    media = total / divisor
    alertmedia(media)

}

function alertmedia(media){

    if(media > 0){
        alert("Média:" + media)
    }else{
        alert("Número inválido!")
    }
    
}