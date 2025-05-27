public class operadores {
    public static void main(String[] args){
        //Operadores de atribuição:
        //Atribuição simples:
        int a = 10;
        int b = 20;

        System.out.println("Valor inicial de a =  "+ a);
        System.out.println("Valor inicial de b =  "+ b);

        //Atribuição composta:
        a += 5; //(a = a + 5)
        b -= 2; //(b = b - 2)
        System.out.println("Valor de a após a atribuição +: "+ a);
        System.out.println("Valor de b após a atribuição -: "+ b);

        a *= 3; //(a = a * 5)
        b /= 2; //(b = b / 2)
        System.out.println("Valor de a após a atribuição *: "+ a);
        System.out.println("Valor de b após a atribuição /: "+ b);


    }
}
