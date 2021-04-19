using ICatalog;
using System;
using System.Collections.Generic;
using System.Text;

namespace CatalogManager
{
    public class ProductManager
    {
        private static int idItr = 1;
        private static List<Product> _products;
        private static ProductManager productManagerObj;
        public static HashSet<string> shortCodeSet;

        private ProductManager()
        {
            shortCodeSet = new HashSet<string>();
            _products = new List<Product>();
            _products.Add(new Product(idItr++, "Prod-1","Man-1", "1", new List<Catagory>() { CatagoryManager.Catagories[0] }, "abc",10));
            _products.Add(new Product(idItr++, "Prod-2", "Man-2", "2", new List<Catagory>() { CatagoryManager.Catagories[1] }, "abc", 10));
            _products.Add(new Product(idItr++, "Prod-3", "Man-3", "3", new List<Catagory>() { CatagoryManager.Catagories[2] }, "abc", 10));
            _products.Add(new Product(idItr++, "Prod-4", "Man-4", "4", new List<Catagory>() { CatagoryManager.Catagories[3] }, "abc", 10));
            
            shortCodeSet.Add("Man-1");
            shortCodeSet.Add("Man-2");
            shortCodeSet.Add("Man-3");
            shortCodeSet.Add("Man-4");
        }

        public List<Product> Catagories
        {
            get { return _products; }
        }

        public void PrintAllProducts()
        {
            try
            {
                if (_products.Count <= 0)
                    throw new Exception("List is empty.");

                string categoriesList = "";
                Console.WriteLine("Name\t\tManufacturer\tShort Code\tDescription\tSelling Price\t\tCatagories");
                _products.ForEach(x => { x.Categories.ForEach(i => { categoriesList = categoriesList + i.Name + ", "; });
                    Console.WriteLine($"{x.Name}\t\t{x.Manufacturer}\t\t{x.ShortCode}\t\t{x.Description}\t\t{x.SellingPrice}\t\t{categoriesList}");
                    categoriesList = "";
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public void AddProduct(string name, string manufacturer, string shortCode, List<Catagory> catagory, string desc, double sellPrice)
        {
            _products.Add(new Product(idItr++, name, manufacturer,shortCode,catagory, desc,sellPrice));
        }
        public void DeleteProduct(Predicate<Product> query)
        {
            _products.RemoveAll(query);
        }

        public List<Product> SearchProduct(Predicate<Product> query)
        {
            var listFound = _products.FindAll(query);
            return listFound;
        }

        public static ProductManager getInstance()
        {
            if (productManagerObj == null)
            {
                productManagerObj = new ProductManager();
            }
            return productManagerObj;
        }
        public string ToString(ref List<Product> products)
        {
            string result = "Name\t\tManufacturer\tShort Code\tDescription\tSelling Price\t\tCatagories";
            products.ForEach(x => result = result + (($"{x.Name}\t\t{x.Manufacturer}\t\t{x.ShortCode}\t\t{x.Description}\t\t{x.SellingPrice}")));

            string categoriesList = "";
            _products.ForEach(x => x.Categories.ForEach(i => {
                categoriesList = categoriesList + i.Name;
               result = result + ($"{x.Name}\t\t{x.Manufacturer}\t\t{x.ShortCode}\t\t{x.Description}\t\t{x.SellingPrice}\t\t{categoriesList}");
            }));
            return result;
        }
    }
}
