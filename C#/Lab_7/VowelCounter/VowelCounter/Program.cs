using System;

namespace VowelCounter
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Example of Extension Method:");
            string title = "Extension Method";

            Console.Write($"Number of vowels in the string \"{title}\": ");
            Console.WriteLine(title.VowelCount());
        }
    }
}
