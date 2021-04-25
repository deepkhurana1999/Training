using System;
using System.Collections.Generic;
using System.Text;

namespace IItem
{
    public class User
    {
        private string name;
        private string user_id;
        private string password;
        private List<Product> orders;
        private List<Product> cart;

        private bool admin;

        public User(string id, string password, List<Product> cart)
        {
            this.user_id = id;
            this.password = password;
            this.cart = cart;
            this.orders = new List<Product>();
        }
        public string Name { get { return name; } }
        public string UserId { get { return user_id; } }
        public string Password { get { return password; } }
        public bool IsAdmin { get { return admin; } }
        
        public List<Product> Orders
        {
            get
            {
                if (!this.admin)
                {
                    return orders;
                }
                else
                    return null;
            }
        }
        public List<Product> Cart
        {
            get
            {
                if (!this.admin)
                {
                    return cart;
                }
                else
                    return null;
            }
        }
    }
}
