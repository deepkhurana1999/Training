using EcommerceManagement;
using EcommerceUserSystem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceMenuSystem
{
    public static class ExtensionClass
    {
        public static CartManagement CartSystem(this IItem.User user)
        {
            return CartManagement.GetInstance(user);
        }
    }
}
