using System;
using IItem;
using System.Collections.Generic;
using System.Text;
using System.Collections;

namespace DatabaseManagement
{
    /// <summary>
    /// Database Management Class to manage the product database.
    /// </summary>
    public class ProductDatabase : Management<Product>
    {
        
        static ProductDatabase productManagementObj;
        private ProductDatabase() {
            items = new List<Product>(); idItr = 0;
            items.Add(new Product(++idItr, "Prod-1", "1","abc", 10));
            items.Add(new Product(++idItr, "Prod-2", "2", "abc", 10));
            items.Add(new Product(++idItr, "Prod-3", "3", "abc", 10));
            items.Add(new Product(++idItr, "Prod-4", "4", "abc", 10));
        }
        public static ProductDatabase GetInstance()
        {
            if (productManagementObj == null)
                productManagementObj = new ProductDatabase();
            return productManagementObj;
        }
        public void AddProduct(Dictionary<string,dynamic> product)
        {
            this.AddItem(new Product(++idItr,product["Name"],product["Manufacturer"],product["Description"],product["SellingPrice"]));
        }
        
        public void PrintAll()
        {
            try
            {
                if (items.Count <= 0)
                    throw new Exception("List is empty.");

                Console.WriteLine("ID\t\tName\t\tManufacturer\tDescription\tSelling Price");

                items.ForEach(x => {
                    Console.WriteLine($"{x.ID}\t\t{x.Name}\t\t{x.Manufacturer}\t\t{x.Description}\t\t{x.SellingPrice}");
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public void UpdateProduct(int id, int quantity, double price)
        {
            try
            {
                var product = this.SearchItem(x => x.ID == id);
                if (product == null)
                { throw new Exception("Invalid ID"); }

                product.Quantity = quantity;
                product.SellingPrice = price;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
