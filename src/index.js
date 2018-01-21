/* eslint-disable react/jsx-filename-extension */

import { render } from 'react-dom';
import React from 'react';

import Header from './Header';
import RequirementArea from './requirementArea';
import CommentArea from './commentArea';
import RemoveButton from './removeButton';
import './app.global.css';

const page = (
  <div>
    <Header />
    <RequirementArea />
    <CommentArea />
    <RemoveButton />
  </div>
);

const node = document.createElement('div');
document.body.appendChild(node);

render(
  page,
  node
);
