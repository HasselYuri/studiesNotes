using System;

namespace calculadoraDoYuri
{

    public class Calculadora
    {   
        
        static void Main(string[] args)
        {
            int op = 0;
            do
            {
                Console.WriteLine("Vamos começar!");
                Console.WriteLine("Informe a opção desejada: ");
                Console.WriteLine("[1] - Calcular");
                Console.WriteLine("[2] - Sair");
                    op = Convert.ToInt32(Console.ReadLine());

                switch(op)
                {
                    case 1: {
                        
                    break;
                    }    
                    default : {

                    break;
                    }
                }
                
            } while (op != 2);

            

        } //Final da Main
       
    } //Fianl da Class Calculadora


} 
