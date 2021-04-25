using EcommerceMenuSystem;
using System;

namespace Ecommerce
{
    class Program
    {
        static void Main(string[] args)
        {
            MenuSystem menuSystem = MenuSystem.GetInstance();
            menuSystem.AddScreen(new MainScreen());
        }
    }
}
