using System;
using System.Collections.Generic;
using System.Text;

namespace Events
{
    class DisplayClock
    {
        public void Subscribe(Clock theClock)
        {
            theClock.secondChanged += new Clock.SecondChangeHandler(TimeHasChanged);
        }

        public void TimeHasChanged(Object theClock, TimeInfoEventArgs arg)
        {
            Console.WriteLine("Current Time : {0}:{1}:{2}", arg.hour.ToString(), arg.minute.ToString(), arg.second.ToString());
        }
    }
}
