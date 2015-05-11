'use strict';

describe('saySomething', function() {

  it('says hello when callback is sayHello', function() {
    expect(saySomething("Amanda", sayHello)).toEqual("Hello Amanda!");
  });

  it('says goodbye when callback is sayGoodbye', function() {
    expect(saySomething("Steven", sayGoodbye)).toEqual("Goodbye Steven!");
  });

  it('says hello when callback is sayHappyBirthday', function() {
    expect(saySomething("Josh", sayHappyBirthday)).toEqual("Happy Birthday Josh!");
  });

});
