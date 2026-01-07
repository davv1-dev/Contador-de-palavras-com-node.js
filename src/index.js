const fs = require('fs');
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]
fs.readFile(link, 'utf-8', (erro,texto)=>{
    quebraEmparagrafos(texto);
    
})

function quebraEmparagrafos (texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem)
} 
function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
}
function verificaPalavrasDuplicadas(texto){
const listapalavras = texto.split(' ');
const resultado = {};
listapalavras.forEach(palavra => {
    if(palavra.length >= 3){
        const palavraLimpa = limpaPalavras(palavra); 
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0)+1
    }   
})
return resultado;
}