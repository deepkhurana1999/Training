using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorLib
{
    public class Calculator : ICalculator
    {
        public int Addition(int number1, int number2)
        {
            return number1 + number2;
        }

        public int Subtraction(int number1, int number2)
        {
            throw new NotImplementedException();
        }
    }
}
