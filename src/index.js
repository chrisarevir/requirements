/* eslint-disable react/jsx-filename-extension */

import { render } from 'react-dom';
import React from 'react';

import Header from './Header';
import RequirementArea from './requirementArea';
import CommentArea from './commentArea';
import AddButton from './addButton';
import './app.global.css';

const page = (
  <div>
    <Header />
    <h1 className='requirement-area-header'>Requirements:</h1>
    <RequirementArea />
    <AddButton />
  </div>
);

const node = document.createElement('div');
document.body.appendChild(node);

render(
  page,
  node
);
