# ngx-p5/core

This package provides an easy way to use p5 instance mode, working with classes and CSS selector to attach ypur sketch.

## example

```typescript
const sketch = function () { /* your awsome sketch */}

createCanvas(sketch, '#awsome-sketch');
```

Optionally you can create a class to manage complexity or integrate with another class base library.

```typescript
class AwsomeSketch {
    setup() {/* your setup */}
    draw() {/* magic here! */}
}

const sketch = toSketch(new AwsomeSketch());
createCanvas(sketch, '#awsome-sketch');
```
