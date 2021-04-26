using DatabaseManagement;
using EcommerceUserSystem;
using System;

namespace EcommerceMenuSystem
{
    class CustomerScreen : Screen
    {
        private static MenuSystem menuSystem;
        public CustomerScreen()
        {
            menuSystem = MenuSystem.GetInstance();
            noOfPaths = 3;
        }
        public override void Run()
        {
            Console.Clear();
            Console.WriteLine(MenuSystem.Path);
            Console.WriteLine("1. Cart\n2. Checkout\n3. Log-out");
            
            Console.WriteLine("Enter the choice: ");
            do
            {
                Int32.TryParse("" + Console.ReadKey(false).KeyChar, out choice);
                switch (choice)
                {
                    case 1: menuSystem.AddScreen(new CartMain()); break;
                    case 2: menuSystem.AddScreen(new CheckoutMenu()); break;
                    case 3: return;
                    default: break;
                }
            } while (choice != noOfPaths);
        }
    }

    class CartMain : Screen
    {
        private static MenuSystem menuSystem;
        
        public CartMain()
        {
            menuSystem = MenuSystem.GetInstance();
            noOfPaths = 3;
        }

        
        public override void Run()
        {
            Console.Clear();
            UserDatabase userManager = UserDatabase.GetInstance();
            ProductDatabase productManager = ProductDatabase.GetInstance();
            Console.WriteLine(MenuSystem.Path);
            Console.WriteLine("1. Add To Cart\n2. Delete From Cart\n3. Return to previous screen");

            Console.WriteLine("Enter the choice: ");
            do
            {
                Int32.TryParse("" + Console.ReadKey(false).KeyChar, out choice);
                switch (choice)
                {
                    case 1: menuSystem.AddScreen(new AddToCartMenu()); break;
                    case 2: menuSystem.AddScreen(new DeleteFromCartMenu()); break;
                    case 3: return;
                    default: break;
                }
            } while (choice != noOfPaths);
        }
    }
    class AddToCartMenu:Screen
    {
        public override void Run()
        {
            Console.Clear();
            UserDatabase userManager = UserDatabase.GetInstance();
            ProductDatabase productManager = ProductDatabase.GetInstance();
            

            Console.WriteLine(MenuSystem.Path);
            Console.WriteLine("List of Products:");

            productManager.PrintAll();

            
            int id;
            
            do
            {
                Console.WriteLine("\nEnter the ID of the product to add to the cart:");

                Int32.TryParse("" + Console.ReadKey(false).KeyChar, out id);
                
                UserManagement.GetAsCustomer().CartSystem().AddToCart(id);
              
                Console.WriteLine("\nWant to add more, press 1 otherwise 0 or any other key:");
                Int32.TryParse("" + Console.ReadKey(false).KeyChar, out choice);
            } while (choice != 0);

            Console.WriteLine("Press any key to exit..");
            Console.ReadKey();
        }

    }

    class DeleteFromCartMenu : Screen
    {
        public override void Run()
        {
            Console.Clear();
            UserDatabase userManager = UserDatabase.GetInstance();
            ProductDatabase productManager = ProductDatabase.GetInstance();
            Console.WriteLine(MenuSystem.Path);
            Console.WriteLine("Items in your cart:");

            UserManagement.GetAsCustomer().CartSystem().PrintAll();

            int sno;

            do
            {
                Console.WriteLine("\nEnter the serial number of the product to delete from the cart:");
                Int32.TryParse("" + Console.ReadKey(false).KeyChar, out sno);
                if(!UserManagement.GetAsCustomer().CartSystem().IsCartEmpty())
                {
                    try
                    {
                        UserManagement.GetAsCustomer().CartSystem().DeleteFromCart(sno);
                    }
                    catch(Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }
                }
                Console.WriteLine("\nWant to delete more or try again, press 1 otherwise 0 or any other key:");
                Int32.TryParse("" + Console.ReadKey(false).KeyChar, out choice);
            } while (choice != 0);
        }

    }

    class CheckoutMenu : Screen
    {
        public CheckoutMenu()
        {
            noOfPaths = 2;
        }
        public override void Run()
        {
            Console.Clear();
            Console.WriteLine(MenuSystem.Path);
            Console.WriteLine("Items in your cart:");

            UserManagement.GetAsCustomer().CartSystem().PrintAll();

            Console.WriteLine("1. Confirm\n2. Cancel");

            Console.WriteLine("Enter the choice: ");
            do
            {
                
                Int32.TryParse("" + Console.ReadKey(false).KeyChar, out choice);
                switch (choice)
                {
                    case 1: UserManagement.GetAsCustomer().OrderSystem().AddToOrder(); return;
                    case 2:  return;
                    default: break;
                }
            } while (choice != noOfPaths);
            Console.Clear();
            
        }
    }
}
