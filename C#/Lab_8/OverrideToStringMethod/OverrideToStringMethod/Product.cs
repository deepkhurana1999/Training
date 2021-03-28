using System;
using System.Collections.Generic;
using System.Text;

namespace OverrideToStringMethod
{
    public class Product
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string Title { get; set; }
        public override string ToString()
        {
            return $"ID: {Id}\nTitle: {Title}\nPrice: {Price}";
        }
    }
}