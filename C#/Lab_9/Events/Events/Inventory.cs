using System;
using System.Collections.Generic;
using System.Text;

namespace Events
{
    class Inventory
    {
        public void Subscribe(Clock theClock)
        {
            theClock.secondChanged += new Clock.SecondChangeHandler(InventoryTimeHasChanged);
        }
        public void InventoryTimeHasChanged(object theClock, TimeInfoEventArgs arg)
        {
            Console.WriteLine("Inventory Current Time : {0}:{1}:{2}", arg.hour.ToString(), arg.minute.ToString(), arg.second.ToString());
        }
    }
}
