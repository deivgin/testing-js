# Mocking framework

This section is all about mocking. The idea here is that we have a game that we want to test. So we create some hest test in the `__test__` folder, but, in order to understand what is going on we the do the same functionality ourselves in the `no-framework` folder.

## Monkey patching

For this exercise we want to check that our thumb wars function works. We have a problem though, our function `getWinner` returns the winner at random. So in order to make our tests more deterministic we `mock` our `getWinner` function. We do this bu assigning a new function to the `utils.getWinner` object key that would always return player1 as the winner. This process is called `monkey patching`.

An important part of mocking is cleaning up after ourselves.

## Ensuring functions are called correctly

We have an issue in the previous implementation. What if our getWinner functions has a bug, for example we do not call the second param in the arguments of that function? Our tests would pass, but a bug would be left in our code. To fix that we can use `jest.fn()` to create a mock function that we can use to check that our function is called correctly by expecting it to be called with the correct arguments.

We can also implement this functionality ourselves. We can create our own mock function that would hold arguments being called in provided callback and assert them in the end.

## Spy

Having to mock and clean up functions in the code can lead to a lot of bloated code. So jest exposes another nifty function - `jest.spyOn()`. We pass in the object and the key. This creates a new object for us that has a few useful methods - 'mockImplementation' - which does the same mocking as done before, and 'mockRestore' - which restores the original function.

## Mocking modules

In common js monkey patching does not work. So we need to mock the entire module. We can do this in jest by using the provided mock api.
This api makes the code way cleaner, as now in the test it self we do not need to worry about mocking logic, we can transfer it into the mock function and have all of the test logic inside of the test itself. Of course we do still need to reset the mocked data at the end for clean up.

Jest.mock works as it is in control of the module system. We can simulate the same control by using `require.cache`. We can add our module into that cache (we do have to make the object in the cache key look like a module object) and then we can mock the functions used in that cache object. After we are done with the tests we clean up after ourselves using the `delete` keyword and specifying which module we want to delete from the cache - which is the mocked module added at the top.

One interesting part about jest.mock is that when it is run it moves the jest.mock call at the top of the file, before all requires. This allows us to keep the code practices of having all imports at the top of the file.

## Mocks directory

Jest allows us to reuse our mocks by providing us the ability to create a `__mocks__` directory, where we can store all our mocks. We simply create files with the sake name as the files we want to mock and jest will do the rest.

We can create this functionality ourselves.
