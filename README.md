# js-state

js-state is a static analysis tool that runs through a given snippet of code and logs the state variables. It uses the [babel parser](https://babeljs.io/docs/babel-parser) to build an Abstract Syntax Tree (AST) and traverses through it using the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern).

# setup

```
git clone https://github.com/Fakorede/js-state.git
cd js-state
npm install
npm start
```

# limitations

It currently supports only js and jsx code. Futher work would involve the following:

- convert it to a node package so it can be installed and used in javascript projects
- make it flexible so that once installed as a node package, it can scan through js files and identify the state in those files as opposed to hard coding.
- make it highly customizable so it can support different javascript frameworks (ex the ast for vue.js is completely different from that of jsx)
- add support for state management tools such as redux, vuex etc.

