using System;

namespace OverrideToStringMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            Product car = new Product
            {
                Id = 1,
                Title = "Dodge Charger Dayota",
                Price = 25
            };

            Console.WriteLine(car.ToString());
        }
    }
}
