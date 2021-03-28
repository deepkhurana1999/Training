using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorDelegate
{
    class Calculator
    {
        public delegate int ALU();
        
        public int Num1 { get; set; }
        public int Num2 { get; set; }

        public int Addition()
        {
            return Num1 + Num2;
        }
        public int Subtraction()
        {
            return Num1 - Num2;
        }
        public int Multiplication()
        {
            return Num1 * Num2;
        }
        public int Division()
        {
            return Num1 / Num2;
        }
        public void Print(ALU alu)
        {
            Console.WriteLine(alu());
        }
    }
}
