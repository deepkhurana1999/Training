using core;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace infrastructure
{
    public class Inventory
    {
        static ArrayList productList = new ArrayList();

        static Inventory()
        {

            productList.Add(new Product { Title = "Pen", Price = 5, Color = "Blue" });
            productList.Add(new Product { Title = "Pencil", Price = 2, Color = "Orange" });
            productList.Add(new Product { Title = "Ball", Price = 10, Color = "Black" });
            productList.Add(new Product { Title = "Book", Price = 20, Color = "Cyan" });
            productList.Add(new Product { Title = "Bat", Price = 10, Color = "White" });
        }

        public void AddProduct(Product prod)
        {
            productList.Add(prod);
        }
        public void AddProduct(String title, String color, int price)
        {
            productList.Add(new Product { Title = title, Price = price, Color = color });
        }
        public override string ToString()
        {
            string str = "Title\t\t"+"Price\t\t"+"Color\n";
            foreach(Product prod in productList)
            {
                str += prod.Title+"\t\t" + prod.Price+"\t\t" + prod.Color+"\n";
            }

            return str;
        }
    }
}
