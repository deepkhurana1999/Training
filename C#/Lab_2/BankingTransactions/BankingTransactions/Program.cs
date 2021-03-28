using System;

namespace BankingTransactions
{
    class Program
    {
        static void Main(string[] args)
        {
            var customerAccount = new BankAccount("Customer Name", 20000);
            customerAccount.MakeDeposit(500, DateTime.Now, "Initial Deposit");
            try
            {
                customerAccount.WithDraw(50, DateTime.Now, "1st Withdraw");
                Console.WriteLine(customerAccount.GetAccount());
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }




            customerAccount = new BankAccount("Customer", 2000);
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
