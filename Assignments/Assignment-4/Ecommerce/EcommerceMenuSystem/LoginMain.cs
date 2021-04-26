using EcommerceUserSystem;
using IItem;
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

            if(UserManagement.CurrentUser == null)
            {
                Console.Write("Enter User ID: ");
                string userId = Console.ReadLine();
                Console.Write("Enter Password: ");
                string userPassword = Console.ReadLine();
                UserManagement.CurrentUser = UserManagement.Authenticate(userId, userPassword);
                while (UserManagement.CurrentUser == null)
                {
                    Console.WriteLine("Please enter valid User ID and Password");
                    Console.Write("ID:"); userId = Console.ReadLine();
                    Console.Write("Enter Password: "); userPassword = Console.ReadLine();
                    UserManagement.CurrentUser = UserManagement.Authenticate(userId, userPassword);
                }
            }
            
            else
            {
                Console.WriteLine("You are already logged in");
                Console.WriteLine("\n1. Log-out\n2. Want to Continue");
                Int32.TryParse("" + Console.ReadKey(true).KeyChar, out choice);

                switch (choice)
                {
                    case 1: UserManagement.CurrentUser = null; return;
                    case 2: //menuSystem.AddScreen(new SignUpMain());
                        break;
                    default:
                        break;
                }
                Console.WriteLine();
            }
            if (UserManagement.ProfileType() == ProfileType.Manager)
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
