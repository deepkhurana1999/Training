using System;
using System.Collections.Generic;
using System.Text;

namespace MessageDeliveryApp
{
    class NotificationEventArgs : EventArgs
    {
        public bool status;
        public NotificationEventArgs(bool incomingStatus)
        {
            this.status = incomingStatus;
        }
    }
}
