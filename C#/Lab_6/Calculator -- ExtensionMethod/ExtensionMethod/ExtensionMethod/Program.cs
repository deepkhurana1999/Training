using CalculatorLib;
using System;

namespace ExtensionMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Example of Extension Method:");
            
            Calculator calc = new Calculator { Num1 = 90, Num2 = 10 };
            Console.WriteLine($"\nArithmetic operations on number1: {calc.Num1} and number2: {calc.Num2}");
            Console.WriteLine($"Multiplication: {calc.Multiplication()}\nDivision: {calc.Division()}");
            
            int i = 10;
            Console.WriteLine($"\nNegation of the number {i} is");
            Console.WriteLine(i.Negate());
            //Console.ReadKey();
        }
    }
}
