using System;

namespace Events
{
    class Program
    {
        static void Main(string[] args)
        {
            Clock c = new Clock();
            DisplayClock dc = new DisplayClock();
            dc.Subscribe(c);

            Inventory inv = new Inventory();
            inv.Subscribe(c);
            c.Run();

        }
    }
}
