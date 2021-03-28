using System;

namespace firstConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your name:");
            var name = Console.ReadLine();
            var date = DateTime.Now;
            Console.WriteLine($"Hello {name.ToUpper()} on {date}");
        }
    }
}
