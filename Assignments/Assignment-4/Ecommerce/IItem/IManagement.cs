using System;
using System.Collections.Generic;
using System.Text;

namespace IItem
{
    public interface IManagement<T>
    {
        void AddItem(T item);
        void DeleteItem(Predicate<T> query);
        public T SearchItem(Predicate<T> predicate);
    }
}
