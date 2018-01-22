import React from 'react';
import Status from './Status';

const RequirementArea = () => (
  <div className='requirement-area'>
    <Status />
    <input type='text' className='requirement-area-input' placeholder='Input Testing Note Here...' />
    <input type='text' className='requirement-area-input' placeholder='Comments here...' />
    <button className='trash-icon' />
  </div>
);

export default RequirementArea;
