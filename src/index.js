/* eslint-disable react/jsx-filename-extension */

import { render } from 'react-dom';
import React from 'react';

import Header from './Header';
import RequirementArea from './requirementArea';
import Status from './Status';
import CommentArea from './commentArea';
import AddButton from './addButton';
import RemoveButton from './removeButton';
import './app.css';

const page = (
  <div>
    <Header />
    <RequirementArea />
    <Status />
    <CommentArea />
    <AddButton />
    <RemoveButton />
  </div>
);

const node = document.createElement('div');
document.body.appendChild(node);

render(
  page,
  node
);
