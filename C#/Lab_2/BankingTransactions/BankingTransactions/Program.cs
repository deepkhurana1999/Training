using System;

namespace BankingTransactions
{
    class Program
    {
        static void Main(string[] args)
        {
            var deepAccount = new BankAccount("Customer Name", 20000);
            deepAccount.MakeDeposit(500, DateTime.Now, "Initial Deposit");
            try
            {
                deepAccount.WithDraw(50, DateTime.Now, "1st Withdraw");
                Console.WriteLine(deepAccount.GetAccount());
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }




            var customerAccount = new BankAccount("Customer", 2000);
            customerAccount.MakeDeposit(1000, DateTime.Now, "Initial Deposit");
            try
            {
                customerAccount.WithDraw(100, DateTime.Now, "Final Withdraw");
                Console.WriteLine(customerAccount.GetAccount());
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }
    }
}
