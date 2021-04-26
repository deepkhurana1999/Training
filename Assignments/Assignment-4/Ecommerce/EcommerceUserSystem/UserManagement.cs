using DatabaseManagement;

using IItem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceUserSystem
{
    /// <summary>
    /// Class to manage the user system of the application.
    /// </summary>
    public static class UserManagement
    {
        private static UserDatabase userDBManager;

        public static User CurrentUser { get { return UserHolder.UserObject; } set { UserHolder.UserObject = value; } }
        static UserManagement()
        {
            userDBManager = UserDatabase.GetInstance();
        }

        
        public static User Authenticate(String userID, string password)
        {
            UserHolder.UserObject = null;
            if (userDBManager.Contains(userID))
            {
                if (userDBManager.Users[(Int32)userDBManager.UserIDSet[userID]].Password.Equals(password))
                {
                    UserHolder.UserObject = userDBManager.Users[(Int32)userDBManager.UserIDSet[userID]];
                }
            }
            return UserHolder.UserObject;
        }

        public static ProfileType ProfileType()
        {
            return UserHolder.UserObject.Profile;
        }

        public static Customer GetAsCustomer()
        {
            return (Customer)CurrentUser;
        }

    }
}
