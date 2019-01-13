# if-comp
A very simple component for react when you need to render the component according to the value of the expression.

> **The target is beautify your code!**.

# Usage

```
import React, { Component } from 'react';
import IfComp from 'if-comp';

  const InnerIfComp = () => (
    <IfComp 
      expression={true}
      trueComp={<h3>render true component</h3>}
      falseComp={<h3>render false component</h3>}
    />
  )
  // expression value is true
  <IfComp 
    expression={true}
    trueComp={<h3>render true component</h3>}
    falseComp={<h3>render false component or null</h3>}
  />

  // Render another if-comp
  <IfComp 
    expression={false}
    trueComp={<h3>render true component</h3>}
    falseComp={(
      <div>
        render another if-component
        <InnerIfComp />
      </div>
    )}
  />
```
