using DatabaseManagement;
using IItem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceUserSystem
{

    /// <summary>
    /// Class to manage the cart of the user.
    /// </summary>
    public class CartManagement
    {
        static CartManagement cartManagementObj;
        static Customer _user;
        
        private CartManagement() { }
        public static CartManagement GetInstance(Customer user)
        {
            _user = user;
            if (cartManagementObj == null)
            {
                cartManagementObj = new CartManagement();
            }
            return cartManagementObj;
        }

        public double CalculateTotalPrice()
        {
            double price = 0;
            _user.Cart.ForEach(x => price = price + x.SellingPrice);
            return price;
        }

        public void PrintAll()
        {
            Console.WriteLine("S.No\t\tName");
            int i = 0;
            _user.Cart.ForEach(x => { Console.WriteLine($"{++i}\t\t{x.Name}"); });

        }

        public void AddToCart(int id)
        {
            _user.Cart.Add(ProductDatabase.GetInstance().SearchItem(x => x.ID == id));
        }

        public bool IsCartEmpty()
        {
            return _user.Cart.Count == 0 ? true : false;
        }

        public void DeleteFromCart(int index)
        {
            try
            {
                if (_user.Cart.Count >= index)
                    _user.Cart.RemoveAt(index);
                else
                    throw new Exception("Invalid Serial Number");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
