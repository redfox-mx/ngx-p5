# @ngx-p5/core

This package provides an easy way to use p5 instance mode, working with classes and CSS selector to attach your sketch. Demo [here!](https://codepen.io/redfox-mx/pen/VwWaVgP)

## Installation
```bash
npm install @ngx-p5/core p5
# or
yarn add @ngx-p5/core p5
```
Optional, you can install `@types/p5` 

## How to use

```javascript
const sketch = function (p: p5) {  // if you install @types/p5
  /* your awsome sketch */
  p.setup = function() {
    p.createCanvas(200, 400)
    /*  code */
  }

  p.draw = function() {
    p.line(p.width / 2, 0, p.width / 2, 0);
    /* motion and magic here */
  }
}

createCanvas(sketch, '#awsome-sketch');
```

Optionally you can create a class to manage complexity or integrate with another class base library.

```javascript
class AwsomeSketch {
    setup(p: any ) { // with typescript 
      /* your setup */
    }
    draw(p) { // with javascript
      /* magic here! */
      p.background(0) // black magic color
    }
}

const sketch = toSketch(new AwsomeSketch());
createCanvas(sketch, '#awsome-sketch');
```

__Example__: you can see in action in [codepen](https://codepen.io/redfox-mx/pen/VwWaVgP)

![Fractals](https://github.com/redfox-mx/ngx-p5/raw/main/packages/core/.assets/example.png)

You can use defaul functionality and ommit second param to attach sketch to body `createCanvas(sketch)`.
