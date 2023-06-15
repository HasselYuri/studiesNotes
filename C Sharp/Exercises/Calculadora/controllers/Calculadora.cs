using System;

namespace calculadoraControllers
{

public class CalculadoraController
    {
        public static void Calculo(
            double number1,
            double number2,
            int operation
           
        ){
            new calculadoraModel.CalculadoraModels(
                number1,
                number2,
                operation
            );
        }
    }
}    