import React from 'react';
import Status from './Status'

const RequirementArea = () => (
  <div className='requirement-area'>
    <Status />
    <input type='text' className='requirement-area-input' placeholder='Input Testing Note Here...'></input>
    <input type='text' className='requirement-area-input' placeholder='Comments here...'></input>
    <button className='trash-icon'></button>
  </div>
);

export default RequirementArea;
