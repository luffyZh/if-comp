# If-Comp
A very simple component for react when you need to render the component according to the value of the expression.

# Usage

```
import React, { Component } from 'react';
import IfComp from 'if-comp';

  const InnerIfComp = () => (
    <IfComp 
      expression={true}
      trueComp={<h3>嵌套组件为真</h3>}
      false={<h3>嵌套组件为假</h3>}
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
