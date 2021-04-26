using System;
using System.Collections.Generic;
using System.Text;

namespace IItem
{
    public enum ProfileType
    {
        Customer,
        Manager, 
        Admin
    }
    ///<summary>
    /// Represents a generalized type defination of all the users that can access the ecommerce-system.
    ///</summary>
    public class User : IEcommerceItem
    {
        public int ID { get; }
        public string Name { get; }
        public string UserName { get; }
        public string Password { get; }

        public  ProfileType Profile { get; }

        
        public User(string id, string password, ProfileType profile)
        {
            this.UserName = id;
            this.Password = password;
            this.Profile = profile;
        }

        
    }

    ///<summary>
    /// Represents all the customer that can buy product from the ecommerce-system.
    ///</summary>
    public class Customer: User
    {

        public List<Order> Orders { get; }
        public List<Product> Cart { get; }

        public Customer(string id, string password):base(id,password, ProfileType.Customer)
        {
            this.Orders = new List<Order>();
            this.Cart = new List<Product>();
        }
    }

    ///<summary>
    /// Represents all the manager that can edit the product info in the ecommerce-system.
    ///</summary>
    public class Manager: User
    {
        public Manager(string id, string password) : base(id, password, ProfileType.Manager)
        { }
    }

    ///<summary>
    /// Represents all the admin that can edit any database in the ecommerce-system.
    ///</summary>
    public class Admin : User
    {
        public Admin(string id, string password) : base(id, password, ProfileType.Admin)
        { }
    }
}
