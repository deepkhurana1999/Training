using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Events
{
    class Clock
    {
        private int hour;
        private int minute;
        private int second;
        public delegate void SecondChangeHandler(object obj, TimeInfoEventArgs args);
        public event SecondChangeHandler secondChanged;
        public void Run()
        {
            while(true)
            {
                Thread.Sleep(100);
                System.DateTime dt = System.DateTime.Now;
                if(dt.Second != second)
                {
                    TimeInfoEventArgs timeInfo = new TimeInfoEventArgs(dt.Hour, dt.Minute, dt.Second);
                    if(secondChanged != null)
                    {
                        secondChanged(this, timeInfo);
                    }
                }

                this.second = dt.Second;
                this.minute = dt.Minute;
                this.hour = dt.Hour;
            }
        }
    }
}
