using System;
using System.Collections.Generic;
using System.Text;

namespace IItem
{
    ///<summary>
    /// Represents a generalized type defination of objects that can be used as a base entity in ecommerce-system.
    ///</summary>
    public class Product
    {
        private int id;
        private string name;
        private string manufacturer;
        private string shortCode;
        private List<Category> categories;
        private double sellingPrice;
        private string description;
        private int quantity;

        public int ID { get { return id; } }
        public string Name { get { return name; } }
        public string Manufacturer { get { return manufacturer; } }
        public string ShortCode { get { return shortCode; } }
        public List<Category> Categories { get { return categories; } }
        public string Description { get { return description; } }
        public double SellingPrice { get { return sellingPrice; } }
        public int Quantity { get { return quantity; } }

        public Product(int id, string name, string manufacturer, string shortCode, List<Category> catagory, string desc, double sellPrice)
        {
            this.id = id;
            this.name = name;
            this.manufacturer = manufacturer;
            this.shortCode = shortCode;
            this.categories = catagory;
            this.description = desc;
            this.sellingPrice = sellPrice;
        }
    }
}
