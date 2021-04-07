# Introduction

At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

## Usage

- Directly execute webpack in cli without a config. It will pick default webpack config.
- Add a webpack config in your project and run webpack using cli.
- Import webpack config in your node executible file and provide it to webpack api. This one provides the best flexibility since you can code and do things more easily.

## Core Concepts

1.  **Entry** :
    An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

    - Default : `./src/index.js`

    ```javascript
    module.exports = {
      entry: "./path/to/my/entry/file.js"
    };
    ```

2.  **Output**
    The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.
    You can configure this part of the process by specifying an output field in your configuration:

    ```javascript
    const path = require("path");
    module.exports = {
      entry: "./path/to/my/entry/file.js",
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "my-first-webpack.bundle.js"
      }
    };
    ```

3.  **Loaders**
    Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
    At a high level, loaders have two properties in your webpack configuration:

    - The `test` property identifies which file or files should be transformed.
    - The `use` property indicates which loader should be used to do the transforming.

    ```javascript
    module.exports = {
      output: {
        filename: "my-first-webpack.bundle.js"
      },
      module: {
        rules: [{ test: /\.txt$/, use: "raw-loader" }]
      }
    };
    ```

    > "Hey webpack compiler, when you come across a path that resolves to a '.txt' file inside of a require()/import statement, use the raw-loader to transform it before you add it to the bundle."
