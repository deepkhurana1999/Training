using System;
using System.Collections.Generic;
using System.Text;

namespace LinqLambdaLab
{
    class Cal<T>
    {
        public T echo { get; set; }
        public void Display(Action displayType)
        {
            displayType();
        }

     
    }
}
