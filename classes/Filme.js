
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

/*
 Objetos são instancias de classes 
 por exemplo a classe fime pode gerar varios objetos filme 
 cada um com seu titulo,genero,ano .... 

Abaixo eu tenho 3 objtos gerados com base na classe filme,
primeiro eu faço a definição do nome da variavel depois eu 
atribuo o valor da classe a ela, isso faz com que ela tenha acesso 
a todos os metodos da classe filme, isso torna ela um objeto,
que pertence a classe filme.


var vingadores = new Filme();
 

*/

var vingadores = new Filme();
var hulk = new Filme();
var starWars = new Filme();

/*
Objetos criados com base em uma classe podem ter acesso 
aos metodos e podem tambem manipular atributos usando 
um dos objetos acima eu vou acessar um metodo que vai 
retornar um texto e tambem um atributo.

caso eu tente mostrar o atributo titulo não vaia aparecer nada 
porque para mostrar primiero eu tenho que instanciar, dizer qual 
eo titulo do objeto.

*/

vingadores.titulo  = 'Vingadores';
console.log(vingadores.titulo); //aqui ele me retona vingadores porque eu defini esse atributo na linha de cima

/*
Embora esses 3 objetos sejam da mesma classe os tributos podem ser diferentes
titulos diferentes, porem os metodos são iguais  
*/




