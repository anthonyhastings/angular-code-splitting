# AngularJS: Code Splitting + UI Router

## Introduction

This repository showcases how AngularJS can be used in conjunction with Angular
UI Router and webpacks "code splitting" functionality in order to make page
specific bundles that are loaded "on demand". This results in a smaller initial
payload and stops the user having to download code for every page in the site.

## Installation

Run the following commands then navigate to `http://localhost:4321` and explore:

    npm install;
    gulp watch;

## How does code splitting work?

The source code has used code splitting methods within the router of the
application. Each pages overall template and controller have been wrapped told
to be split into their own shared bundle. Whenever this code splitting method
is called during runtime, it triggers the async loading of the shared bundle.

    require.ensure([], function() {
        var myTemplate = require('./template.html');
        var myController = require('./controller');
    }, 'chunk-name-of-your-choosing');

The first parameter is an array of dependencies that need to be resolved before
the second parameter (the callback method) gets executed. The third parameter
allows us to name a chunk which allows it to be added to and reused throughout
the codebase. You can see that templates in the state map add themselves into
the module chunk made in the `resolve` calls of each state.

## Generated Bundles

The application results in four bundles; one entry point and three chunks. The
chunks are loaded on demand and become cached so that repeat visits to the pages
in the same session don't result in constant script downloads.

`app.js` - The main entry point script embedded into all pages.

`1.landing-page.js` - The async chunk for the landing page.

`2.about-page.js` - The async chunk for the about page.

`3.contact-page.js` - The async chunk for the contact page.

## How is the test suite affected?
By writing unit tests that require in the relevant module being tested, we evade
all the calls to the chunks so everything works always as it should.

## More information
* [Webpack: Code Splitting](https://webpack.github.io/docs/code-splitting.html) -
  Explains the concepts of code splitting.

* [Webpack: require.ensure](https://webpack.github.io/docs/code-splitting.html#commonjs-require-ensure) -
  The actual method which triggers the code splitting and creates named chunks.

* [Angular UI Router: $stateProvider](http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider) -
  The service through which we bind our states and use promises to asynchronously load the appropriate named chunk.