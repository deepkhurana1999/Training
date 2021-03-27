using CalculatorLib;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace CalculatorUnitTest
{
    [TestClass]
    public class CalculatorTest
    {
        ICalculator calculator;
        private int num1;
        private int num2;
        private int result;
        [TestInitialize]
        public void TestSetup()
        {
            calculator = new Calculator();
            num1 = 7;
            num2 = 9;
            result = 16;
        }
        [TestMethod]
        public void ShouldAddTwoPositiveNumbers()
        {
            var generatedResult = calculator.Addition(num1, num2);
            Assert.AreEqual(result,generatedResult);
        }
        [TestMethod]
        public void ShouldReturnFirstNumberIfSecondNumberIsZero()
        {
            var generatedResult = calculator.Addition(num1, 0);
            Assert.AreEqual(num1, generatedResult);
        }
    }
}
