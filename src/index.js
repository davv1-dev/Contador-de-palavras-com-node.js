const fs = require('fs');
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]
fs.readFile(link, 'utf-8', (erro,texto)=>{
    quebraEmparagrafos(texto);
    //verificaPalavrasDuplicadas(texto);
})
function quebraEmparagrafos (texto){
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) =>{
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem)
} 
function verificaPalavrasDuplicadas(texto){
const listapalavras = texto.split(' ');
const resultado = {};
listapalavras.forEach(palavra => {    
    resultado[palavra] = (resultado[palavra] || 0)+1
})
return resultado;
}