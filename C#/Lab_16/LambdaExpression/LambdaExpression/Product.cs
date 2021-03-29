using System;
using System.Collections.Generic;
using System.Text;

namespace LambdaExpression
{
    class Product
    {
        public int ID { get; set; }
        public int Price { get; set; }
        public string Owner { get; set; }

        public override string ToString()
        {
            return $"ID: {ID}\n Price: {Price}\n Owner: {Owner}";
        }
    }
}
