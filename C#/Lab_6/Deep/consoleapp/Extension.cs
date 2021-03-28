using core;
using infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace consoleapp
{
    static class Extension
    {
        public static void Display(this Product prod)
        {
            Console.WriteLine($"Title: {prod.Title}\nPrice: {prod.Price}\nColor: {prod.Color}");
        }

        public static void AddDisplay(this Inventory cluser, Product product)
        {
            cluser.AddProduct(product);
            product.Display();
        }
            
    }
}
