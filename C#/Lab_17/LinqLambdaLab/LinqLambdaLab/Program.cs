using System;
using System.Linq;
using System.Collections.Generic;

namespace LinqLambdaLab
{
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
                    ProductID=1,
                    Name="ABC"
                },
                new Distributor
                {
                    ID=2,
                    ProductID=2,
                    Name="XYZ"
                },
                new Distributor
                {
                    ID=3,
                    ProductID=3,
                    Name="JHL"
                },
                new Distributor
                {
                    ID=4,
                    ProductID=4,
                    Name="QWE"
                }
            };

            Console.WriteLine($"ProductID\tDistributor Name");
            var mergeList = products.Zip(distributors, (p, d) => new { ProductID=p.ID, DistributorName=d.Name });
            mergeList.ToList().ForEach(x => Console.WriteLine($"{x.ProductID}\t\t{x.DistributorName}"));
            
        }

    }
}
