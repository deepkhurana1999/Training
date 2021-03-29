using System;
using System.Collections.Generic;
using System.Text;

namespace GenericAndLINQ
{
    public class Generic<T>
    {
        public T member;
        public void Print()
        {
            Console.WriteLine(member);
        }
    }
}
