let saida = document.getElementById("saida")
let frase = document.getElementById("frase")

saida.style,visibility = "hidden"

function fechar () {
    saida.style.visibility = "hidden"
}

function pbf () {
    let renda = Number (document.getElementById("renda").value)
    let membros = Number(document.getElementById ("familia").alue)

    let percapita = renda / membros
    saida.style.visibility = "visible"

    frase.innerHTML =`Uma familia com ${membro} integrante e que recebe R$${renda.toFixed(2)} por mês, tem <strong>renda per capita de R$${percapita.toFixed(2)}</strong> e por conta disso `
   
    if (percapita <= 178) {
        frase.innerHTML += `<span class='sim'>tem direito ao Bolsa Família</span>.`
    } else {
        frase.innerHTML += `<span class='nao'>NÃO tem direito ao Bolsa Família</span>.`
    }

    return false 


}