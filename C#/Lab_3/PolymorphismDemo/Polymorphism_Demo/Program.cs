using System;

namespace Polymorphism_Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person("Foo", 29);
            Console.WriteLine(person);

            Parent_A _A = new Parent_A();
            _A.Display();

            Child_B _B = new Child_B();
            _B.Display();

            Parent_A _A1 = new Child_B();
            _A1.Display();
        }
    }
}
