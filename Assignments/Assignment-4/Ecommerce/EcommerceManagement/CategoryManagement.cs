using IItem;
using System;
using System.Collections.Generic;
using System.Text;

namespace EcommerceManagement
{
    public class CategoryManager 
    {
        private static int idItr = 1;
        private static List<Category> _catagories;
        private static CategoryManager CategoryManagerObj;
        public static HashSet<string> shortCodeSet;

        private CategoryManager()
        {
            shortCodeSet = new HashSet<string>();
            _catagories = new List<Category>();
            _catagories.Add(new Category(idItr++, "Cat-1", "1", "abc"));
            _catagories.Add(new Category(idItr++, "Cat-2", "2", "abc"));
            _catagories.Add(new Category(idItr++, "Cat-3", "3", "abc"));
            _catagories.Add(new Category(idItr++, "Cat-4", "4", "abc"));

            shortCodeSet.Add("Cat-1");
            shortCodeSet.Add("Cat-2");
            shortCodeSet.Add("Cat-3");
            shortCodeSet.Add("Cat-4");
        }

        public static List<Category> Catagories
        {
            get { return _catagories; }
        }

        public void PrintAllCatagories()
        {
            try
            {
                if (_catagories.Count <= 0)
                    throw new Exception("List is empty.");
                Console.WriteLine("Name\tShort Code\tDescription");
                _catagories.ForEach(x => Console.WriteLine($"{x.Name}\t\t{x.ShortCode}\t\t{x.Description}"));
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public void AddCategory(string name, string shortCode, string desc)
        {
            _catagories.Add(new Category(idItr++, name, shortCode, desc));
        }
        public void DeleteCategory(Predicate<Category> query)
        {
            _catagories.RemoveAll(query);
        }

        public List<Category> SearchCategory(Predicate<Category> query)
        {
            var listFound = _catagories.FindAll(query);
            return listFound;
        }

        public static CategoryManager getInstance()
        {
            if (CategoryManagerObj == null)
            {
                CategoryManagerObj = new CategoryManager();
            }
            return CategoryManagerObj;
        }
        public string ToString(ref List<Category> catagories)
        {
            string result = "Name\tShort Code\tDescription\n";
            catagories.ForEach(x => result = result + ($"{x.Name}\t\t{x.ShortCode}\t\t{x.Description}\n"));
            return result;
        }
    }
}
