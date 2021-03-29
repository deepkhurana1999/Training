using System;
using System.Collections.Generic;
using System.Text;

namespace GenericAndLINQ
{
    class Product
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }
        public override string ToString()
        {
            return $"{ID}\t{Title}\t{Price}";
        }
    }
}
