using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Delegate
{
    public delegate void ProgressBookCallbackDelegate(Book book);
    public class BookDB
    {
        ArrayList list = new ArrayList();

        public void AddBook(string title, string author, decimal price, bool paperback)
        {
            list.Add(new Book
            {
                Title = title,
                Author = author,
                Price = price,
                Paperback = paperback
            });
        }

        public void ProcessPaperbackBooks(ProgressBookCallbackDelegate progressBook)
        {
            foreach(Book b in list)
            {
                if (b.Paperback)
                    progressBook(b);
            }
        }
    }
}
