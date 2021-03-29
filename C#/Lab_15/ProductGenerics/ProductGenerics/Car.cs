using System;
using System.Collections.Generic;
using System.Text;

namespace ProductGenerics
{
    class Car : Product
    {
        public Car(int id, string title, float price, string description, int ratings) :base(id, title,price,description,ratings)
        {
            
        }
    }
}
