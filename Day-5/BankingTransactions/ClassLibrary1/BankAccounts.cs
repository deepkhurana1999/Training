using System;
using System.Collections.Generic;
using System.Text;

namespace BankingTransactions
{
    public class BankAccount
    {
        private static int initialAccountNumber = 123456789;
        List<Transaction> allTransactions = new List<Transaction>();
        public string Number { get; set; }
        public string Owner { get; set; }
        
        public decimal Balance
        {
            get
            {
                decimal balance = 0;
                foreach (var item in allTransactions)
                {
                    balance += item.Amount;
                }
                return balance;
            }
        }
        
        public BankAccount(string name, decimal initialBalance)
        {
            this.Number = initialAccountNumber.ToString();
            initialAccountNumber++;
            this.Owner = name;
            MakeDeposit(initialBalance, DateTime.Now, "Initial Balance");
        }
       
        public void MakeDeposit(decimal amount, DateTime date, string note)
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Invalid Deposit");
            }
            var deposit = new Transaction(amount, date, note);
            allTransactions.Add(deposit);
        }

        public void WithDraw(decimal amount, DateTime date, string note)
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(amount), "Invalid Deposit");
            }
            if (Balance - amount <= 0)
            {
                throw new InvalidOperationException("Invalid Withdraw");
            }
            var withdrawl = new Transaction(-amount, date, note);
            allTransactions.Add(withdrawl);
        }
        public string GetAccount()
        {
            var report = new System.Text.StringBuilder();
            decimal balance = 0;
            report.AppendLine("DATE\t\tAMOUNT\tBALANCE\tNOTE");
            foreach (var item in allTransactions)
            {
                balance += item.Amount;
                report.AppendLine($"{item.Date.ToShortDateString()}\t{item.Amount}\t{balance}\t{item.Note}");
            }
            return report.ToString();
        }
    }
}
