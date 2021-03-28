using System;
using System.Collections.Generic;
using System.Text;

namespace VowelCounter
{
    static class ExtensionClass
    {
        public static int VowelCount(this String str)
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
    }
}
