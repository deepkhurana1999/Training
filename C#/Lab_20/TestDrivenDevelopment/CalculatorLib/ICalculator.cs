using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorLib
{
    public interface ICalculator
    {
        int Addition(int number1, int number2);
        int Subtraction(int number1, int number2);
        int Multiplication(int number1, int number2);
        int Division(int number1, int number2);
    }
}
