1. What problem does the context API help solve?
DRYer code
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions carry out with information from the reducer, reducer are pure functions that get previos state and new state to actions, store makes everything you put in it a global variable to use the reducer
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
app state is the state of the app at any given time whereas component state is only accesible through props and changes the app state
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk lets you use functions inside of other functions and it helps our action creators carry out there actions
1. What is your favorite state management system you've learned and this sprint? Please explain why!
reducers makes everything look pretty in the app.js