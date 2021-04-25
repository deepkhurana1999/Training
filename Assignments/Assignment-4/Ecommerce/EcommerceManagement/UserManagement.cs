using System;
using IItem;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace EcommerceManagement
{
    public class UserManagement: IManagement<User>    {
        static List<User> _users;
        static Hashtable userIDSet;
        
        static UserManagement userManagementObj;
        
        public List<User> Users { get { return _users; } }
        public Hashtable UserIDSet { get { return userIDSet; } }
        private UserManagement() {
            _users = new List<User>(){new User("deep.khurana@taazaa.com", "asdf", new List<Product>()) }; 
            userIDSet = new Hashtable();
            userIDSet.Add("deep.khurana@taazaa.com", 0);
        }
        public static UserManagement GetInstance()
        {
            if (userManagementObj == null)
                userManagementObj = new UserManagement();
            return userManagementObj;
        }
        
        public void PrintAll()
        {
            string userCart = "";
            _users.ForEach(x =>
            {
                x.Cart.ForEach(o => userCart = userCart + o.Name+", ");
                Console.WriteLine($"{x.Name}\t\t{userCart}");
                userCart = "";
            });
        }
        

        public bool Contains(string ID)
        {
            
            return userIDSet.Contains(ID);
        }
        public void AddItem(Dictionary<string, dynamic> item)
        {
            throw new NotImplementedException();
        }

        public List<User> SearchItem(Predicate<User> query)
        {
            var listFound = _users.FindAll(query);
            return listFound;
        }
        public void DeleteItem(Predicate<User> query)
        {
            throw new NotImplementedException();
        }
    }
}
