using System;
using System.Collections.Generic;
using System.Text;

namespace IItem
{
    ///<summary>
    /// Represents a generalized type defination of all the products that provided by ecommerce-system.
    ///</summary>
    public class Product : IEcommerceItem
    {
        
        public string Manufacturer { get; }
        public string Description { get; }
        public double SellingPrice { get; set; }
        public int Quantity { get; set; }

        public int ID { get; }
        public string Name { get; }

        public Product(int id, string name, string manufacturer,string desc, double sellPrice)
        {
            this.ID = id;
            this.Name = name;
            this.Manufacturer = manufacturer;
            this.Description = desc;
            this.SellingPrice = sellPrice;
        }
    }

    
}
