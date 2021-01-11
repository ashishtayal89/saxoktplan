## Basics of Webpack

Check your repository and Plural video

Webpack in details:
https://survivejs.com/webpack/introduction/
https://webpack.js.org/concepts/

Followup assignments:

1. Create some simple and useful webpack plugin
2. Try out different source maps

### Webpack Compiler

```javascript
// Can be imported from webpack package
import {Compiler} from 'webpack';

// Create a new compiler instance
const compiler = new Compiler();

// Populate all required options
compiler.options = {...};

// Creating a plugin.
class LogPlugin {
  apply (compiler) {
    compiler.plugin('should-emit', compilation => {
      console.log('should I emit?');
      return true;
    })
  }
}

// Apply the compiler to the plugin
new LogPlugin().apply(compiler);

/* Add other supporting plugins */

// Callback to be executed after run is complete
const callback = (err, stats) => {
  console.log('Compiler has finished execution.');
  // Display stats...
};

// call run on the compiler along with the callback
compiler.run(callback);
```

The Compiler is what we call a Tapable instance. By this, we mean that it mixes in Tapable class to imbibe functionality to register and call plugins on itself. Most user facing plugins are first registered on the Compiler. The working of a Compiler can be condensed into the following highlights

- Usually there is one master instance of Compiler. Child compilers can be created for delegating specific tasks.
- A lot of the complexity in creating a compiler goes into populating all the relevant options for it.
- webpack has `WebpackOptionsDefaulter` and `WebpackOptionsApply` specifically designed to provide the Compiler with all the initial data it requires.
- The Compiler is ultimately just a function which performs bare minimum functionality to keep a lifecycle running. It delegates all the loading/bundling/writing work to various plugins.
- new LogPlugin(args).apply(compiler) registers the plugin to any particular hook event in the Compiler's lifecycle.
- The Compiler exposes a run method which kickstarts all compilation work for webpack. When that is done, it should call the passed in callback function. All the tail end work of logging stats and errors are done in this callback function.
