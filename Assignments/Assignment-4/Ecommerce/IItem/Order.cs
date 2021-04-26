using System;
using System.Collections.Generic;
using System.Text;

namespace IItem
{
    ///<summary>
    /// Represents a generalized type defination of all the orders that can be placed by the customer in the ecommerce-system.
    ///</summary>
    public class Order : IEcommerceItem
    {
        public int ID { get; }

        public string Name { get; }

        public Product ProductAssociatedWith { get; }
        public DateTime PlacedOn { get; }

        public Order(int id, string name, Product product, DateTime placedOn)
        {
            this.ID = id;
            this.Name = name;
            this.ProductAssociatedWith = product;
            this.PlacedOn = placedOn;
        }
    }
}
