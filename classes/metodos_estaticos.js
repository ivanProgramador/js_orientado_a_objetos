


/*
Todas as vezes que queremos usar um metodo de uma classe 
temos que instanciar o objeto com base nela e depois chamar o metodo,
porém dependendo do contexto do software isso não é viavel.

Mas caso eu não queira fazer tudo isso bata que torne os metodos estaticos
ai eu so chamo a classe eo metodo que eu preciso diretamente.

no caso abaixo eu fiz a classe calculadora com 2 metodos e a palavra static 
avisa aoa processador que esses metodd tem a lgica estatica e que eu 
não preciso de um objeto para usar ele. 

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
Usando um metodo estatico chamando direto da classe,
isso evita que eu tenha que colocar mais uma varivela na memoria sem
necessiddade.  
*/

Calculadora.soma(4,4);
Calculadora.subtrai(10,4);
