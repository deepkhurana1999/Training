using System;

namespace GenericClassAndAction
{
    class Program
    {
        static void Main(string[] args)
        {
            Cal<int> echInt = new Cal<int>
            {
                echo = 9
            };

            Cal<Product> echProduct = new Cal<Product>
            {
                echo = new Product
                {
                    ID = 4,
                    Title = "MotorCycle",
                    Price = 500
                }
            };

            Action intDisplay = () => { Console.WriteLine($"Square of 9: {echInt.echo * echInt.echo}."); };
            Action productDisplay = () => { Console.WriteLine($"Price of {echProduct.echo.Title} is {echProduct.echo.Price}."); };

            echInt.Display(intDisplay);
            echInt.Display(productDisplay);
        }
    }
}
