

import React from 'react';
import classNames from 'classnames';



function Checkbox({onClick, title, value, name}) {

  
  return (
    <label>
    <input
      onClick = {onClick}
      name={name}
      checked= {value}
      type="checkbox"
    />
    {title}
   </label>
  );
}

export default Checkbox;


