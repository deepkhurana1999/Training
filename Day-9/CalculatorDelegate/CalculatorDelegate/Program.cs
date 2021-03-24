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

            
            Calculator.ALU alu = calc.Addition;
            Console.Write("Add: "); calc.Print(alu);

            alu = new Calculator.ALU(calc.Subtraction);
            Console.Write("Subtract: "); calc.Print(alu);

            alu = new Calculator.ALU(calc.Multiplication);
            Console.Write("Multiply: "); calc.Print(alu);

            alu = new Calculator.ALU(calc.Division);
            Console.Write("Divide: ");   calc.Print(alu);
        }
    }
}
