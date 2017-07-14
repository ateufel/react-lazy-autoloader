React Lazy Autoloader
=====================

Lazy loading on scroll oder interval

## Features

* Simple to use
* Should work with all child elements
* Can autoload children on interval
* Can load children on scroll event
* Works with different children heights when autoloading on interval (a main issue of other lazy renderers)
* Detailed tutorial about this thing: http://www.devils-heaven.com/building-lazy-loader-react/

## Install

```bash
npm install --save react-lazy-autoloader
```

## Usage

```js
import LazyLoad from 'react-lazy-autoloader';

<LazyLoad autoLoad={true} autoLoadInterval={100} itemPadding={5}>
  {children}
</LazyLoad>
```

`children` is an array of React components or just divs or whatever.

## Options

### autoLoad (boolean)
#### default: false
If set to `true`, scroll loading is disabled and content will get autoloaded.
### autoLoadInterval (number)
#### default: 100
Sets the interval to load the next batch of items, only needed if autoLoad is set to `true`.
### itemPadding (number)
#### default: 50
Number of items to load initially and for each batch (when using autoloading).
### childrenHeight (number)
#### default: 50
General children height, only needed when using scroll loading. Can just be the height of the tallest child.
### onLoadFinished (function)
Function to call when all items have been loaded - works with scroll loading and autoloading.
