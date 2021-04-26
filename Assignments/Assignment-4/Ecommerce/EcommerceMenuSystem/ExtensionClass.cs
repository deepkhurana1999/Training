using EcommerceUserSystem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceMenuSystem
{
    public static class ExtensionClass
    {
        public static CartManagement CartSystem(this IItem.Customer user)
        {
            return CartManagement.GetInstance(user);
        }
        public static OrderManagement OrderSystem(this IItem.Customer user)
        {
            return OrderManagement.GetInstance(user);
        }
    }
}
