using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceMenuSystem
{
    public class MainScreen : Screen
    {
        private static MenuSystem menuSystem;

        public MainScreen()
        {
            menuSystem = MenuSystem.GetInstance();
            noOfPaths = 3;
        }
        public override void Run()
        {
            Console.Clear();
            Console.WriteLine(MenuSystem.Path);
            
            Console.WriteLine("1. Login\n2. Sign-up\n3. Exit the App!!");
            do
            {
                Int32.TryParse("" + Console.ReadKey(true).KeyChar, out choice);

                switch (choice)
                {
                    case 1: menuSystem.AddScreen(new LoginMain()); break;
                    case 2: //menuSystem.AddScreen(new SignUpMain());
                        Console.WriteLine("Under construction");
                        break;
                    case 3: return;
                    default:
                        break;
                }
            } while (choice != noOfPaths);
            Console.WriteLine();

        }


    }
}
