using System;
using System.Collections.Generic;
using System.Text;

namespace IItem
{
    public interface IManagement<T>
    {
        void AddItem(Dictionary<string, dynamic> item);
        void DeleteItem(Predicate<T> query);
    }
}
