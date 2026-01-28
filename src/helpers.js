function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaAquivo(listapalavras){
    let textoFinal = '';
    listapalavras.forEach((paragrafo, indice) => {
       const duplicadas = filtraOcorrencias(paragrafo).join(', ');
       if(duplicadas[indice] != null){
            textoFinal += `palavras duplicadas no paragrafo ${indice + 1}: ${duplicadas} \n`
       }
       
    })
    return textoFinal;
}

export {montaSaidaAquivo}