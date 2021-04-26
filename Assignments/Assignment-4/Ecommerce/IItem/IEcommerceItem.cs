using System;
using System.Collections.Generic;
using System.Text;

namespace IItem
{
    /// <summary>
    /// Represents a generalized type defination of objects that can be used as a base entity in ecommerce-system.
    /// </summary>
    public interface IEcommerceItem
    {
        public int ID { get; }
        public string Name { get; }
    }
}
