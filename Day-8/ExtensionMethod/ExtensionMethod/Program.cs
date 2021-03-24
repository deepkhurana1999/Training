using CalculatorLib;
using System;

namespace ExtensionMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            string title = "Extension Method";
            Console.WriteLine(title.vCount());

            Calculator calc = new Calculator { Num1 = 9, Num2 = 10 };
            Console.WriteLine(calc.Mul()+ " " + calc.Div());

            int i = 10;
            Console.WriteLine(i.ngv(10));
        }
    }
}
