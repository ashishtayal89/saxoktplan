## Basics of Module System

Plural videos

Javascript module systems:
https://auth0.com/blog/javascript-module-systems-showdown/

ES6 module:
https://exploringjs.com/es6/ch_modules.html

- Miscellinus

1. How to set the default export in common js module :

   1. Assing it to the **module.exports** or **exports** :

   For instance we consider the below code in file common_export2.js. But all other other properties of the export are assigned to this export. Run `npm run es6` and see the **common default 2**. Notice it exports a function instead of an object with some properties. Also notice that the `a` property is missing from the export since module.exports !== exports now.

   2. `Object.defineProperty(exports, "__esModule", { value: true });`

2) Difference b/w es6 export and common js export?

`Object.defineProperty(__webpack_exports__, "__esModule", { value: true });`

The above line is added when the es6 module is exported. This adds the property `__esModule` and sets it to true in the value exported by the module. Here **webpack_exports** is nothing but module.exports. This is the property which helps in identifing if the imported module is an es6 or common js module.
