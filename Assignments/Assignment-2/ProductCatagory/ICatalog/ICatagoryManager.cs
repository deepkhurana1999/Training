using System;
using System.Collections.Generic;
using System.Text;

namespace ICatalog
{
    public interface ICatagoryManager
    {
        void DeleteCatagory(Predicate<Catagory> query);
        List<Catagory> SearchCatagory(Predicate<Catagory> query);
    }
}
