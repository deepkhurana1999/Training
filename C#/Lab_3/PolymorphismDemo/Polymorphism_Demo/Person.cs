using System;
using System.Collections.Generic;
using System.Text;

namespace Polymorphism_Demo
{
    class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public Person(String name, int age)
        {
            Name = name;
            Age = age;
        }
        public override string ToString()
        {
            return $"{Name} is {Age} years old.";
        }
    }
}
