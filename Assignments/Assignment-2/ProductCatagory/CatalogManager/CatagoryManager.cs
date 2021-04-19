﻿using ICatalog;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace CatalogManager
{
    public class CatagoryManager: ICatagoryManager
    {
        private static int idItr = 1;
        private static List<Catagory> _catagories;
        private static CatagoryManager catagoryManagerObj;
        
        private CatagoryManager(){
            _catagories = new List<Catagory>();
            _catagories.Add(new Catagory(idItr++, "Cat-1", "1", "abc"));
            _catagories.Add(new Catagory(idItr++, "Cat-2", "2", "abc"));
            _catagories.Add(new Catagory(idItr++, "Cat-3", "3", "abc"));
            _catagories.Add(new Catagory(idItr++, "Cat-4", "4", "abc"));
        }

        public static List<Catagory> Catagories
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
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public void AddCatagory(string name, string shortCode, string desc)
        {
            _catagories.Add(new Catagory(idItr++, name, shortCode, desc));
        }
        public void DeleteCatagory(Predicate<Catagory> query)
        {
            _catagories.RemoveAll(query);
        }

        public List<Catagory> SearchCatagory(Predicate<Catagory> query)
        {
            var listFound = _catagories.FindAll(query);
            return listFound;
        }

        public static CatagoryManager getInstance()
        {
            if(catagoryManagerObj == null)
            {
                catagoryManagerObj = new CatagoryManager();
            }
            return catagoryManagerObj;
        }
        public string ToString(ref List<Catagory> catagories)
        {
            string result = "Name\tShort Code\tDescription\n";
            catagories.ForEach(x => result = result +($"{x.Name}\t\t{x.ShortCode}\t\t{x.Description}\n"));
            return result;
        }
    }
}
