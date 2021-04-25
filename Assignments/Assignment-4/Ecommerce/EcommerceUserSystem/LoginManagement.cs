using EcommerceManagement;
using IItem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceUserSystem
{
    public static class LoginManagement
    {
        private static UserManagement userManager;

        static LoginManagement()
        {
            userManager = UserManagement.GetInstance();
        }

        
        public static User Authenticate(String userID, string password)
        {
            UserHolder.UserObject = null;
            if (userManager.Contains(userID))
            {
                if (userManager.Users[(Int32)userManager.UserIDSet[userID]].Password.Equals(password))
                {
                    UserHolder.UserObject = userManager.Users[(Int32)userManager.UserIDSet[userID]];
                }
            }
            return UserHolder.UserObject;
        }
    }
}
