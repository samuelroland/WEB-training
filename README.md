# WEB-training
Small WEB exos to train HTML, CSS and JavaScript

## Exo styling

Install the Live Server extension in VSCode, open `index.html` and start designing this page:

![styling.png](imgs/styling.png)

## Arrays manipulation

Install and run tests
```sh
npm install
npx vitest
```

Make all these tests pass ! Open `arrays/arrays.js` and `arrays/arrays.test.js` at the same time, add and complete missing methods.
```
 ✓ arrays.test.js (16)
   ✓ Tests (16)
     ✓ can create an empty array
     ✓ can create a huge array x elements filled with y
     ✓ can push back values and remove at front (push 4 times 10 and pop front 2 times)
     ✓ can take last element in alphabetic order
     ✓ can remove element between 2 given values
     ✓ cannot remove anything if first element is not found
     ✓ cannot remove anything if second element is not found
     ✓ can create a huge array x elements filled with y
     ✓ can uppercase and reverse the array
     ✓ can filter an array basically
     ✓ can filter an array with a regex (h then i between 1 and 3 times and optionnaly an o)
     ✓ can filter an array with a regex (like before but regex must match entire word)
     ✓ can filter an array with a more complex regex (0 to 3 letters between a and e, then numbers under 50)
     ✓ can parse two lines of exo syntax into an exo object
     ✓ can count words separated by strange separators
     ✓ can do 'the product of words' (each word is a calculation of string length + index value)
```

