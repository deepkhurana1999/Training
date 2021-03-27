using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace CalculatorTest
{
    [TestClass]
    public class CalculatorFunctionalityTest
    {
        public ICalculator calculator;
        [TestInitialize]
        public void TestSetup()
        {
            calculator = new Calculator();
        }
        [TestMethod]
        public void ShouldAddTwoNumbers()
        {
        }
        [TestMethod]
        public void ShouldReturnFirstNumberOnAdditionWithZero()
        {

        }
    }
}
