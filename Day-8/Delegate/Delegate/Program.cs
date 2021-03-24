using System;

namespace Delegate
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");

            BookDB shelf = new BookDB();
            addBooksToShelf(shelf);

            ProgressBookCallbackDelegate del = new ProgressBookCallbackDelegate(PrintBooks);
            
            Console.WriteLine("\nPrinting Books: ");
            shelf.ProcessPaperbackBooks(del);
            
            Console.WriteLine("\nSelling Books: ");
            shelf.ProcessPaperbackBooks(SellBooks);

            del += RentingBooks;
            Console.WriteLine("\nRenting Books: ");
            shelf.ProcessPaperbackBooks(del);
        }

        static void addBooksToShelf(BookDB shelf)
        {
            shelf.AddBook("Head First C#", "Andrew Stellman and Jill Alison Hart", 1700, true);
            shelf.AddBook("C# in Depth", "Jon Skeet", 5700, true);
            shelf.AddBook("CLR VIA C#", "Jeffrey Richter", 2400, true);
            shelf.AddBook("C# 7.0 in a Nutshell: The Definitive Reference", "Joseph Albahari", 3300, true);
        }
        static void PrintBooks(Book b)
        {
            Console.WriteLine($"{b.Title}");
        }
        static void SellBooks(Book b)
        {
            Console.WriteLine($"{b.Title} Selling at: {b.Price}");
        }
        static void RentingBooks(Book b)
        {
            Console.WriteLine($"{b.Title} Renting at: {b.Price}");
        }
    }
}
