using System;
using System.Collections.Generic;
using System.Text;

namespace MessageDeliveryApp
{
    class Manager
    {
        public delegate bool sendMessageDelegate(Message m);
        private Agent.taskSendDelegate sendingTask;
        Agent agent;
        public Manager()
        {
            agent = new Agent();
            
        }

        public void RequestDelivery(Message message, sendMessageDelegate waysOfSending)
        {
            sendingTask = new Agent.taskSendDelegate(waysOfSending);
            agent.DoTask(sendingTask, message);
        }
        
    }
}
