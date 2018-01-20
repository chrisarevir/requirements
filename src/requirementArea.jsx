import React from 'react';
import AddButton from './addButton'

const RequirementArea = () => (
  <div className='requirement-area'>
    <h1 className='requirement-area-header'>Requirements:</h1>
    <div className='requirement-area-text'>There are no requirements.</div>
    <input type="text" placeholder="Testing Note Here..."></input>
    <AddButton />
  </div>
);

export default RequirementArea;
