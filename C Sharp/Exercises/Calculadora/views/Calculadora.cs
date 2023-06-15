using System;

namespace calculadoraView
{

    public class CalculadoraView
    {
        public void Calcular ()
        {
            double number1, number2;
            int operacao;

            Console.WriteLine("Informe o valor do 1° número: ");
                number1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Informe o valor do 2° número: ");
                number2 = Convert.ToDouble(Console.ReadLine());   
           
            Console.WriteLine("\nQual operação deseja fazer? "); 
                Console.WriteLine("[1] - Adição");
                Console.WriteLine("[2] - Subtração");
                Console.WriteLine("[3] - Multiplicação");
                Console.WriteLine("[4] - Divisão");
                    operacao = Convert.ToInt32(Console.ReadLine());

            calculadoraControllers.CalculadoraController.Calculo(number1,number2,operacao);

        } //Final da Calculate
       
    } //Fianl da Class CalculadoraView


} //Final do namespace 
