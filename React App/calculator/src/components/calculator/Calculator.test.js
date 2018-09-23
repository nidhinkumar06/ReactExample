function calc(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;
  this.add = function() {
    return this.firstNumber + this.secondNumber;
  }
  this.subtract = function() {
    return this.firstNumber - this.secondNumber;
  }
  this.multiply = function() {
    return this.firstNumber * this.secondNumber;
  }
  this.divide = function() {
    return this.firstNumber / this.secondNumber;
  }
}
//adding
const numberToAdd = new calc(5, 10);
const numberToAddReversed = new calc(10, 5);
//subtraction
const numberToSubtract = new calc(5, 10);
const numberToSubtractReversed = new calc(10, 5);
//multiply
const numberToMultiply = new calc(5, 10);
const numberToMultiplyReversed = new calc(10, 5);
//divide
const numberToDivision = new calc(5, 10);
const numberToDivisionReversed = new calc(10, 5);

describe('check if the add method works as intended', () => {
  test('Check is 5 + 10 is falsey', () => {
    expect(numberToAdd.add() === 50).toBeFalsy();
  });

  test('Check is 5 + 10 is truthy', () => {
    expect(numberToAdd.add() === 15).toBeTruthy();
  });

  test('Check if numbers swithched around is truthy', () => {
    expect(numberToAddReversed.add()).toEqual(15);
  });
})

describe('check if the subtract method works as intended', () => {
  test('Check is 5 - 10 is not negative -5', () => {
    expect(numberToSubtract.subtract() === 5).toBeFalsy();
  });

  test('Check is 10 -5 is 5', () => {
    expect(numberToSubtract.subtract()).toEqual(-5);
  });

  test('Check if the numbers reverse does not equal to same output by other', () => {
    expect(numberToSubtractReversed.subtract() !== -5).toBeTruthy();
  });
})

describe('check if the multiply method works as intended', () => {
  test('Check is 5 * 10 is falsey', () => {
    expect(numberToMultiply.multiply() === 15).toBeFalsy();
  });

  test('check is 5 * 10 is 50', () => {
    expect(numberToMultiply.multiply() === 50).toBeTruthy();
  });

  test('Check if the numbers reverse does not equal to same output by other', () => {
    expect(numberToMultiplyReversed.multiply()).toEqual(50);
  });
})

describe('check if the divide method works as intended', () => {
  test('Check if 5 / 10 is falsey', () => {
    expect(numberToDivision.divide() === 2).toBeFalsy();
  });

  test('check is 5 / 10 is ', () => {
    expect(numberToDivision.divide() === 0.5).toBeTruthy();
  });

  test('Check if the numbers reverse does not equal to same output by other', () => {
    expect(numberToDivisionReversed.divide()).toEqual(2);
  });
})
