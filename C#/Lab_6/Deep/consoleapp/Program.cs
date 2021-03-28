using core;
using infrastructure;
using System;

namespace consoleapp
{
    class Program
    {
        static void Main(string[] args)
        {
            Inventory cluster = new Inventory();
            Console.WriteLine("Initial List:");
            Console.WriteLine(cluster.ToString());

            Console.WriteLine("Adding new products to the list: ");
            Product monitor = new Product { Title="Monitor", Color = "Black", Price = 15000 };
            monitor.Display();
            cluster.AddProduct(monitor);

            Product cpu = new Product { Title = "CPU", Color = "Cyan", Price = 89000 };
            Console.WriteLine();
            cluster.AddDisplay(cpu);

            Console.WriteLine("\n\nThe updated list:");

            Console.WriteLine(cluster.ToString());
        }
    }
}
