using CalculatorLib;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace CalculatorUnitTest
{
    [TestClass]
    public class CalculatorTest
    {
        ICalculator calculator;
        private int num1Add;
        private int num2Add;
        private int num1Sub;
        private int num2Sub;
        private int num1Mul;
        private int num2Mul;
        private int num1Div;
        private int num2Div;
        private int result;
        [TestInitialize]
        public void TestSetup()
        {
            calculator = new Calculator();
            num1Add = 7;
            num2Add = 9;
            num1Sub = -10;
            num2Sub = -20;
            num1Mul = 89;
            num2Mul = 78;
            num1Div = 56;
            num2Div = 8;
            result = 16;
        }
        [TestMethod]
        public void ShouldAddTwoPositiveNumbers()
        {
            var generatedResult = calculator.Addition(num1Add, num2Add);
            Assert.AreEqual(result,generatedResult);
        }
        [TestMethod]
        public void ShouldReturnFirstNumberIfSecondNumberIsZero()
        {
            result = num1Add;
            var generatedResult = calculator.Addition(num1Add, 0);
            Assert.AreEqual(result, generatedResult);
        }
        
        [TestMethod]
        public void ShouldSubtractTwoPositiveNumbers()
        {
            result = 10;
            var generatedResult = calculator.Subtraction(num1Sub, num2Sub);
            Assert.AreEqual(result, generatedResult);
        }
        [TestMethod]
        public void ShouldSubtractPositiveNumberAndNegativeNumber()
        {
            result = 60; num1Sub = 40;
            var generatedResult = calculator.Subtraction(num1Sub, num2Sub);
            Assert.AreEqual(result, generatedResult);
        }

        [TestMethod]
        public void ShouldMultiplyTwoPositiveNumbers()
        {
            result = 6942; 
            var generatedResult = calculator.Multiplication(num1Mul, num2Mul);
            Assert.AreEqual(result, generatedResult);
        }
        [TestMethod]
        public void ShouldMultiplyANumberWithZero()
        {
            result = 0; num2Mul = 0;
            var generatedResult = calculator.Multiplication(num1Mul, num2Mul);
            Assert.AreEqual(result, generatedResult);
        }

        [TestMethod]
        public void ShouldDivideTwoPositiveNumbers()
        {
            result = 7;
            var generatedResult = calculator.Division(num1Div, num2Div);
            Assert.AreEqual(result, generatedResult);
        }
        [TestMethod]
        public void ShouldReturnZeroWhenANumberGotDividedByZero()
        {
            result = 0; num2Div = 0;
            var generatedResult = calculator.Division(num1Div, num2Div);
            Assert.AreEqual(result, generatedResult);
        }
    }
}
