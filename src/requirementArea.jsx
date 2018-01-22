import React from 'react';
import Status from './Status'
import CommentArea from './commentArea'
import RemoveButton from './removeButton'

const RequirementArea = () => (
  <div className='requirement-area'>
    <h1 className='requirement-area-header'>Requirements:</h1>
    <Status />
    <input type='text' className='requirement-area-input' placeholder='Input Testing Note Here...'></input>
    <CommentArea />
    <RemoveButton />
  </div>
);

export default RequirementArea;
