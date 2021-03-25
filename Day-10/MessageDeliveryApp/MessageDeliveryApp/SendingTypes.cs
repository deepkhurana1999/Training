using System;
using System.Collections.Generic;
using System.Text;

namespace MessageDeliveryApp
{
     static class SendingTypes
    {
        public static bool SendByMail(Message message)
        {
            Console.WriteLine($"The message \"{message.Content}\" sent to {message.Address} via Mail.");
            return true;
        }
        public static bool SendByCar(Message message)
        {
            Console.WriteLine($"The message \"{message.Content}\" sent to {message.Address} by Car.");
            return true;
        }
        public static bool SendByShip(Message message)
        {
            Console.WriteLine($"{message.Content} could not deliverd to {message.Content} by Ship");
            return false;
        }
    }
}
