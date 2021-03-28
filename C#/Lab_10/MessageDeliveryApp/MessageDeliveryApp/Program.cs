using System;

namespace MessageDeliveryApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Manager manager = new Manager();
            Message message = new Message { Address = "NYC, USA", Content = "DOOMSDAY" };
            Agent agent = new Agent();

            //agent.notificationSubscribers += Initiater;
            manager.RequestDelivery(message, SendingTypes.SendByMail);
            //agent.notificationSubscribers += Initiater;
        }
        public static void Initiater(Object sender, NotificationEventArgs notificationInfo)
        {
            if (notificationInfo.status)
                Console.WriteLine("Emergency, IT IS NOT A DRIVE. EVACUATE");
            else
                Console.WriteLine($"It's a drive. DO NOT PANIC!");
        }

    }
}
