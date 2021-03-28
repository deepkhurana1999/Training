using CalculatorLib;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExtensionMethod
{
    static class ExtensionClass
    {
        
        public static int Multiplication(this Calculator calc)
        {
            return calc.Num1 * calc.Num2;
        }

        public static int Division(this Calculator calc)
        {
            return calc.Num1 / calc.Num2;
        }

        public static int Negate(this int i)
        {
            return -i;
        }

    }
}
