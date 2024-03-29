
class Filme{

  /*
   O construtor é uma função e como uma função ele aceita parametros,
   se a classe não tivesse um construtor seria necessaria uma linha 
   de codigo para editar cada atributo dessa classe.
   Usando construtor eu passo todos os valores em uma linha só
  */

    constructor(titulo,ano,genero,diretor,duracao){

        this.titulo =titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor =diretor;
        this.atores = [];
        this.duracao = duracao;

    }



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

/*
agora vou instanciar um objeto com base na classe filme e passar os atributos
isso so é possivel por causa do construtor 
*/

var hulk = new Filme('Hulk',2014,'Ação','Alguem','2h');
console.log("titulo: " + hulk.titulo + ' ano : ' + hulk.ano + ' diretor :' + hulk.diretor + " Duração :" +hulk.duracao);








