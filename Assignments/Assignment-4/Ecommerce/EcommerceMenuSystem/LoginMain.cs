using EcommerceManagement;
using EcommerceUserSystem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceMenuSystem
{
    class LoginMain : Screen
    {
        private static MenuSystem menuSystem;
        public LoginMain()
        {
            menuSystem = MenuSystem.GetInstance();
        }
        public override void Run()
        {
            Console.Clear();
            
            
            Console.WriteLine(MenuSystem.Path);

            if(UserHolder.UserObject == null)
            {
                Console.Write("Enter User ID: ");
                string userId = Console.ReadLine();
                Console.Write("Enter Password: ");
                string userPassword = Console.ReadLine();
                UserHolder.UserObject = LoginManagement.Authenticate(userId, userPassword);
                while (UserHolder.UserObject == null)
                {
                    Console.WriteLine("Please enter valid User ID and Password");
                    Console.Write("ID:"); userId = Console.ReadLine();
                    Console.Write("Enter Password: "); userPassword = Console.ReadLine();
                    UserHolder.UserObject = LoginManagement.Authenticate(userId, userPassword);
                }
            }
            
            else
            {
                Console.WriteLine("You are already logged in");
                Console.WriteLine("\n1. Log-out\n2. Want to Continue");
                Int32.TryParse("" + Console.ReadKey(true).KeyChar, out choice);

                switch (choice)
                {
                    case 1: UserHolder.UserObject = null; return;
                    case 2: //menuSystem.AddScreen(new SignUpMain());
                        break;
                    default:
                        break;
                }
                Console.WriteLine();
            }
            if (UserHolder.UserObject.IsAdmin)
            {
                menuSystem.AddScreen(new ManagerMain());
            }
            else
            {
                menuSystem.AddScreen(new CustomerScreen());
            }
        }

    }
}
