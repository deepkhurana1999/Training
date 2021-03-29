using System;

namespace ProductGenerics
{
    class Program
    {
        static void Main(string[] args)
        {
            Cart<Product> customerCart = new Cart<Product>();
            Product bugattiVeyron = new Product(1, "Bugatti Veyron", 1.9f, "IT'S A GOOD CAR.", 5);
            Product dayota = new Product(2, "Dodge Charger Dayota", 0.80f, "A GOOD CLASSIC MUSCLE CAR.", 5);
            
            customerCart.Add(bugattiVeyron);
            customerCart.Add(dayota);
            
            for (int i = 0; i < customerCart.Size; i++)
            {
                Console.WriteLine(customerCart[i]);
            }
            
            Console.WriteLine("Before swapping:");
            Console.WriteLine(bugattiVeyron); Console.WriteLine(dayota);

            Swap<Product>(ref bugattiVeyron, ref dayota);

            Console.WriteLine("\nAfter swapping:");
            Console.WriteLine(bugattiVeyron); Console.WriteLine(dayota);
        }

        static void Swap<T>(ref T a,ref T b)
        {
            T temp;
            temp = a;
            a = b;
            b = temp;
        }
    }
}
