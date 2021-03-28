using System;
using System.Collections.Generic;
using System.Text;

namespace Polymorphism_Demo
{
    class Child_B: Parent_A
    {
        public override void Display()
        {
            Console.WriteLine("This is child class \" B \".");
        }
    }
}
