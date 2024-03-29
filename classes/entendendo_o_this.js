
class Filme{
  
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

      Ficha(){

        console.log(' titulo: ' + this.titulo);
        console.log(' Ano: ' + this.ano);
        console.log(' Genero: ' + this.genero);
        console.log(' Diretor: ' + this.diretor);
        console.log(' Duração: ' + this.duracao);
    
      }
  
  
  }

  /*
  Uma traudção do inglés para o portugues this significa isso, essa, esse 
  dependendo do contexto, na orientação a objetos tambem é assim, quando 
  você aponta para um bjeto e aciona o this ele vai se referir ao objeto que chamou
  ele.
  
  Abaixo eu vou criar um objeto da classe filme 
  */

  var hulk = new Filme('Hulk',2014,'Ação','Alguem','2h');

  //agora eu vou um metodo ficha que serve para mostrar os dados do objeto filme

  /*
   
   Dentro desse metodo em momento nenhum eu informo hulk.titulo para mostrar o titulo do filme
   eu so uso o "this", como ele sabe que o titulo que ele tem que mostrar e do filme hulk ?

   Ele sabe porque foi o objeto hulk que tem esse titulo quem chamou ele e assim ele vai fazer 
   com qualquer outro objeto que faça essa chamada. 

   Ficha(){

        console.log(' titulo: ' + this.titulo);
        console.log(' Ano: ' + this.ano);
        console.log(' Genero: ' + this.genero);
        console.log(' Diretor: ' + this.diretor);
        console.log(' Duração: ' + this.duracao);
    
      }
  
  */
  

  //agora eu vou fazer o objeto filme que eu criei chamar esse metodo



  hulk.Ficha();

  
  
  
  
  
  
  
  
  