## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)

2. What is a React `component`?

---
A React component at a high level is a puzzle piece of a whole web application puzzle board. Lower level it is a container for rendering javascript as html. Self containining and reuseable. 
---

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
A simple function would be used as a component if it is just rendering content. When there is a dynamic element needed, meaning it has a state, a class that extends the 'Component' would be best to use. 
---

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
renderReact=()=> {
            ReactDOM.render(
                React.createElement(
                    'div', {
                        className: 'headline'
                    },
                    React.createElement('h1', null, 'Hello Dojo!'),
                ),
                reactContainer);
        }
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
'new' refers to creating a new instance in memory. Such has I want to create a new array therefore memory space needs to be allocated.
---

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
All these choices are pretty good but I am partial to Callbacks at this point. Promises is a close second. 
---

Done! Time to start the [React app](./app-details.md)!