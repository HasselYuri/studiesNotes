using System;

namespace calculadoraModel
{

    public class CalculadoraModels
    {
        public double Number1 { get; set; }
        public double Number2 { get; set; }
        public int Operation { get; set; }


        public CalculadoraModels(
            double number1,
            double number2,
            int operation


        ){
            this.Number1 = number1;
            this.Number2 = number2;
            this.Operation = operation;

        }
       
    } //Fianl da Class Calculadora

    


} //Final do namespace 
