using core;
using System;
using System.Collections.Generic;
using System.Text;

namespace consoleapp
{
    static class Extension
    {
        public static void display(this Product prod)
        {
            Console.WriteLine($"Title: {prod.Title}\nPrice: {prod.Price}\nColor: {prod.Color}");
        }
            
    }
}
