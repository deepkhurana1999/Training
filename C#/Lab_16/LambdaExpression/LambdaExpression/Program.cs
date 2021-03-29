
using System;
using System.Collections.Generic;
using System.Linq;

namespace LambdaExpression
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Product> productList = new List<Product>{ 
                new Product { ID=1, Price=300, Owner="foo"}, 
                new Product { ID = 2, Price=500, Owner="doo"},
                new Product { ID = 5, Price=700, Owner="koo"},
                new Product { ID = 6, Price=600, Owner="woo"},
                new Product { ID = 3, Price = 100, Owner = "too" },
                new Product { ID = 4, Price=150, Owner="voo"} 
            };

            Console.WriteLine("Result Generated using Lambda Expressions:");
            var listFound = productList.Where(x => x.Price > 300).Select(p => p.Owner).ToList();
            listFound.ForEach(x => Console.WriteLine(x));
            Console.WriteLine("\nResult generated using Linq query: ");
            
            var linqListFound = from product in productList where product.Price > 300 select product.Owner;
            linqListFound.ToList().ForEach(x => Console.WriteLine(x));
            
            Console.WriteLine("Selecting two fields");
            var listFound1 = productList.Where(x => x.Price > 300).Select(p => (p.ID, p.Owner )).ToList();
            listFound1.ForEach(x => Console.WriteLine(x));
            
            Console.WriteLine("Using new keyword i.e creating new object: ");
            var listFound2 = productList.Where(x => x.Price > 300 && x.ID == 6).Select(p => new { p.ID, p.Owner }).ToList();
            listFound2.ForEach(x => Console.WriteLine(x));
        }
    }
}
