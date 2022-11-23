# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object oriented programming is the practice of making everything an object. You do this by using classes that can create objects from a blue print. Each object can then  inherit certain properties and methods from the class while having different values. This style of programming allows you to quickly create a large amount of similar objects of a certain type.

Functional programming is all about using functions to output the desired result. I believe in functional programming the idea is to encapsulate everything within a function so that no external variables are needed. If you pass in information you should get the result out and not store that in any variables.

So I think the difference would be that in object oriented programming everything is passed through a class or object and their methods while in functional programming everything is passed through variables and functions. 

Researched answer: The four pillars of object oriented programming are encapsulation, abstraction, inheritance, and polymorphism. 

Encapsulation is maintaining information within an object and only exposes select information outside of the object. Other objects should not have access to the data that is not part of their class and should not be able to make any changes to objects outside of their class.

Abstraction is the practice of only revealing necessary information outside of their class. 

Inheritance is the ability to reuse code between classes and objects.

Polymorphism states that objects are designed to share behaviors and can perform different functions based on the parameters of the program.

Functional programming focuses on the result and not the process, it emphasizes the production of the computed data and does not want to mutate data. All problems are solved within functions and data is passed through parameters and never changed in state but only within the function. This topic goes very deep and I honestly don't understand it well even after reading several articles. I feel it is something that I will have to practice to truly understand and so I don't think it will be beneficial to write a small article yet. The same is true with object oriented programming.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: floats have decimal places while an integer is a whole number.

Researched answer: Ruby will recognize any number with out a decimal place to be an integer and any number with a decimal to be a float. Ruby can't recognize commas for large numbers but will understand underscores in there place. 1_000_000.

Floating point numbers are real numbers and can be rational or irrational. That was just a fancy way of saying a number with a decimal. If you use a float in a calculation the answer will always be a float.

3. Ruby has an implicit return. What does that mean?

Your answer: You do not need to write the return to get a return from a function. Ruby will automatically return the last line of code in a block.

Researched answer: Much like javascript the implicit return should probably only be used when there is a single line of code or only a single line of code that needs to be returned. Ruby will only implicitly return the last line of code within a block. Thou you still need to be careful with the return statement as it will exit out of the block you are in. It seems that it is more standard to use the implicit return when it is possible. 

4. What is a block in Ruby? 

 Your answer: A block is basically a function in a function. It is the block of code that does something within a function.

Researched answer: Ruby blocks are the same thing as a method except that they do not belong to an object. They can accept arguments and return values much like any other functions but they do not have names much like an anonymous function in javascript. 

You can use the yield statement to create parameters inside of methods to be used.

1. How do you extract a value in a Ruby hash?

Your answer: You extract values using bracket notation. for example:  p object[:key]
This will get you the value of the named key.

Researched answer: Of course there is a method for that. You can also use h.fetch(:key) or get all the values with h.values. An h.dig can be used for many nested objects or arrays. For example in a three layer has you could say h.dig(:level1key, :level2key, :level3key) to get the value from the level3key.

Then you have all of the enumerable methods to go through the hash to manipulate it in someway. Each do, map, filter_map, select so on and so forth.

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance allows other classes to be created with certain methods and properties from a parent class. An example would be a class of rabbit extending the class of animal and inheriting certain methods and properties common to all animals. 

2. RSpec: RSpec is the jest of ruby. IT allows for test driven development much the same way that jest does for javascript

3. CRUD: Create, Read, Update, and Delete. These are the basic steps necessary to use data. You need to be able to read the data to say get user information. You need to create that user in the first place. You need to be able to update that users information or perhaps delete parts of that information.

4. Test-driven development: Test driven development is a development process. In this process tests are developed first and then the code is written and tested to pass all test cases before moving on.

5. HTTP: Hypertext transfer protocol is a layer built for transmitting hypermedia document such as HTML
