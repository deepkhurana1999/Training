using System;
using IItem;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DatabaseManagement
{
    /// <summary>
    /// Database Management Class to manage the user database.
    /// </summary>
    public class UserDatabase: Management<User>    {
        
        static Hashtable userIDSet;
        
        static UserDatabase userManagementObj;
        
        public List<User> Users { get { return items; } }
        public Hashtable UserIDSet { get { return userIDSet; } }
        private UserDatabase() {
            items = new List<User>(){new Customer("guest@taazaa.com", "asdf"), new Manager("admin@taazaa.com", "asdf") }; 
            userIDSet = new Hashtable();
            userIDSet.Add("guest@taazaa.com", 0);
            userIDSet.Add("admin@taazaa.com", 1);
        }
        public static UserDatabase GetInstance()
        {
            if (userManagementObj == null)
                userManagementObj = new UserDatabase();
            return userManagementObj;
        }
        
        public void PrintAll()
        {
            items.ForEach(x =>
            {
                Console.WriteLine($"{x.Name}");
            });
        }
        

        public bool Contains(string ID)
        {
            
            return userIDSet.Contains(ID);
        }
    }
}
