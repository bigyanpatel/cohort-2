/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error();
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  // Helper function to get precedence of operators
  static getPrecedence(operator) {
    if (operator === '+' || operator === '-') {
      return 1;
    } else if (operator === '*' || operator === '/') {
      return 2;
    }
    return 0;
  }

  // Helper function to perform arithmetic operations
  static applyOperator(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) {
          throw new Error('Division by zero');
        }
        return a / b;
    }
  }

  // Function to convert infix expression to postfix expression
  static infixToPostfix(expression) {
    const operators = [];
    const output = [];
    const tokens = expression.replace(/\s+/g, '').split(/([+\-*/()])/).filter(token => token !== '');

    tokens.forEach(token => {
      if (!isNaN(token)) {
        output.push(parseFloat(token));
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length && operators[operators.length - 1] !== '(') {
          output.push(operators.pop());
        }
        operators.pop();
      } else {
        while (operators.length && Calculator.getPrecedence(operators[operators.length - 1]) >= Calculator.getPrecedence(token)) {
          output.push(operators.pop());
        }
        operators.push(token);
      }
    });

    while (operators.length) {
      output.push(operators.pop());
    }

    return output;
  }

  // Function to calculate the result from postfix expression
  static evaluatePostfix(postfixExpression) {
    const stack = [];

    postfixExpression.forEach(token => {
      if (!isNaN(token)) {
        stack.push(token);
      } else {
        const num2 = stack.pop();
        const num1 = stack.pop();
        stack.push(Calculator.applyOperator(num1, num2, token));
      }
    });

    if (stack.length !== 1 || isNaN(stack[0])) {
      throw new Error('Invalid arithmetic expression');
    }

    return stack.pop();
  }

  // Function to calculate the result of the expression
  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, '');

    // Check for invalid characters in the expression
    if (!/^[\d+\-*/().]+$/.test(sanitizedExpression)) {
      throw new Error('Invalid expression');
    }

    // Check for unbalanced parentheses using a stack
    const stack = [];
    for (let i = 0; i < sanitizedExpression.length; i++) {
      const char = sanitizedExpression.charAt(i);
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0 || stack.pop() !== '(') {
          throw new Error('Invalid parentheses');
        }
      }
    }

    if (stack.length !== 0) {
      throw new Error('Invalid parentheses');
    }

    const postfixExpression = Calculator.infixToPostfix(sanitizedExpression);
    this.result = Calculator.evaluatePostfix(postfixExpression);
  }
}

const calc = new Calculator();

console.log(calc.calculate("(4 + 2) - 3"))

module.exports = Calculator;