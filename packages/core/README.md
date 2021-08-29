# ngx-p5/core

This package provides an easy way to use p5 instance mode, working with classes and CSS selector to attach your sketch.

## installation

run:

```bash
npm install @ngx-p5/core

# or

yarn add @ngx-p5/core
```

## example

```javascript
const sketch = function () { /* your awsome sketch */}

createCanvas(sketch, '#awsome-sketch');
```

Optionally you can create a class to manage complexity or integrate with another class base library.

```javascript
class AwsomeSketch {
    setup() {/* your setup */}
    draw() {/* magic here! */}
}

const sketch = toSketch(new AwsomeSketch());
createCanvas(sketch, '#awsome-sketch');
```
