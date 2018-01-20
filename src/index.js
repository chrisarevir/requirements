import './app.css';

import { render } from 'react-dom';
import React from 'react';

const header = <header>
  <div className='title'>Requirements</div>
</header>

const requirementArea = <div className='requirementArea'>"This is a testing note"</div>;

const status = "ready pass fail thing";

const commentThings = "Yo";

const addButton = <button>+</button>;

const removeButton = <button>-</button>;

const page = (
  <div>
    {header}
    {requirementArea}
    {status}
    {commentThings}
    {addButton}
    {removeButton}
  </div>
);

const node = document.createElement('div');
document.body.appendChild(node);

render(
  page,
  node
);
