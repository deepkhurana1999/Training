using IItem;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace DatabaseManagement
{
    /// <summary>
    /// Generic Class use to manage a database.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class Management<T>:IManagement<T> where T: IEcommerceItem
    {
        protected static int idItr;
        protected static List<T> items;
        public void AddItem(T item)
        {
            items.Add(item);
        }

        
        public void DeleteItem(Predicate<T> query)
        {

            items.RemoveAll(query);
        }

        public T SearchItem(Predicate<T> predicate)
        {
            return items.Find(predicate);
        }
    }
}
