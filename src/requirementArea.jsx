import React from 'react';
import AddButton from './addButton'
import Status from './Status'

const RequirementArea = () => (
  <div className='requirement-area'>
    <h1 className='requirement-area-header'>Requirements:</h1>
    <div className='requirement-area-text'>
      <ul>Testing Note 1</ul>
      <Status />
      <ul>Testing Note 2</ul>
      <Status />
      <ul>Testing Note 3</ul>
      <Status />
    </div>
    <input type="text" placeholder="Testing Note Here..."></input>
    <AddButton />
  </div>
);

export default RequirementArea;
