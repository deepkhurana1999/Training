using System;
using System.Linq;
using System.Collections.Generic;

namespace GenericAndLINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Generic<string>> stringList = new List<Generic<string>>();
            stringList.Add(new Generic<string> { member = "Smartphone" });
            stringList.Add(new Generic<string> { member = "CPU" });
            stringList.Add(new Generic<string> { member = "Monitor" });
            stringList.Add(new Generic<string> { member = "Windows 10" });
            stringList.Add(new Generic<string> { member = "C#" });


            Console.WriteLine("Result using Lambda Expression:");
            var x = stringList.Where((g) => g.member.Length > 4).Select((g) => g);
            x.ToList().ForEach((i) => i.Print());
            
            Console.WriteLine("\nResult using LINQ:");
            var y = from g in stringList where g.member.Length > 4 select g;
            y.ToList().ForEach((i) => i.Print());
            Console.WriteLine("\n");

            List<Generic<Product>> productList = new List<Generic<Product>>();
            productList.Add(new Generic<Product> { member = new Product { ID = 1, Title = "Pen", Price = 10 } });
            productList.Add(new Generic<Product> { member = new Product { ID = 2, Title = "Pencil", Price = 5 } });
            productList.Add(new Generic<Product> { member = new Product { ID = 3, Title = "Bat", Price = 4500 } });
            productList.Add(new Generic<Product> { member = new Product { ID = 4, Title = "Ball", Price = 50 } });
            productList.Add(new Generic<Product> { member = new Product { ID = 5, Title = "Ruler", Price = 20 } });

            Console.WriteLine("List of products where price is smaller than 200:");
            Console.WriteLine("using Lambda Expression:\nID\tTitle\tPrice");
            var p = productList.Where((product) => product.member.Price < 200).Select((product) => product);
            p.ToList().ForEach((i) => i.Print());
            
            Console.WriteLine("\nusing LINQ:");
            var q = from product in productList where product.member.Price < 200 select product;
            q.ToList().ForEach((i) => i.Print());
            Console.WriteLine("\n");
        }
    }
}
