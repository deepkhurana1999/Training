
using System;

namespace SimpleExpressionTree
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Linq.Expressions.Expression<Func<int, int>> expressionTree = x => x * x;
            Console.WriteLine("Expression Tree:");
            Console.WriteLine(expressionTree);
            var a = expressionTree.Compile();
            Console.WriteLine("Result: "+ a(8));
        }
    }
}
