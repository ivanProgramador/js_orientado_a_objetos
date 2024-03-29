


/*
Todas as vezes que queremos usar um método de uma classe 
temos que instanciar o objeto com base nela e depois chamar o método,
porém dependendo do contexto do software isso não é viável.

Mas caso eu não queira fazer tudo isso basta que eu torne os métodos estáticos
ai eu só preciso chamar classe e depois o método que eu preciso diretamente.

no caso abaixo eu fiz a classe calculadora com 2 métodos e a palavra static 
avisa ao processador que esses métodos tem a lógica estática e que eu 
não preciso de um objeto para usar eles. 

*/

class Calculadora{
   static  soma(a,b){
        console.log(a + b)
    }
   static subtrai(a,b){
        console.log(a - b)
    }
}

/*
Usando métodos estáticos chamando direto da classe,
isso evita que eu tenha que colocar mais uma varivel na memoria sem
necessiddade.  
*/

Calculadora.soma(4,4);
Calculadora.subtrai(10,4);
