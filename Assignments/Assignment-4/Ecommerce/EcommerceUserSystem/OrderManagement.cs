using IItem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceUserSystem
{
    /// <summary>
    /// Class to manage the order place by the customer. 
    /// </summary>
    public class OrderManagement
    {
        static int idItr;
        static OrderManagement OrderManagementObj;
        static Customer _user;

        private OrderManagement() { idItr = 0; }
        public static OrderManagement GetInstance(Customer user)
        {
            _user = user;
            if (OrderManagementObj == null)
            {
                OrderManagementObj = new OrderManagement();
            }
            return OrderManagementObj;
        }



        public void AddToOrder()
        {
            _user.Cart.ForEach(product => _user.Orders.Add(new Order(++idItr,idItr.ToString(),product, DateTime.Now)));
            _user.Cart.RemoveRange(0, _user.Cart.Count);
        }
    }
}
