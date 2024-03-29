
/*
Abaixo eu tenho 3 classes cada uma tem sua função em relação ao arquivo.
*/

class Leitor{
    constructor(arquivo){
        this.arquivo = arquivo;
    }

    Ler(){
        console.log('Lendo Arquivo ....');
    }
}


class Escritor{
    constructor(arquivo){
        this.arquivo = arquivo;
    }
    Escrever(){
        console.log('Escrevendo no Arquivo ....');
    }
}

class Destruidor{
    constructor(arquivo){
        this.arquivo = arquivo;
    }
    Destruir(){
        console.log('Apagando o Arquivo ...');
    }
}

/*
Abaixo eu tenho um classe qe gerencia soa aruivos de forma geral 
e para gerenciar ela precisa usar as classes acima,
no metodo construtor da classe abaixo eu transformo os meus metodos em instancias
das classes acima podemdo usar tudo oque essas classes tem para manipular os aruivos,
que o usuario mandar para o gerenciado de arquivos.  

Isso se chama composição

Abaxo eu tenhio duas classes e as duas tem a amesma composição de classes 
com objetivos diferentes, isso siginifica que se eu precisar fazer uma alteração no
metodo ou na classe leitura todas as classes que usam os métodos dela
vão ser alteradas ao mesmo tempo, sem precisar que eu acesse classe por classe 
para atualizar isso economiza tempo.   



*/

class GerenciadorDeArquivos{
    constructor(nome){
        this.nome = nome;
        this.Leitor = new Leitor();
        this.Escritor = new Escritor();
        this.Destruidor = new Destruidor();

    }
}

// usando as mesmas classes com objetivos diferentes  

class GerenciadorDeUsuarios{

    constructor(registos){

        this.registos = registos;
        this.Leitor = new Leitor();
        this.Escritor = new Escritor();
        this.Destruidor = new Destruidor();

    }
    
}
