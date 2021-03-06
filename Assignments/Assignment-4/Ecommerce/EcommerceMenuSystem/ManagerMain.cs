using DatabaseManagement;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceMenuSystem
{
    class ManagerMain : Screen
    {
        private static MenuSystem menuSystem;
        public ManagerMain()
        {
            menuSystem = MenuSystem.GetInstance();
            noOfPaths = 5;
        }
        public override void Run()
        {
            Console.Clear();
            ProductDatabase productManager = ProductDatabase.GetInstance();
            Console.WriteLine(MenuSystem.Path);
            Console.WriteLine("1. Enter a product\n2. List all products\n3. Delete a product\n4. Search a product\n5. Return to previous menu");


            Console.WriteLine("Enter the choice: ");
            do
            {
                Int32.TryParse("" + Console.ReadKey(false).KeyChar, out choice);
                switch (choice)
                {
                    case 1: menuSystem.AddScreen(new AddProductMenu()); break;
                    case 2: menuSystem.AddScreen(new ListAllProductMenu()); break;
                    case 3: menuSystem.AddScreen(new DeleteProductMenu()); break;
                    case 4: menuSystem.AddScreen(new SearchProductMenu()); break;
                    case 5: return;
                    default: break;
                }
            } while (choice != noOfPaths);
        }

    }

    class AddProductMenu : Screen
    {
        public override void Run()
        {
            Console.Clear();
            Console.WriteLine(MenuSystem.Path);

            ProductDatabase productManager = ProductDatabase.GetInstance();
            Console.Write("Name: ");
            string name = Console.ReadLine();
            //name.IsMandatory(ref name);
            
            Console.Write("Description: ");
            string desc = Console.ReadLine();
            //desc.IsMandatory(ref desc);
            Console.Write("Manufacturer: ");
            string manufacturer = Console.ReadLine();
            //manufacturer.IsMandatory(ref manufacturer);
            double price = -1; Console.Write("Price: ");
            bool flag = Double.TryParse("" + Console.ReadLine(), out price);
            while (price < 0 || !flag)
            {
                Console.WriteLine("Price is mandatory, it cannot be empty. Please enter price again.");
                flag = Double.TryParse("" + Console.ReadLine(), out price);
            }

            Console.WriteLine();

            Dictionary<string, dynamic> product = new Dictionary<string, dynamic>()
            { 
                {"Name",name },
            
                {"Manufacturer", manufacturer},
                {"Description", desc },
                {"SellingPrice", price }

            };
            productManager.AddProduct(product);
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }
    }
    class ListAllProductMenu : Screen
    {
        public override void Run()
        {
            Console.Clear();
            Console.WriteLine(MenuSystem.Path);

            ProductDatabase productManager = ProductDatabase.GetInstance();
            productManager.PrintAll();
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }
    }
    class SearchProductMenu : Screen
    {
        public SearchProductMenu()
        {
            noOfPaths = 5;
        }
        public override void Run()
        {
            Console.Clear();
            Console.WriteLine(MenuSystem.Path);

            ProductDatabase productManager = ProductDatabase.GetInstance();
            Console.WriteLine("Search by:\n1. ID\n2. Name\n3. Selling Price greater than entered price\n5. Selling Price less than entered price\n6. Selling Price equal to entered price");
            Int32.TryParse("" + Console.ReadKey(true).KeyChar, out choice);

            switch (choice)
            {
                case 1:
                    int id = -1; Console.Write("ID: ");
                    Int32.TryParse("" + Console.ReadKey(false).KeyChar, out id);
                    Console.WriteLine(); var listFound = productManager.SearchItem(x => x.ID == id);
                    //Console.WriteLine(productManager.ToString(ref listFound));
                    break;
                case 2:
                    string name = ""; Console.Write("Name: ");
                    name = Console.ReadLine();
                    listFound = productManager.SearchItem(x => x.Name.ToLower().Equals(name.ToLower()) || x.Name.ToLower().Contains(name.ToLower()));
                    //Console.WriteLine(productManager.ToString(ref listFound)); 
                    break;
                
                case 3:
                    int price = -1; Console.Write("Price: ");
                    Int32.TryParse("" + Console.ReadKey(false).KeyChar, out price);
                    Console.WriteLine(); listFound = productManager.SearchItem(x => x.SellingPrice > price);
                    //Console.WriteLine(productManager.ToString(ref listFound)); 
                    break;


                case 4:
                    price = -1; Console.Write("Price: ");
                    Int32.TryParse("" + Console.ReadKey(false).KeyChar, out id);
                    Console.WriteLine(); listFound = productManager.SearchItem(x => x.SellingPrice < price);
                    //Console.WriteLine(productManager.ToString(ref listFound)); 
                    break;


                case 5:
                    price = -1; Console.Write("Price: ");
                    Int32.TryParse("" + Console.ReadKey(false).KeyChar, out id);
                    Console.WriteLine(); listFound = productManager.SearchItem(x => x.SellingPrice == price);
                    //Console.WriteLine(productManager.ToString(ref listFound)); 
                    break;

                default:
                    break;
            }
            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }
    }
    class DeleteProductMenu : Screen
    {
        public DeleteProductMenu()
        {
            noOfPaths = 2;
        }
        public override void Run()
        {
            Console.Clear();
            Console.WriteLine(MenuSystem.Path);

            ProductDatabase productManager = ProductDatabase.GetInstance();
            Console.WriteLine("Delete by:\n1. ID\n2. Cancel");
            Int32.TryParse("" + Console.ReadKey(true).KeyChar, out choice);

            switch (choice)
            {
                case 1:
                    int id = -1; Console.Write("ID: ");
                    Int32.TryParse("" + Console.ReadKey(false).KeyChar, out id);
                    productManager.DeleteItem(x => x.ID == id); break;
                case 2:
                    return;
                default:
                    break;
            }
            Console.WriteLine();

        }
    }
}
