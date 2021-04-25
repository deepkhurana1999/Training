using System;
using IItem;
using System.Collections.Generic;
using System.Text;
using System.Collections;

namespace EcommerceManagement
{
    public class ProductManagement : IManagement<Product>
    {
        static int idItr;
        private static List<Product> _products;
        static ProductManagement productManagementObj;
        private ProductManagement() { _products = new List<Product>(); idItr = 0;
            _products = new List<Product>();
            _products.Add(new Product(++idItr, "Prod-1", "Man-1", "1", 
                new List<Category>() { CategoryManager.Catagories[0] }, 
                "abc", 10));
            _products.Add(new Product(++idItr, "Prod-2", "Man-2", "2", new List<Category>() { CategoryManager.Catagories[1] }, "abc", 10));
            _products.Add(new Product(++idItr, "Prod-3", "Man-3", "3", new List<Category>() { CategoryManager.Catagories[2] }, "abc", 10));
            _products.Add(new Product(++idItr, "Prod-4", "Man-4", "4", new List<Category>() { CategoryManager.Catagories[3] }, "abc", 10));

        }
        public static ProductManagement GetInstance()
        {
            if (productManagementObj == null)
                productManagementObj = new ProductManagement();
            return productManagementObj;
        }
        public void AddItem(Dictionary<string,dynamic> product)
        {
            _products.Add(new Product(++idItr,product["Name"],product["Manufacturer"], product["ShortCode"],product["Categories"], product["Description"],product["SellingPrice"]));
        }
        
        public void PrintAll()
        {
            try
            {
                if (_products.Count <= 0)
                    throw new Exception("List is empty.");

                string categoriesList = "";
                Console.WriteLine("ID\t\tName\t\tManufacturer\tShort Code\tDescription\tSelling Price\t\tCatagories");

                _products.ForEach(x => {
                    x.Categories.ForEach(i => { categoriesList = categoriesList + i.Name + ", "; });
                    Console.WriteLine($"{x.ID}\t\t{x.Name}\t\t{x.Manufacturer}\t\t{x.ShortCode}\t\t{x.Description}\t\t{x.SellingPrice}\t\t{categoriesList}");
                    categoriesList = "";
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        

        public void DeleteItem(Predicate<Product> query)
        {
            _products.RemoveAll(query);
        }

        public Product SearchItem(Predicate<Product> query)
        {
            var itemFound = _products.Find(query);
            return itemFound;
        }
    }
}
