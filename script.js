function digitando(){

    function ativaLetra(elemento){
        const arrayList = elemento.innerHTML.split('')/*criando uma lista(arrayList) com o conteudo do h1(elemento) e usando uma ferramenta que faz a separação das letras(split)*/
    
        /*console.log(arrayList) para ver como fica*/
    
        elemento.innerHTML = '';/*limpando o array para que apareça apenas com a função forEach*/
    
        arrayList.forEach((letra, index)=> {/*criando um looping*/
            setTimeout(()=> {
                elemento.innerHTML += letra
            }, 75 * index)/*função que traz uma letra a cada 75ms usando o setTimeout*/
        });
    }
    
    const titulo = document.querySelector('#escrevendo1')/*armazenando o h1 na variavel titulo*/
    
    ativaLetra(titulo)
    }
    digitando()
