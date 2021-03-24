using System;
using System.Collections.Generic;
using System.Text;

namespace Events
{
    class TimeInfoEventArgs : EventArgs
    {
        public int hour;
        public int minute;
        public int second;
        public TimeInfoEventArgs(int h, int m, int s)
        {
            this.hour = h;
            this.minute = m;
            this.second = s;
        }
    }
}
