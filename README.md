# profile_generator
Generate a profile by conducting a survey.
We will be using the `readline` module in Node that wil help us read one line at a time. It can use any input stream but in our case we are only interested in stdin.

## Conclusion
(source: LHL)
We've created the app that we set out to make! Let's recap why we did it and what we learned.

We know that asynchronous functions need callbacks because Node doesn't know when they'll complete. Callbacks provided to those functions are executed once this type of function is finished. Therefore, if we want to do something after that, we need to nest our code within that callback.

When we need to perform multiple asynchronous functions in sequence (one after the other), then this leads to nested callback functions, as we see in the case of this profile generator application.

This type of code is heavily nested and generally harder to read and follow. it is therefore often referred to as Callback hell, but we prefer to also label it Callback Waterfall since that is what the code looks like visually.