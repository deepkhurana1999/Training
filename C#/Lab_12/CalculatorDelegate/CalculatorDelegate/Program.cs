using System;

namespace CalculatorDelegate
{
    class Program
    {
        static void Main(string[] args)
        {
            Calculator calc = new Calculator
            {
                Num1 = 10,
                Num2 = 5
            };

            Console.WriteLine("Arithmetic Operations of two integers:\nNumber1: 10\tNumber2: 5\n");

            Calculator.ALU alu = calc.Addition;
            Console.Write("Addition: "); calc.Print(alu);

            alu = new Calculator.ALU(calc.Subtraction);
            Console.Write("Subtraction: "); calc.Print(alu);

            alu = new Calculator.ALU(calc.Multiplication);
            Console.Write("Multiplication: "); calc.Print(alu);

            alu = new Calculator.ALU(calc.Division);
            Console.Write("Division: ");   calc.Print(alu);
        }
    }
}
