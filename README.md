React Lazy Autoloader
=====================

Lazy loading on scroll oder interval

## Features

* Simpe to use
* Should work with all child elements
* Can autoload children on interval
* Can load children on scroll event
* Works with different children heights when autoloading on interval (a main issue of other lazy renderers)
* Detailed tutorial about this thing: http://www.devils-heaven.com/xxx

## Install

```bash
npm install react-lazy-autoloader
```

## Usage

```js
import LazyLoad from 'react-lazy-autloader';

<LazyLoad autoLoad={true} autoLoadInterval={100} itemPadding={5}>
  {children}
</LazyLoad>
```

`children` is an array of React components or just divs or whatever.

## Options

TODO
