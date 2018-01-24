import React from 'react';

const AddButton = ({ onClick }) => (
  <button onClick={onClick} className='add-button'>
    <div className='plus-sign'>&#43;</div>
  </button>
);

export default AddButton;
