---
languages: javascript
tags: functions, callbacks
---

# Callbacks

In Javascript, you can pass in functions as arguments! Exciting, right?

For example, I want to write a method that will print a line of text and then execute a user-specified function:

```
var printAndCallback = function(text, callback){
  console.log(text);
  return callback();
};
```

I can call my `printAndCallback` function by defining a function outside of printAndCallback.

```
var five = function(){
  return 5;
};

printAndCallback("How are you?", five)
  How are you?
  << 5
```

Or, I can pass the function directly into `printAndCallback`:

```
printAndCallback("I'm fine, thanks!", function(){ return 3; })
  I'm fine, thanks!
  << 3
```

## Note

When you pass a function in as an argument, do not call it with `()`!

## Instructions

Follow the instructions, and get the tests to pass!

To run the specs follow these commands:
```shell
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install learn-co

# to run in the command line run
learn

#to run in the browser
learn -b
```
