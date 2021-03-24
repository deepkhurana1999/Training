using System;

namespace Delegates
{
    class Program
    {
        delegate void Del(string str);
        static void Main(string[] args)
        {
            Del d = new Del(Notify);
            d("India");
            abc(d);
            d = Greet;
            abc(d);
        }

        static void foo(int a)
        {
            Console.WriteLine("Int: " + a);
        }

        static void Notify(string str)
        {
            Console.WriteLine($"Notification received for: {str}");
        }

        static void Greet(string str)
        {
            Console.WriteLine($"Greet received for: {str}");
        }

        static void abc(Del d)
        {
            d("USA");
        }
    }
}
