
/*
Essa é uma classe principal que define animais de uma maneira geral,
e ela tem metodos genericos para todos os animais dentrod desse contexto 
porque todos os animeis nesse contexto tem 
- nome 
- idade
- preco 

*/  

class Animal{
    constructor(nome,idade,preco){

        this.nome = nome;
        this.idade = idade;
        this.preco = preco;

    }


    checaEstoque(){
        return 10;
    }
}


/*
Essa classe ja define de forma especifica o animal cachorro,
O cahorro tem sim seus proprios metodos, assim como suas caracteristicas especificas 
como raça e peso, mas ele faz parte da classe de Animais então para informar isso 
ao computador eu tenho que avisar que  a classe cachorro é uma extensão dda classe 
Animal usando a sintaxe " Cachorro extends Animal " isso vaia fazer ela herdar todos os metodos
e atributos da classe animal.      

*/

class Cachorro extends Animal{

     constructor(nome, idade, preco, raca, peso){
        //na linha abaixo eu viso que os atributos nome,idade,prco vem da super classe animal 
        super(nome,idade,preco);

        // os atributos nativos eu declaro normalmente 
        this.raca = raca;
        this.peso = peso;
     }

     Latir(){
        console.log('Rolf !! ,Rolf !!!');
     }

     checaEstoque(){
        console.log('Temos 28 cachorros ');
     }

}