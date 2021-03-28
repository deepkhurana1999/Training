using System;
using System.Collections.Generic;
using System.Text;

namespace MessageDeliveryApp
{
    class Agent
    {
        public delegate void NotificationHandler(object sender, NotificationEventArgs notificationInfo);
        public event NotificationHandler notificationSubscribers;
        public delegate bool taskSendDelegate(Message message);
        private bool isTaskCompleted = true;

        public void DoTask(taskSendDelegate task, Message message)
        {
            NotificationEventArgs notificationInfo = new NotificationEventArgs(isTaskCompleted);
            if(isTaskCompleted && notificationSubscribers != null)
            {
                Console.WriteLine("Start");
                notificationSubscribers(this, notificationInfo);
            }

            isTaskCompleted = true;

            if(isTaskCompleted)
            {
                var status = task(message);
                if(notificationSubscribers != null)
                {
                    Console.WriteLine("Ending");
                    //notificationSubscribers(this, notificationInfo);
                }
            }
        }
    }
}
