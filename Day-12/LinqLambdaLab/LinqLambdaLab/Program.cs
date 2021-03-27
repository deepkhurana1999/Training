using System;
using System.Linq;
using System.Collections.Generic;

namespace LinqLambdaLab
{
    //public delegate void DisplayInt<T>(T val);
    class Program
    {
        static void Main(string[] args)
        {
            List<Product> products = new List<Product>
            {
                new Product
                {
                    ID=1,
                    Title="Car",
                    Price=100
                },
                new Product
                {
                    ID = 2,
                    Title = "Pen",
                    Price = 200
                },
                new Product
                {
                    ID = 3,
                    Title = "Pencil",
                    Price=300
                },
                new Product
                {
                    ID = 4,
                    Title="MotorCycle",
                    Price=500
                }
            };


            List<Distributor> distributors = new List<Distributor>
            {
                new Distributor
                {
                    ID=1,
                    ProductID=4,
                    Name="ABC"
                },
                new Distributor
                {
                    ID=2,
                    ProductID=1,
                    Name="XYZ"
                }
            };


            Cal<int> echInt = new Cal<int>
            {
                echo = 9
            };

            Cal<Product> echProduct = new Cal<Product>
            {
                echo = new Product
                {
                    ID = 4,
                    Title="MotorCycle",
                    Price=500
                }
            };


            //products.Where((p,d) => p.ID>d.);
            //var mergeList = products.Zip<Product, Distributor, Distributor>(distributors, (p, d) => d);
            Action intDisplay = () => { Console.WriteLine(echInt.echo * echInt.echo); };
            Action productDisplay = () => { Console.WriteLine(echProduct.echo.Price); };

            echInt.Display(intDisplay);
            echInt.Display(productDisplay);
        }

        //void intDisplay(int val)
        //{
        //    Console.WriteLine(val * val);
        //}
    }
}
