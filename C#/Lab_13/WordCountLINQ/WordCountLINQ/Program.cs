using System;
using System.Linq;

namespace WordCountLINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = "C# (pronounced see sharp, like the musical note C#, but written with the number sign) is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. C# was developed around 2000 by Microsoft as part of its .NET initiative and later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO (ISO/IEC 23270) in 2003. C# was designed by Anders Hejlsberg, and its development team is currently led by Mads Torgersen, being one of the programming languages designed for the Common Language Infrastructure (CLI). The most recent version of the C# is 9.0, which was released in 2020 in .NET 5.0 and included in Visual Studio 2019 version 16.8. Since the release of C# 2.0 in November 2005, the C# and Java languages have evolved on increasingly divergent trajectories, becoming two quite different languages. One of the first major departures came with the addition of generics to both languages, with vastly different implementations. C# makes use of reification to provide  generic objects that can be used like any other class, with code generation performed at class-load time.[27] Furthermore, C# has added several major features to accommodate functional-style programming, culminating in the LINQ extensions released with C# 3.0 and its supporting framework of lambda expressions, extension methods, and anonymous types.[28] These features enable C# programmers to use functional programming techniques, such as closures, when it is advantageous to their application. The LINQ extensions and the functional imports help developers reduce the amount of boilerplate code that is included in common tasks like querying a database, parsing an xml file, or searching through a data structure, shifting the emphasis onto the actual program logic to help improve readability and maintainability. C# used to have a mascot called Andy (named after Anders Hejlsberg). It was retired on January 29, 2004. C# was originally submitted to the ISO subcommittee JTC 1/SC 22 for review,[31] under ISO/IEC 23270:2003,[32] was withdrawn and was then approved under ISO/IEC 23270:2006.[33] The 23270:2006 is withdrawn under 23270:2018 and approved with this version.[34]";
            char[] delimiterChars = { ' ', ',', '.', ':'};
            var strArray = str.Split(delimiterChars);

            var result = strArray.Where(x => x.Equals("C#")).Count();
            Console.Write($"{str.Substring(0,510)}...\n\nC# found {result} ");

            var resultLinq = (from x in strArray where x == "C#" select x).Count();
            Console.WriteLine($"and {resultLinq} times using Lambda Expression and LINQ, respectively in the above paragraph.");
            //Console.ReadKey();
        }
    }
}
