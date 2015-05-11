'use strict';

describe('addNums', function() {

  it('adds the two arguments', function() {
    expect(addNums(1, 2)).toEqual(3);
  });

});

describe('subtractNums', function() {

  it('subtracts the two arguments', function() {
    expect(subtractNums(2, 1)).toEqual(1);
  });

});

describe('calculate', function() {

  it('adds the two arguments when callback is addNums', function() {
    expect(calculate(1, 2, addNums)).toEqual(3);
  });

  it('subtracts the two arguments when callback is subtractNums', function() {
    expect(calculate(2, 1, subtractNums)).toEqual(1);
  });

  it('can multiply numbers given the correct callback', function(){
    expect(calculate(2, 3, function(num1, num2){ return num1 * num2; })).toEqual(6);
  });

});