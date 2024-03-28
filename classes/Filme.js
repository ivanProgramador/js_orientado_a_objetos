
//exemplo de uma classe 

class Filme{

    //Quando se escreve uma classe em js puro 
    //os atributos dela devem ficar dentro do construtor

    constructor(){
        this.titulo ='';
        this.ano = 0;
        this.genero = '';
        this.diretor ='';
        this.atores = [];
        this.duracao = 0;
    }


    //metdos parecem funbções mas não são pporque 
    // essa sintaxe so funciona dentro de uma classe
    // fora dela essa sintaxe não é valida 

    Reproduzir(){
        console.log("Reproduzindo....");
    }

    Pausa(){
        console.log("Pausado || ");
    }

    Avanca(){
        console.log("Avançando >> ");

    }

    Fechar(){
        console.log("Fechar X");
    }


}