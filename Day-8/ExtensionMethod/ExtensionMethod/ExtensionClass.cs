using CalculatorLib;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExtensionMethod
{
    static class ExtensionClass
    {
        public static int vCount(this String str)
        {
            int result = 0;
            String strCpy = str.ToLower();
            for (int i = 0; i < strCpy.Length; i++)
            {
                switch (strCpy[i])
                {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u': result++; break;
                }
            }
            return result;
        }

        public static int Mul(this Calculator calc)
        {
            return calc.Num1 * calc.Num2;
        }

        public static int Div(this Calculator calc)
        {
            return calc.Num1 / calc.Num2;
        }

        public static int ngv(this int i)
        {
            return -i;
        }

        public static int ngv(this int i,int n)
        {
            return -i * n;
        }
    }
}
