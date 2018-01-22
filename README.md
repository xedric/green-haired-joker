# green-haired-joker
A small repo to demo unit testing in JavaScript for my students

## Technologies used

* [Jest](https://facebook.github.io/jest/)

## Getting started

1. We used [Jests Getting Started](https://facebook.github.io/jest/docs/en/getting-started.html) to setup Jest.
2. We worked on the excersises from [Övningar enhetstest](https://docs.google.com/document/d/1dfEk85siPS5zaCiuvQKPa5phs6E8M4S8AVuaFWcyJSw/edit#heading=h.e95kwuo4ek8c). Note: excersises in swedish

## Code coverage

Jest supports [code coverage](https://en.wikipedia.org/wiki/Code_coverage). Note in [package.json](https://github.com/xedric/green-haired-joker/blob/master/package.json) the lines:

```javascript
"test": "jest --coverage"
```

which tells Jest to run the tests with code coverage. Also note [jest.config.js](https://github.com/xedric/green-haired-joker/blob/master/jest.config.js) with configuration.

In commit ["Code coverage added"](https://github.com/xedric/green-haired-joker/commit/cf4d7ebf8e5a1207892d5676e757594f7ec64fce) we added [batman.js](https://github.com/xedric/green-haired-joker/blob/master/batman.js) which is a file that we dont test which you see here:

![alt text](https://i.imgur.com/488eZyp.png "Code coverage test")

# Authors

Excersises written by David Andersson, [linkedin](https://www.linkedin.com/in/david-andersson-3277252/), [github](https://github.com/lejonmanen)

Code in repo written by Niklas Mårdby, [linkedin](https://www.linkedin.com/in/mardby), [github](https://github.com/xedric)


![alt text](https://i.imgur.com/abufWT0.gif "applauding Joker")