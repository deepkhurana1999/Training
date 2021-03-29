using System;
using System.Collections.Generic;
using System.Text;

namespace ProductGenerics
{
    public class Product
    {
        private string title;
        private int id;
        private float price;
        private string description;
        private int customerRating;

        
        public Product(int id, string title, float price, string description, int ratings)
        {
            this.id = id;
            this.title = title;
            this.price = price;
            this.description = description;
            this.customerRating = ratings;
        }

        public string Title { get => title;  }
        public int ID { get => id; }
        public float Price { get => price; }
        public int CustomerRating { get => customerRating; }
        public string Description { get => description; }

        public override string ToString()
        {
            return $"{Title} is expensive. But {Description}. You should buy it, it's customer rating is {CustomerRating}.";
        }

    }
}
