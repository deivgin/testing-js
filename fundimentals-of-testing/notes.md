# Fundamentals of testing

This section in the course talks about the idea of testing and how famous frameworks were created.

## 1. Basic form of testing

In the first file - `basicFormOfTesting.js` we two functions of sum and subtract. The sum function is broken, so in order to make sure that it works we write some code to check it. That code is what we expect the answer to be and what the result of that function is. By comparing the two we can then define an error, that is run if the result and the expected answer are not the same.

So, the basic form of testing is - code that checks our solutions and throws errors where the code is broken.

## 2. Assertion library

Writing duplicate code is not a good pattern to have in your code. So, in the file 'assertionLibrary.js' we create a function expect, that takes in what we expect the answer. This function also has a method called toBe, that takes in the result of the function and compares it to the expected answer. If the two are not the same, then it throws an error.

## 3. Testing framework

In the next iteration of our testing code, we separate the function logic and the testing logic. We now have a file `math.js` that stores code we would use in our application and so the new file `testingLibrary.js` can focus solely on testing. We add a new function - `test`. This function has a try, catch block. It "tries" to run our code, if it fails, we get an error, if it succeeds - we get a success message. With this we have created a super basic form of a testing library.

What we can see from the code is that the most important thing for a testing library is to have useful and easy to understand error messages.

## 4. Async await

We can use async functions as well for our testing purposes, the only thing we need to do for this is to add async to test function and await the callback, that we run in the try block. That is done in the `asyncAwait.js` file.

## 5. Jest

From the last file we can see that the api created looks similar to a popular testing framework - jest. By simply updating the files name to adhere to jest requirements, we can run `npx jest` and give away the testing and error handling to jest itself. This is done in the `jest.test.js` file.

## Conclusion

This course helps us understand how testing frameworks are build and the core ideas around it.
